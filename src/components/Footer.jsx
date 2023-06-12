<<<<<<< HEAD
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="container fixed-bottom text-center footer">
            <h6 className="text-muted">Copyright &copy; {new Date().getFullYear()} | <Link to="/contact">Contact Me</Link></h6>
=======
const Footer = () => {
    return (
        <footer className="container fixed-bottom text-center footer mb-2">
            <small className="text-muted">&copy; {new Date().getFullYear()} Aaron Fritz Santos</small>
>>>>>>> refs/remotes/origin/main
        </footer>
    )
}

export default Footer
