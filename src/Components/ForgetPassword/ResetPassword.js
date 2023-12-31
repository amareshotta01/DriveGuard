import React, { useState } from "react";
import { useNavigate } from "react-router";
import { account } from "../../Appwrite/appwrite.config";


const ResetPassword = () => {

  const navigate = useNavigate();
  const [password, setpassword] = useState({
    newPassword: "",
    repeatedPassword: "",
  });
  const changePassword = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    if (password.newPassword === password.repeatedPassword){
      await account.updateRecovery(
        userId,
        secret,
        password.newPassword,
        password.repeatedPassword
      );
      navigate("/homepage");
    } else {
      alert('Both new password and the repeated password should be same');
    }
 
  };

  return (
    <div>
      <div className="container-xl w-50 h-50 mt-5 border justify-content-center">
        <h2 className="mb-4"> Reset your password </h2>
        <form className="container">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter your new password :
            </label>
            <input
              required
              type="password"
              name="password"
              onChange={(e) => {
                setpassword({
                  ...password,
                  newPassword: e.target.value,
                });
              }}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Repeat your new password :
            </label>
            <input
              required
              type="password"
              name="password"
              onChange={(e) => {
                setpassword({
                  ...password,
                  repeatedPassword: e.target.value,
                });
              }}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            className="btn btn-success mb-3"
            type="submit"
            onClick={(e) => changePassword(e)}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;