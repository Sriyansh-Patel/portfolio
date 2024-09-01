import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";

// Social icons
import fb from './assets/img/nav-icon1.svg';
import insta from './assets/img/nav-icon2.svg';
import linkedin from './assets/img/nav-icon3.svg';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../src/App.jsx';

export default function NavBar() {
  const [scrolledY, setScroll] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
      setToggle(false);
    }
    else setScroll(false);
  };

  // Access toggle and setToggle from DataContext
  const { toggle, setToggle } = useContext(DataContext);

  // Add scroll event listener in useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  let colapse=()=>{
    document.getElementsById("basic-navbar-nav").classList.remove("show");
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolledY ? "bg-body-tertiary scrolled" : "bg-body-tertiary"}>
        <Container>
          <Navbar.Brand href="#logo" className='logo'>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setToggle(!toggle)} />
          
          <Navbar.Collapse id="basic-navbar-nav" className={scrolledY?{colapse}:""}>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='nav-selected'>Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>

            <span className='Contact'>
              <div className='social-icons'>
                <a href='/fb'><img src={fb} alt="Facebook" /></a>
                <a href='/insta'><img src={insta} alt="Instagram" /></a>
                <a href='/linkedin'><img src={linkedin} alt="LinkedIn" /></a>
              </div>
              <button className='connect'><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
