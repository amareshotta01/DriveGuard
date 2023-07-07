import React, { useState } from "react";
import { account } from "../../Appwrite/appwrite.config";


const ForgetPassword = () => {
  const [userEmail, setUserEmail] = useState("");

  const forgetPassword = async (e) => {
    e.preventDefault();
    if (userEmail && userEmail.includes('@')) {
      await account.createRecovery(
        userEmail,
        "http://localhost:3000/resetpassword"
      );
      
      alert("Email has been sent")
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="container-xl w-50 h-50 mt-5 border justify-content-center">
      <h2 className="mb-4"> Password Recovery</h2>
      <form className="container align-items-center">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter you email
          </label>
          <input
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            type="email"
            name="email"
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          className="btn btn-primary mb-3"
          type="submit"
          onClick={(e) => forgetPassword(e)}
        >
          Reset password
        </button>
      </form>

    </div>
  );
};

export default ForgetPassword;