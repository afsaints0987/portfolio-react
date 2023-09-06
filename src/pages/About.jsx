import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import MotionContainer from "../components/MotionContainer";
import PDF from "/assets/official_cv.pdf";
import PdfViewer from "../components/PdfViewer";

const About = () => {
  const [modalShow, setModalShow] = useState(false);
  const today = new Date().getFullYear()

  return (
    <MotionContainer>
      <div className="container mt-4 " id="about-page">
        <h2 className="text-center text-lg-start">Life as a Developer</h2>
        <div className="text-wrap mt-3 text-justify" id="about-text">
          <p>
            As a solution-driven web developer and web designer with {today - 2020} years of
            experience creating business solutions for SMEs, I look forward to
            sharing my technical and analytical skills with any organization
            I'll be working with.
          </p>

          <p>
            In my role as a Web Developer, I create and maintain websites using
            technologies such as JavaScript (ReactJS, VanillaJS), SASS and
            Bootstrap, and WordPress. As for my Web Designer role I design
            websites using Figma and Adobe Photoshop and Adobe XD.
          </p>

          <p>
            I am a team player, and handling a team and working in a team is one
            of my strengths. I manage my time wisely as I can work fast. I have
            a positive attitude towards work and am also eager to learn new
            skills.
          </p>

          <p>
            With more than 10 years of experience in customer service
            specifically in the aviation industry, I consider myself to have
            good interpersonal and problem-solving skills as well as
            decision-making, I can do multi-task work with minimal supervision
            and can work under pressure.
          </p>
        </div>
        <a href={PDF} download="Official-CV" className="btn btn-outline-primary d-lg-none">
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
