import { useParams, Link, useNavigate } from "react-router-dom";
import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getProjectItem = async () => {
      const projectItemData = await axios.get(
        "/projects.json"
      );
      const projectItems = projectItemData.data.projects;
      const projectItem = projectItems.filter(
        (proj) => proj.id === parseInt(id)
      );
      setProject(projectItem);
    };
    getProjectItem();
  }, []);

  const nextProject = () => {
    console.log('this is going to next project')
  }

  const prevProject = () => {
    console.log('this is going to previous project')
  }

  return (
    <MotionContainer>
      <div className="container" id="proj-detail">
        <Link to="/projects">
          <FaIcons.FaAngleDoubleLeft /> Back to Projects
        </Link>
        <div>
          {project &&
            project.map((proj, index) => (
              <div className="my-4 row" key={proj.id}>
                <div className="proj-detail-container col-lg-8">
                  <img
                    src={`../${proj.image}`}
                    className="img-fluid mb-3 project-image"
                    loading="lazy"
                  />
                  <div className="img-overlay">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`${
                        proj.github === "" ? "d-none" : "d-block"
                      } text-center`}
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
                      } text-center`}
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
                {/* <div className="d-flex justify-content-between">
                  <span className="page-select" onClick={prevProject}>
                    <FaIcons.FaAngleDoubleLeft />
                    Previous Project
                  </span>
                  <span className="page-select" onClick={nextProject}>
                    Next Project <FaIcons.FaAngleDoubleRight />
                  </span>
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default ProjectDetails;
