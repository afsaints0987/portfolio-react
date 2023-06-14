import MotionContainer from "../components/MotionContainer";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import sampleImage from "../assets/sample-image.jpg"


const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a sample project",
    image: sampleImage
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a sample project 2",
    image: sampleImage
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a sample project 3",
    image: sampleImage
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a sample project 4",
    image: sampleImage
  }
]


const Project = () => {

  // const [project, setProject] = useState();

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await fetch("http://localhost:1337/api/projects");
  //     const data = await response.json();

  //     const projectData = data.data;

  //     console.log(projectData);
  //     setProject(projectData);
  //   };
  //   fetchProjects();
  // }, []);

  // if (!project) {
  //   return <Loading />;
  // }

  return (
    <MotionContainer>
      <div className="container mt-4">
        <h2 className="text-center">Projects</h2>
        <div className="project-container px-4 py-2">

          <div className="grid row">
            {projectData.map(project => (

              <div className="card col-md-3 p-0" key={project.id}>
                <div className="card-header">
                <img src={project.image} alt="sample-image" className="img-thumbnail"/>
                </div>
                <div className="card-body">
                  <p className="card-title">{project.title}</p>
                  <p className="card-description">{project.description}</p>
                  <Link to={`/project/${project.id}`}>Full Details &rarr;</Link>
                </div>
              </div>
            ))

            }
          </div>
          {/* {!project
            ? "No Project Available"
            : project.map((p, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
                >
                  <h5 className="mt-3">{p.attributes.title}</h5>
                  <Link to={`/projects/${p.id}`}>
                    <img
                      src={p.attributes.image_link}
                      alt="banner"
                      width="600"
                      className="img-thumbnail my-2"
                    />
                  </Link>
                  <p>{p.attributes.description}</p>
                  <a
                    className="btn btn-sm btn-outline-primary"
                    id="projBtn"
                    href={p.attributes.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Go to website
                  </a>
                </div>
              ))} */}
        </div>
      </div>
    </MotionContainer>
  );
};

export default Project;
