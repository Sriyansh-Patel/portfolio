import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'animate.css'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.svg';
import ln from '../assets/img/nav-icon1.svg';
import fb from '../assets/img/nav-icon2.svg';
import icon3 from '../assets/img/nav-icon3.svg';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
export default function Navs(){
  const [scrolled,setScrolled]=useState(false);
  const [activeLink,setActiveLink]=useState("home");

  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[])


  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }


    return(
      <Router>
      <Navbar expand="md" className={ scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo"  />          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>  
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navabar-text">
            <div className="social-icon">
              <a href="#"><img src={ln} alt="linkedin" /></a>
              <a href="#"><img src={fb} alt="facebook" /></a>
              <a href="#"><img src={icon3} alt="insta" /></a>
            </div>
            <HashLink to='#connect'>
            <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}