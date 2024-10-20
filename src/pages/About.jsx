import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import MotionContainer from "../components/MotionContainer";
import PDF from "/assets/official_cv.pdf";
import PdfViewer from "../components/PdfViewer";

const About = () => {
  const [modalShow, setModalShow] = useState(false);
  const today = new Date().getFullYear();

  return (
    <MotionContainer>
      <div className="container mt-4" id="about-page">
        <h2 className="text-center text-lg-start">
          Solution-Driven Web Developer and Web Designer
        </h2>
        <div className="text-wrap mt-3 text-justify" id="about-text">
          <p>
            With {today - 2020} years of experience providing business solutions
            for SMEs, I am passionate about using my technical and analytical
            skills to create efficient and user-friendly digital products. My
            expertise spans both web development and design, where I combine
            creative and technical skills to build and maintain responsive
            websites.
          </p>

          <p>
            <strong>Web Development Expertise:</strong>
            <br /><br/>
            <strong>Technologies:</strong> JavaScript (ReactJS, Angular,
            VanillaJS), SASS/SCSS, Tailwind, Bootstrap, WordPress
            <br />
            <strong>Cloud & Database Skills:</strong> AWS Cloud, Git, SQL, NoSQL
            (MongoDB)
            <br />
            <strong>AI Integration:</strong> Experience with AI development
            tools and OpenAI API to build intelligent applications
            <br />
            <strong>API Development:</strong> Familiarity with building APIs
            using Node.js and Express
          </p>

          <p>
            <strong>Web Design Expertise:</strong>
            <br /><br/>
            Proficient in using Figma, Adobe Photoshop, and Adobe XD to create
            intuitive, visually appealing designs. Skilled in wireframing,
            prototyping, and delivering designs that align with both user needs
            and business goals.
          </p>

          <p>
            As a team player, I excel at managing time efficiently, working in
            fast-paced environments, and collaborating in teams or leading
            projects. My prior experience in customer service, specifically in
            aviation, has sharpened my problem-solving, multitasking, and
            decision-making skills, making me adaptable under pressure and in
            deadline-driven projects.
          </p>
        </div>

        <a
          href={PDF}
          download="Official-CV"
          className="btn btn-outline-primary d-lg-none"
        >
          <FaIcons.FaDownload /> Download CV
        </a>

        <button
          className="btn btn-outline-primary mt-2 d-none d-lg-block"
          onClick={() => setModalShow(true)}
        >
          <FaIcons.FaFilePdf /> View CV
        </button>

        <Modal show={modalShow} onHide={() => setModalShow(false)} size="xl">
          {/* View PDF file from modal */}
          <Modal.Body>
            <PdfViewer />
          </Modal.Body>

          <Modal.Footer>
            <a href={PDF} download="Official-CV" className="btn btn-success">
              <FaIcons.FaDownload /> Download CV
            </a>
            <button
              className="btn btn-warning"
              onClick={() => setModalShow(false)}
            >
              <FaIcons.FaTimes /> Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </MotionContainer>
  );
};

export default About;
