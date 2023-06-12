<<<<<<< HEAD
import { Link } from "react-router-dom";
import logo from "../assets/logo_signature.png";
import * as FaIcons from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Navigation = ({ img }) => {
  const [show, setShow] = useState(false);
=======
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {useState} from 'react'

const Navigation = () => {
    const [show, setShow] = useState(false)
>>>>>>> refs/remotes/origin/main

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

<<<<<<< HEAD
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <div className="navbar-brand" id="logo">
          <Link to="/">
            <img src={logo} alt="logo" width="75" />
          </Link>
        </div>
        <span
          className="sidebar-nav d-block d-lg-none d-md-none mx-4"
          onClick={handleShow}
        >
          <FaIcons.FaBars />
        </span>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="md"
          className="sidebar"
        >
          <span onClick={handleClose} className="mt-5 mx-4 text-end d-md-none">
            <FaIcons.FaTimes />
          </span>
          <Offcanvas.Body className={show && "sidebar-display"}>
            <Link onClick={handleClose} to="/" className="nav-link">
              Home
            </Link>
            <Link onClick={handleClose} to="/about" className="nav-link">
              About
            </Link>
            <Link onClick={handleClose} to="/projects" className="nav-link">
              Projects
            </Link>
            <Link onClick={handleClose} to="/testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link onClick={handleClose} to="/blog" className="nav-link">
              Blog
            </Link>
            <Link onClick={handleClose} to="/contact" className="nav-link">
              Contact
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};
=======
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <div className="navbar-brand" id="logo">
                    <Link to='/'><p>afs</p></Link>
                </div>
                <span className="sidebar-nav d-block d-lg-none d-md-none mx-4" onClick={handleShow}><FaIcons.FaBars /></span>
                <Offcanvas show={show} onHide={handleClose} responsive="md" className="sidebar">
                    <span onClick={handleClose} className="mt-5 mx-4 text-end d-md-none"><FaIcons.FaTimes/></span>
                    <Offcanvas.Body className={show && "sidebar-display"}>
                        <Link to='/' className="nav-link" onClick={()=>{handleClose()}}>Home</Link>
                        <Link to='/about' className="nav-link" onClick={()=>{handleClose()}}>About</Link>
                        <Link to='/projects' className="nav-link" onClick={()=>{handleClose()}}>Projects</Link>
                        <Link to='/testimonials' className="nav-link" onClick={()=>{handleClose()}}>Testimonials</Link>
                        <Link to='/blog' className="nav-link" onClick={()=>{handleClose()}}>Blog</Link>
                        <Link to='/contact' className="nav-link" onClick={()=>{handleClose()}}>Contact</Link>
                    </Offcanvas.Body> 
                </Offcanvas>
            </div>
        </nav>
    )
}
>>>>>>> refs/remotes/origin/main

export default Navigation;
