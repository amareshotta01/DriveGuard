import React,{ useState } from 'react'
import styles from './Signup.module.css'
import InputControl from '../InputControl/InputControl';
import { Link , useNavigate} from 'react-router-dom';
import { account } from '../../Appwrite/appwrite.config';
import { ID } from 'appwrite';
function Signup () {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


    //signup
    

    
    const signUpUser =  async (e) =>{
        
        if(!user.name || !user.email || !user.password){
            setErrorMsg("Kindly Fill All Fields !!!");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);

        try {
          await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
          );
          await account.createEmailSession(user.email, user.password);
          navigate("/dashboard")
        } 
        catch (error) {
        setErrorMsg(e.message);
        }

    };

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Sign Up</h1>

          <InputControl label="Name" type="text" placeholder="Enter your name" 
          onChange={ (event) => setUser ({ ...user, name: event.target.value})} />
          <InputControl label="Email" type="email" placeholder="Enter email address" 
          onChange={ (event) => setUser({ ...user, email: event.target.value})} />
          <InputControl label="Password" type="password" placeholder="Enter password" 
          onChange={ (event) => setUser({ ...user, password: event.target.value})} />


          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={signUpUser} disabled={submitButtonDisabled}>Sign Up</button>
            <p>Already have an Account ? {" "}
            <span><Link to="/login">Login</Link></span></p>
          </div>
        </div>
    </div>
  );
}

export default Signup;