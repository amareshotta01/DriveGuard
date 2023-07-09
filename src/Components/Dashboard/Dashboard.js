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
          <div className="container-xl border mt-5 p-3">
            <div>
              <h1 className="text-xl m-4">Hello {userDetails.name} !</h1>
            </div>
            <hr/>
            <div className="">
              <h3 className="mt-4"><u>USER DETAILS</u></h3>
              <div className="my-3">
               <h4 className="">UID :<br/> </h4> <h5 className="my-3">{userDetails.$id} </h5>
                <h4 className="">Name :<br/> </h4> <h5 className="my-3">{userDetails.name} </h5>
                <h4 className="">Email :<br/> </h4> <h5 className="my-3">{userDetails.email} </h5>
                {/* <h6>
                  Email Verified :
                  {userDetails.emailVerificaton ? "Verified" : "Not-Verified"}
                </h6> */}
                  
                <h4 className=""> Registered on :<br/> </h4> <h5 className="my-3">{new Date(userDetails.registration).toDateString()} , 
                                  {new Date(userDetails.registration).toLocaleTimeString()}
                </h5>
              </div>
              <hr />
            </div>
            <div className="m-4">
              <button className="btn btn-dark" onClick={handleLogout}>
                Logout
              </button>
              <button className="mx-4 btn btn-dark" onClick={handleHomeBtn}>
                Home
              </button>
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


