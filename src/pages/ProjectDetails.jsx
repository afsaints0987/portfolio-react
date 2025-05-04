import { useParams, Link } from "react-router-dom";
import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const { darkMode } = useTheme();

  useEffect(() => {
    const getProjectItem = async () => {
      const projectItemData = await axios.get("/projects.json");
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
      <div className={`container ${darkMode ? "text-white" : "text-dark"}`}>
        <Link to="/projects" className={darkMode ? "text-white" : "text-dark"}>
          <FaIcons.FaAngleDoubleLeft /> Back to Projects
        </Link>
        <div>
          {project &&
            project.map((proj) => (
              <div className="my-4 row" key={proj.id}>
                <div className="proj-detail-container col-lg-8">
                  <img
                    src={`../${proj.image}`}
                    className="img-fluid mb-3 project-image"
                    loading="lazy"
                  />
                  <div className="d-flex justify-content-center">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`${
                        proj.github === "" ? "d-none" : "d-block"
                      } text-center ${darkMode ? "text-white" : "text-dark"}`}
                    >
                      <FaIcons.FaGithub className="icons mx-2" />
                      <p>Github</p>
                    </a>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`${
                        proj.url === "" ? "d-none" : "d-block"
                      } text-center ${darkMode ? "text-white" : "text-dark"}`}
                    >
                      <FaIcons.FaGlobe className="icons mx-2" />
                      <p>Website</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 overflow-auto project-details">
                  <h4 className="mt-3">
                    <span className="fw-bold">Project: </span> {proj.title}
                  </h4>
                  <p className="mt-3">
                    <span className="fw-bold">Category: </span> {proj.category}
                  </p>
                  <small className="mt-3">
                    <span className="fw-bold">Created year: </span> {proj.year}
                  </small>
                  <p className="mt-3">
                    <span className="fw-bold">Description: </span> {proj.brief}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default ProjectDetails;
