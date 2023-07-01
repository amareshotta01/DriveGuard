import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import map from './roadnetworkimg.svg'
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
        <SearchBar/>
        <div className="Img-text">
        <p className='heading'>DRIVEguard.</p>
        <p>make your trip safe and easy</p>
        </div>
      </div>
      
      </>
  );
}

export default HomePage;