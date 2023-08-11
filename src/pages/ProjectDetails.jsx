import { useParams, Link } from "react-router-dom";
import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProjectItem = async () => {
      const projectItemData = await axios.get(
        "http://localhost:5173/projects.json"
      );
      const projectItems = projectItemData.data.projects;
      const projectItem = projectItems.filter(
        (proj) => proj.id === parseInt(id)
      );
      setProject(projectItem);
    };
    getProjectItem();
  }, []);
  return (
    <MotionContainer>
      <div className="container" id="proj-detail">
        <Link to="/projects">
          <FaIcons.FaAngleDoubleLeft /> Back to Projects
        </Link>
        <div>
          {project &&
            project.map((proj) => (
              <div className="my-4" key={proj.id}>
                <div className="proj-detail-container">
                    <img
                    src={`../${proj.image}`}
                    className="img-fluid mb-3 project-image"
                    />
                    <div className="img-overlay">
                    <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-center"
                    >
                        <FaIcons.FaGithub className="icons mx-2" />
                        <p>Github</p>
                    </a>
                    <a href={proj.url} target="_blank" rel="noreferrer noopener" className="text-center">
                        <FaIcons.FaGlobe className="icons mx-2" />
                        <p>Website</p>
                    </a>
                    </div>
                </div>
                <div className="text-wrap">
                  <h4>{proj.title}</h4>
                  <p>{proj.brief}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default ProjectDetails;
