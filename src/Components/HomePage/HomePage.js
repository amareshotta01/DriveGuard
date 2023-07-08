import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css';
import { account } from '../../Appwrite/appwrite.config';
import { Link } from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-free';
// import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// library.add(faFacebookF, faInstagram, faTwitter, faLinkedinIn);

import { useState } from 'react';
import { useEffect } from 'react';

function HomePage() {
  const [userDetails, setUserDetails] = useState();
  async function fetchData() {
    try {
        const response = await account.get();
        // console.log(response);
        setUserDetails(response);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  


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
          <Navbar.Brand className='mx-3'><Navbar.Brand href="/homepage" className=' m-0 nav-drive'>DRIVE</Navbar.Brand><Navbar.Brand href="/homepage" className='nav-guard'>guard.</Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto m-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link> 
          </Nav>
          <Navbar.Collapse className="justify-content-end m-1">
          <span ><Link to="/dashboard" className='user'>Hello {userDetails && userDetails.name } !</Link></span>
        </Navbar.Collapse>
    </Navbar>
    </div>
      <div className="image" id="home">
        <div className="Img-text">
        <p className="home">
        <p className='home-heading'>DRIVE</p><p className='guard'>guard.</p></p>
        <div className='home-desc'>making your trip safe and easy</div>
        </div>
      </div>
      <div className="about-us-container">
      <div className="about-us" id='aboutus'>
        <div className="about-us-heading">About us</div>
        <div className="about-us-desc">A comprehensive safety-focused solution to keep passengers safe and  to create a safe travel experience. This solution will leverage technology to enhance ride safety for millions of users. We aim to address the specific safety concerns of women, passengers with children, and drivers by integrating innovative features mentioned below.</div>
      </div>

      <div className='services-container' id="services">
        <div className="services-heading">Services</div>
        <div className='container'>
          {/* service item box */}
          <div className='seivice-items'>
            <h3>Voice Recognition</h3>
            <p>Monitors and analyze voice interactions between passengers and drivers within the ride-hailing platform.</p>
            <button>Click here</button>
          </div>

          <div className='seivice-items'>
            <h3>Intelligent Trip Monitoring</h3>
            <p>Utilizes real-time data from sensor and monitors driving behavior or potentially unsafe actions.</p>
            <button>Click here</button>
          </div>

          <div className='seivice-items'>
            <h3>Safety Analytics Dashboard</h3>
            <p>This dashboard enables ride-hailing companies to identify patterns, uncover areas for improvement, and implement proactive measures to enhance ride safety.</p>
            <button>Click here</button>
          </div>

          <div className='seivice-items'>
            <h3>Gamification System</h3>
            <p>This system rewards drivers for consistently adhering to safety protocols and receiving positive feedback from passengers</p>
            <button>Click here</button> 
          </div>

        </div>
      </div>

      <div>
        <footer>
          <div className='footer-content'>
            
            <div className='left box'>
              <h2>Connect us</h2>
              <div className='content'>
                <p>Also connect us on differnt social media platforms</p>
                <div className='social'>
                  <a herf="#"><span class="fab fa-facebook-f"></span></a>
                  <a herf="#"><span class="fab fa-instagram"></span></a>
                  <a herf="#"><span class="fab fa-twitter"></span></a>
                  <a herf="#"><span class="fab fa-linkedin-in"></span></a>
                </div>
              </div>
            </div>

            <div className='center box'>
              <h2>Address</h2>
              <div className='content'>

                <div className='place'>
                  <span className='fas fa-map-marker-alt'></span>
                  <span className='text'>Sambalpur,Odisha</span>
                </div>

                <div className='phone'>
                  <span className='fas fa-phone-alt'></span>
                  <span className='text'>+91 7890654213</span>
                </div>

                <div className='email'>
                  <span className='fas fa-envelope'></span>
                  <span className='text'>driveguard@gmail.com</span>
                </div>

              </div>
            </div>

            <div className='right box'>
              <h2>Contact us</h2>
              <div className='content'>
                <form action="#">
                  <div className='email'>
                    <div className='text'>Email</div>
                    <input type="email" id="email" required aria-required="true" />
                  </div>
                  <div className='msg'>
                    <div className='text'>Message</div>
                    <textarea rows={2} cols={25} required aria-required="true" />
                  </div>
                  <div className='btn'>
                    <button type="submit" className='btn'>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
      
      </>
  );
}

export default HomePage;

