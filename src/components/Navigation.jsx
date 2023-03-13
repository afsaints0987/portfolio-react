import {Link} from 'react-router-dom'
import logo from '../assets/logo_signature.png'
import * as FaIcons from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {useState} from 'react'

const Navigation = ({img}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <div className="navbar-brand" id="logo">
                    <Link to='/'><img src={logo} alt="logo" width="75"/></Link>
                </div>
                <span className="sidebar-nav d-block d-lg-none d-md-none mx-4" onClick={handleShow}><FaIcons.FaBars /></span>
                <Offcanvas show={show} onHide={handleClose} responsive="md" className="sidebar">
                    <span onClick={handleClose} className="mt-5 mx-4 text-end d-md-none"><FaIcons.FaTimes/></span>
                    <Offcanvas.Body className={show && "sidebar-display"}>
                        <Link to='/' className="nav-link">Home</Link>
                        <Link to='/about' className="nav-link">About</Link>
                        <Link to='/projects' className="nav-link">Projects</Link>
                        <Link to='/testimonials' className="nav-link">Testimonials</Link>
                        <Link to='/blog' className="nav-link">Blog</Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </Offcanvas.Body> 
                </Offcanvas>
            </div>
        </nav>
    )
}

export default Navigation
