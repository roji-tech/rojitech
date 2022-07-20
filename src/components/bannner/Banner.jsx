import BannerStyle from "./bannerStyle";
import one from "../../IMGS/1.jpeg";
import {
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Button from "../../EXTRAS/button/Button";

const Banner = () => {
  return (
    <BannerStyle>
      {/* <p className="satisfy custom-3D-title rojitech">ROJITECH</p> */}
      <div>
        <p className="hi">
          <em> Hello </em>
        </p>
        <p className="name">
          <span>I am </span> ABDULLAH JAMIU
        </p>
        <p className="stack">
          <span>a</span> Full Stack Developer
        </p>

        <div className="socials">
          <FaTwitter color="var(--blue)" className="social" size={30} />
          <FaLinkedinIn color="var(--blue)" size={30} className="social" />
          <FaWhatsapp color="var(--blue)" size={30} className="social" />
          <FaTelegramPlane color="var(--blue)" size={30} className="social" />
          <FiMail color="var(--blue)" size={30} className="social" />
          <FaGithub color="var(--blue)" size={30} className="social" />
        </div>
        <Button text="Download Resume" />
      </div>
      <div className="banner__img">
        <img src={one} alt="PYTHON JAVASCRIPT" />
      </div>
    </BannerStyle>
  );
};

export default Banner;
