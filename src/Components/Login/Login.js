import React from 'react'
import styles from './Login.module.css'
import InputControl from '../InputControl/InputControl';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { account } from '../../Appwrite/appwrite.config';


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const loginUser = async (event) =>{
        if(!user.email || !user.password){
            setErrorMsg("Kindly Fill All Fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        try {
          await account.createEmailSession(user.email,user.password);
          navigate("/home");
        } catch (error) {
            console.log(error);
            setErrorMsg(error);
        }
    };

  return (

    <>
      
      <div className={styles.container}>
          
          <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>

            <InputControl label="Email"  type="email" placeholder="Enter email address"
            onChange={(event) => setUser ({ ...user, email: event.target.value})}/>
            <InputControl label="Password" type="password" placeholder="Enter password"
            onChange={(event) => setUser ({ ...user, password: event.target.value})}/>

            

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={loginUser} disabled={submitButtonDisabled}> Login</button>
              <p>Don't have an Account ? {" "}
              <span><Link to="/signup">Sign Up</Link></span></p>
              <p><span><Link to="/">Back</Link></span></p>
            </div>

            

          </div>
      </div>
    </>
  );
}


export default Login