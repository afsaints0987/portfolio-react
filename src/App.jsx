import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState, useCallback, useEffect} from 'react'
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Error404 from './pages/Error404';
// import Blog from './pages/Blog';
// import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact';
import Headline from './pages/Headline';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loading from './components/Loading';
import MotionContainer from './components/MotionContainer'



function App() {
  const [loading, setLoading] = useState(false)
  
  const loadSplashScreen = () => {
    setLoading(true)
  }

  useEffect(() => {

    const splashScreenShown = sessionStorage.getItem('splashScreenShown')
    
    if (!splashScreenShown) {
      loadSplashScreen();
      setTimeout(() => {
        setLoading(false)
        sessionStorage.setItem('splashScreenShown', true)
      },3000)
    }
  },[])
  
  if(loading){
    return (
    <>
      <Loading title="< Welcome to my Site! />"/>
    </>
    )
  }

  return (
    <div className="App">
      <Router>
        <MotionContainer>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route index="/" element={<Headline />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            {/* <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>}/>  */}
            <Route path="*" element={<Error404 />} />
          </Routes>
          
          <Footer />
        </MotionContainer>
      </Router>
    </div>
  );
}

// Created by Aaron Fritz Santos

export default App;
