import {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom';


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
    
    return <p id="headline-text" >{displayText}</p>
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
                </div>
                <div className="col-lg-6">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Home
