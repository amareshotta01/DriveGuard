import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from '../Bootstrap/Searchbar';
import './HomePage.css';


function HomePage() {
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
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      
      </div>
      <div className="image">
        <div className="Img-text">
        <p className='home-heading'>DRIVEguard.</p>
        <p className='home-desc'>make your trip safe and easy</p>
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