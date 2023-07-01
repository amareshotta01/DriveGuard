import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home  from './Components/Home/Home';
import './App.css';
import { useState } from 'react';
import Loading from './Components/Loading/loading';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/loading" element={<Loading/>} />
          <Route exact path="/forget-password" element={<ForgetPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
