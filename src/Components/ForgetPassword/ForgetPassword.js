import React, { useState } from "react";
import { account } from "../../Appwrite/appwrite.config";


const ForgetPassword = () => {
  const [userEmail, setUserEmail] = useState("");

  const forgetPassword = async (e) => {
    e.preventDefault();
    if (userEmail && userEmail.includes('@')) {
      await account.createRecovery(
        userEmail,
        "http://localhost:3000/reset-password"
      );

      alert("Email has been sent")
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="">
      <h2 className=""> Password Recovery</h2>
      <form className="">
        <div className="">
          <label for="exampleInputPassword1" className="form-label">
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
          className="btn btn-primary"
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