import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="container fixed-bottom text-center footer">
            <h6 className="text-muted">Copyright &copy; {new Date().getFullYear()} | <Link to="/contact">Contact Me</Link></h6>
        </footer>
    )
}

export default Footer
