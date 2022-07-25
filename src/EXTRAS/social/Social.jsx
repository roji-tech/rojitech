import {
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SocialStyle } from "./socialStyle";

const Social = ({ j_content }) => {
  let color = "var(--blue1)";
  let size = 30;

  return (
    <SocialStyle j_content={j_content}>
      <a
        href="https://twitter.com/Rojitech_code?t=F2ILVDjYghsYP_luZA1SvQ&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color={color} size={size} className="social" />
      </a>
      <a
        href="https://www.linkedin.com/in/abdullah-jamiu-660902225"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn color={color} size={size} className="social" />
      </a>
      <a
        href="https://wa.me/+2347015910956"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color={color} size={size} className="social" />
      </a>
      <a href="https://t.me/Rojitech" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane color={color} size={size} className="social" />
      </a>
      <a href="mailto:abdullahjamiu4@gmail.com">
        <FiMail color={color} size={size} className="social" />
      </a>
      <a
        href="https://github.com/roji-tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color={color} size={size} className="social" />
      </a>
    </SocialStyle>
  );
};

export default Social;
