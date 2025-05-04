import MotionContainer from '../components/MotionContainer'
import {Link} from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';

const Headline = () => {
  const {darkMode} = useTheme()
    return (
      <MotionContainer>
        <div
          className="d-flex flex-column align-items-center"
        >
          <p>
            Hi, I’m a full-time web designer and developer, passionate about
            crafting clean, functional, and visually engaging websites. I
            specialize in web design, logo creation, and end-to-end web
            development. I'm currently open to new projects—whether you're
            building from scratch or refreshing your online presence, I’d love
            to help. Click the button below to get in touch and let’s bring your
            ideas to life.
          </p>

          <Link to="/contact" className={`btn ${darkMode ? "btn-primary" : "btn-outline-primary"}`} id="cta-btn">
            Contact Me
          </Link>
        </div>
      </MotionContainer>
    );
}

export default Headline
