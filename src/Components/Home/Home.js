import React from "react";
import { Link } from "react-router-dom";
import { account } from '../../Appwrite/appwrite.config';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from "react";

function Home() {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function(response){
        // console.log(response);
        setUserDetails(response);
      },
      function(error){
        console.log(error);
      }
    )
  }, [])

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    try {
      await account.delete();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleLogout = async () => {
    try{
      await account.deleteSession("current")
      navigate("/");
    }catch (error){
      console.log(error);
    }
  }
  
  return (
    <>
      {userDetails ? (
        <>
          <div className="">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className=""
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="container-xxl border mt-5 p-3">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => {
                    navigate("/forget-password");
                  }}
                >
                  Change Password
                </button>
              </div>

              <div className="my-3">
               <h6>UID : {userDetails.$id} </h6>
                <h6>Name : {userDetails.name} </h6>
                <h6>Email : {userDetails.email} </h6>
                {/* <h6>
                  Email Verified :
                  {userDetails.emailVerificaton ? "Verified" : "Not-Verified"}
                </h6> */}
                <h6>  
                  Registered on : {new Date(userDetails.registration).toGMTString()};
                </h6>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => handleDeleteAccount(e)}
                >
                  Delete Account
                </button>
              </div>
          </div>
        </div>
      </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/login">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Home;


