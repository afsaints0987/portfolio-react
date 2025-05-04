import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import logo from "/assets/logo-1.png";
import { useTheme } from "../context/ThemeContext";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const { darkMode } = useTheme();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container align-middle my-4 px-4 px-lg-0">
        <div className="navbar-brand" id="logo">
          <a href="/">
            <span className="logo text-muted">
              afsantos
              <span className={darkMode ? "text-white" : "text-dark"}>
                .dev
              </span>
            </span>
          </a>
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
          className={`${darkMode ? "dark" : "light"}`}
        >
          <span
            onClick={handleClose}
            className={`mt-5 mx-4 text-end d-md-none ${
              darkMode ? "text-white" : "text-dark"
            }`}
          >
            <FaIcons.FaTimes />
          </span>
          <Offcanvas.Body className="bold">
            <Link
              to="/"
              className="nav-link pt-2"
              onClick={() => {
                handleClose();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link pt-2"
              onClick={() => {
                handleClose();
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="nav-link pt-2"
              onClick={() => {
                handleClose();
              }}
            >
              Projects
            </Link>
            <Link
              to="/testimonials"
              className="nav-link pt-2"
              onClick={() => {
                handleClose();
              }}
            >
              Testimonials
            </Link>
            {/* <Link to='/blog' className="nav-link" onClick={()=>{handleClose()}}>Blog</Link> */}
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              <button
                className={`btn ${
                  darkMode ? "btn-primary" : "btn-outline-primary"
                } border-none align-middle`}
              >
                Let's Connect
              </button>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navigation;
