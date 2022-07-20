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
  return (
    <SocialStyle j_content={j_content}>
      <FaTwitter color="var(--blue)" className="social" size={25} />
      <FaLinkedinIn color="var(--blue)" size={25} className="social" />
      <FaWhatsapp color="var(--blue)" size={25} className="social" />
      <FaTelegramPlane color="var(--blue)" size={25} className="social" />
      <FiMail color="var(--blue)" size={30} className="social" />
      <FaGithub color="var(--blue)" size={30} className="social" />
    </SocialStyle>
  );
};

export default Social;
