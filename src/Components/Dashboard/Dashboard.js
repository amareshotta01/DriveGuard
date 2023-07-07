import React from "react";
import { account } from '../../Appwrite/appwrite.config';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from "react";

function Dashboard() {

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
  
  const handleLogout = async () => {
    try{
      await account.deleteSession("current")
      navigate("/");
    }catch (error){
      console.log(error);
    }
  }

  const handleHomeBtn = () => {
    navigate("/homepage");
  }

  const handleLoginBtn = () => {
    navigate("/login");
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
              <button
                className="mx-2"
                onClick={handleHomeBtn}
              >
                Home
              </button>
            </div>
            <div className="container-xxl border mt-5 p-3">
              <div className="my-3">
               <h6>UID : {userDetails.$id} </h6>
                <h6>Name : {userDetails.name} </h6>
                <h6>Email : {userDetails.email} </h6>
                {/* <h6>
                  Email Verified :
                  {userDetails.emailVerificaton ? "Verified" : "Not-Verified"}
                </h6> */}
                <h6>  
                  Registered on : {new Date(userDetails.registration).toDateString()} , 
                                  {new Date(userDetails.registration).toLocaleTimeString()}
                </h6>
              </div>
          </div>
        </div>
      </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <button
                className="mx-2"
                onClick={handleLoginBtn}
              >
                Login
              </button>
        </p>
      )}
    </>
  );
}

export default Dashboard;


