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

  return (
    <SocialStyle j_content={j_content}>
      <FaTwitter color={color} className="social" size={25} />
      <FaLinkedinIn color={color} size={25} className="social" />
      <FaWhatsapp color={color} size={25} className="social" />
      <FaTelegramPlane color={color} size={25} className="social" />
      <FiMail color={color} size={30} className="social" />
      <FaGithub color={color} size={30} className="social" />
    </SocialStyle>
  );
};

export default Social;
