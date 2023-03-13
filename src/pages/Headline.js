import MotionContainer from '../components/MotionContainer'
import {Link} from 'react-router-dom'

const Headline = () => {
    return (
        <MotionContainer>
            <div className="container" id="home-description">
                <p>As a full-time web designer and developer, I specialize in offering a comprehensive range of services, including web design, logo design, and web development. I am currently <strong>#OpenForWork</strong> and would be thrilled to lend my expertise to your next project.</p>

                <p>If you're looking to revamp your online presence or create a brand-new website from scratch, let's work together to bring your vision to life. Please don't hesitate to reach out to me using the button below, and we can discuss your needs in more detail. I look forward to the opportunity to collaborate with you and help your business succeed.</p> 
                <Link to='/contact' className="btn btn-primary" id="cta-btn">Contact Me</Link>
            </div>
        </MotionContainer>
    )
}

export default Headline
