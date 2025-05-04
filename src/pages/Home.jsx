import { useState, useEffect, Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Layout from "../components/Layout";

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, speed, text]);

  return <p id="headline-text">{displayText}</p>;
};

const Avatar = lazy(() => import("../components/Avatar"));

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-4 py-5">
      {/* <Layout> */}
        <div
          className="d-flex flex-column align-items-center text-center w-100"
          id="homepage"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Avatar />
          </Suspense>

          <div className="headline mt-4">
            <h1>Aaron Fritz Santos</h1>
            <Typewriter
              text="Full Stack Developer | UI/UX Designer"
              speed={50}
            />
            <div
              className="tech-skills d-flex justify-content-center gap-3 mt-3"
              style={{ fontSize: "40px" }}
            >
              <FaIcons.FaReact />
              <FaIcons.FaAngular />
              <FaIcons.FaNodeJs />
              <FaIcons.FaGit />
              <FaIcons.FaAws />
            </div>
          </div>
        </div>

        <div className="w-100 mt-5">
          <Outlet />
        </div>
      {/* </Layout> */}
    </div>
  );
};

export default Home;
