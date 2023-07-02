import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard  from './Components/Dashboard/Dashboard';
import HomePage from './Components/HomePage/HomePage';
import './App.css';
import Loading from './Components/Loading/loading';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ForgetPassword/ResetPassword';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/loading" element={<Loading/>} />
          <Route exact path='/homepage' element={<HomePage/>}/>
          <Route exact path="/forget-password" element={<ForgetPassword/>} />
          <Route exact path="/resetpassword" element={<ResetPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
