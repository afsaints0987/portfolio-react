import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const categories = [
  "All",
  "Professional Work",
  "Side Projects",
  "Personal Projects",
];

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await axios.get("projects.json");
      const projectList = projectData.data.projects || [];
      setProjects(projectList);
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <MotionContainer>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Projects</h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 text-dark"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="card h-100 shadow-sm"
              >
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="m-0"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="card-img-top img-fluid"
                    loading="lazy"
                  />
                </a>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <Link
                    to={`/project/${proj.id}`}
                    className="mt-auto btn btn-outline-primary btn-sm w-100"
                  >
                    Full Details <FaIcons.FaAngleDoubleRight />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default Project;
