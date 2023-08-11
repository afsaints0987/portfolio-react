import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import axios from "axios";


const Project = () => {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState([])
  const [selectedProject, setSelectedProject] = useState(0)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData  = await axios.get("projects.json")
      const projectList = projectData.data
      const projectItems = projectList.projects
      setProjects(projectItems)

      const defaultProjectId = projectItems.length > 0 ? projectItems[0].id : 0;
      setSelectedProject(defaultProjectId)
    }
    fetchProjects();
  },[])

  const handleProject = (id = selectedProject) => {
    const projectSelected = projects.filter(proj => proj.id === id)
    setProject(projectSelected)
  }
  
  useEffect(() => {
    handleProject()
  },[projects])
  
  return (
    <MotionContainer>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="project-container px-4 py-2 d-flex flex-column-reverse flex-lg-row">
          <div className="col-lg-3">
            <div>
              {projects.map((proj) => (
                  <ul className="proj-list list-group-flush" key={proj.id}>
                    <li className="list-group-item mt-2" >
                      <button className="btn btn-sm proj-select text-start-lg" onClick={() => handleProject(proj.id)}>{proj.title}</button>
                    </li>
                  </ul>
              ))}
            </div>
          </div>
            <div className="proj-details col-lg-9">
              {project.map(proj => (
                <div className="text-center d-flex" key={proj.id}>
                    <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                    <a href={proj.url} target="_blank" rel="noreferrer noopener"><img src={proj.image} alt={proj.title} className="rounded-3 mb-4 shadow img-thumbnail w-75"/></a>
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                    <Link to={`/project/${proj.id}`}>Full Details <FaIcons.FaAngleDoubleRight/></Link>                  
                    </motion.div>
                  </div>  
              ))}
            </div>

        </div>
      </div>
    </MotionContainer>
  );
};

export default Project;

