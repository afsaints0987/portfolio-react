import {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons';

const Typewriter = ({text, speed}) => {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)


    // Make a Typewriter animation
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(currentIndex => currentIndex + 1);
        }, speed);
    
    return () => clearInterval(intervalId);
    }, [currentIndex, speed, text]);
    
    return <p id="headline-text">{displayText}</p>
}

const Home = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="d-flex flex-column justify-content-center text-center col-lg-6" id="homepage">
                    <div className="avatar">
                        <span className="avatar-img shadow"></span>
                    </div>
                    <div className="headline mt-4">
                        <h1>Aaron Fritz Santos</h1>
                        <Typewriter text="Full Stack Developer | UI/UX Designer" speed={50}/>
                    </div>
                    <div className="icons container">
                        <SocialIcon url="https://github.com/afsaints0987" style={{height: 50, width: 50}} target="_blank" rel="noreferrer noopener" />
                        <SocialIcon url="https://www.linkedin.com/in/afsaints0987/" style={{height: 50, width: 50}} target="_blank" rel="noreferrer noopener"/>
                        <SocialIcon url="https://www.facebook.com/afsaintsdesign/" style={{height: 50, width: 50}} target="_blank" rel="noreferrer noopener"/>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Home
