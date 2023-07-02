import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css';
import { account } from '../../Appwrite/appwrite.config';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function HomePage() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
      try {
          const response = await account.get();
          // console.log(response);
          setUserDetails(response);
      } catch (error) {
          console.log(error);
      }
  }


  return (
    <>
    <style>{`
        .bg-color
        {
            background-color:var(--white, #FFF)
        }
        .box-shadow
        {
            box-shadow: 0px 0px 2px 0px rgba(79, 94, 113, 0.12), 0px 2px 4px 0px rgba(79, 94, 113, 0.11), 0px 4px 8px 0px rgba(79, 94, 113, 0.10);
        }
        
    `}
    </style>
   <div className="box">
    <Navbar bg="color" data-bs-theme="light" className="box-shadow ">
          <Navbar.Brand href="#home" className='m-1'>Navbar</Navbar.Brand>
          <Nav className="me-auto  ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           
          </Nav>
          <Navbar.Collapse className="justify-content-end m-1">
          <p><span ><Link to="/dashboard" className='user'>{userDetails && userDetails.name}</Link></span></p>
        </Navbar.Collapse>
      </Navbar>
      
      </div>
      <div className="image">
        <div className="Img-text">
        <p className="home">
        <p className='home-heading'>DRIVE</p><p className='guard'>guard.</p></p>
        <div className='home-desc'>making your trip safe and easy</div>
        </div>
      </div>
      <div className="about-us-container">
      <div className="about-us">
        <div className="about-us-heading">About us</div>
        <div className="about-us-desc">A comprehensive safety-focused solution to keep passengers safe and  to create a safe travel experience. This solution will leverage technology to enhance ride safety for millions of users. We aim to address the specific safety concerns of women, passengers with children, and drivers by integrating innovative features mentioned below.</div>
      </div>
      </div>
      
      </>
  );
}

export default HomePage;