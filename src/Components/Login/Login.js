import React from 'react'
import styles from './Login.module.css'
import InputControl from '../InputControl/InputControl';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";


function Login() {
  const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () =>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill All Fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(
            async(res)=>{
                setSubmitButtonDisabled(false);
                navigate("/home");
            }
        ).catch(err => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login</h1>

          <InputControl label="Email" placeholder="Enter email address"
          onChange={(event) => setValues ((prev) => ({ ...prev, email: event.target.value}))}/>
          <InputControl label="Password" type="password" placeholder="Enter password"
          onChange={(event) => setValues ((prev) => ({ ...prev, pass: event.target.value}))}/>

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}> Login</button>
            <p>Don't have an Account ? {" "}
            <span><Link to="/signup">Sign Up</Link></span></p>
          </div>

          <span className={styles.heading}><Link to="/">Back</Link></span>

        </div>
    </div>
  );
}


export default Login