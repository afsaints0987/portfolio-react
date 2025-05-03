import MotionContainer from '../components/MotionContainer'
import {Link} from 'react-router-dom'

const Headline = () => {
    return (
      <MotionContainer>
        <div className="container" id="home-description">
          <p>
            Hi, I’m a full-time web designer and developer, passionate about
            crafting clean, functional, and visually engaging websites. I
            specialize in web design, logo creation, and end-to-end web
            development.
          </p>

          <p>
            I'm currently open to new projects—whether you're building from
            scratch or refreshing your online presence, I’d love to help. Click
            the button below to get in touch and let’s bring your ideas to life.
          </p>
          <Link to="/contact" className="btn btn-outline-primary" id="cta-btn">
            Contact Me
          </Link>
        </div>
      </MotionContainer>
    );
}

export default Headline
