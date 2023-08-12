import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {useState} from 'react'
import logo from '../assets/logo-1.png'

const Navigation = () => {
    const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <div className="navbar-brand" id="logo">
                    <Link to='/'>
                        <img src={logo} alt="logo" width="75px"/>
                    </Link>
                </div>
                <span className="sidebar-nav d-block d-lg-none d-md-none mx-4" onClick={handleShow}><FaIcons.FaBars /></span>
                <Offcanvas show={show} onHide={handleClose} responsive="md" className="sidebar">
                    <span onClick={handleClose} className="mt-5 mx-4 text-end d-md-none"><FaIcons.FaTimes/></span>
                    <Offcanvas.Body className={show && "sidebar-display"}>
                        <Link to='/' className="nav-link" onClick={()=>{handleClose()}}>Home</Link>
                        <Link to='/about' className="nav-link" onClick={()=>{handleClose()}}>About</Link>
                        <Link to='/projects' className="nav-link" onClick={()=>{handleClose()}}>Projects</Link>
                        <Link to='/testimonials' className="nav-link" onClick={()=>{handleClose()}}>Testimonials</Link>
                        {/* <Link to='/blog' className="nav-link" onClick={()=>{handleClose()}}>Blog</Link> */}
                        <Link to='/contact' className="nav-link" onClick={()=>{handleClose()}}>Contact</Link>
                    </Offcanvas.Body> 
                </Offcanvas>
            </div>
        </nav>
    )
}

export default Navigation;
