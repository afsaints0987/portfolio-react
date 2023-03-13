import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact';
import Headline from './pages/Headline';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          <Route index="/" element={<Headline/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/testimonials" element={<Testimonial/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/> 
        <Route path="/projects/:id" element={<ProjectDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

// Created by Aaron Fritz Santos

export default App;
