
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home  from './Components/Home/Home';
import './App.css';
import { useState } from 'react';
import { auth } from "./Components/firebase";
import Loading from './Components/Loading/loading';

function App() {

  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName("");
      }
    });
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/home" element={<Home name={userName}/>} />
          <Route exact path="/loading" element={<Loading/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
