import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="container text-center footer mb-2">
      <div className="icons container">
        <a href="https://github.com/afsaints0987" target="_blank"
          rel="noreferrer noopener"><SocialIcon
          url="https://github.com/afsaints0987"
          style={{ height: 25, width: 25 }}
        /></a>
        <a href="https://www.linkedin.com/in/afsaints0987/" target="_blank"
          rel="noreferrer noopener"><SocialIcon
          url="https://www.linkedin.com/in/afsaints0987/"
          style={{ height: 25, width: 25 }}
        /></a>
        <a href="https://www.facebook.com/afsaintsdesign/" target="_blank"
          rel="noreferrer noopener"><SocialIcon
          url="https://www.facebook.com/afsaintsdesign/"
          style={{ height: 25, width: 25 }}
        /></a>
      </div>
    </footer>
  );
};

export default Footer;
