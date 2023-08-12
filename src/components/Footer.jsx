import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="container text-center footer mb-2">
      <div className="icons container">
        <SocialIcon
          url="https://github.com/afsaints0987"
          style={{ height: 40, width: 40 }}
          target="_blank"
          rel="noreferrer noopener"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/afsaints0987/"
          style={{ height: 40, width: 40 }}
          target="_blank"
          rel="noreferrer noopener"
        />
        <SocialIcon
          url="https://www.facebook.com/afsaintsdesign/"
          style={{ height: 40, width: 40 }}
          target="_blank"
          rel="noreferrer noopener"
        />
      </div>
      <p style={{ fontFamily: "Courier New" }}>v2.0.0</p>
    </footer>
  );
};

export default Footer;
