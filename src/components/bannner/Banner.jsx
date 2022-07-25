import BannerStyle from "./bannerStyle";
import CubeSpin from "../../EXTRAS/cubeSpinner";
import {
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Button from "../../EXTRAS/button/Button";
import LightModeFunc from "../../Context";

const Banner = () => {
  const { lightMode } = LightModeFunc();
  let color = !lightMode ? "var(--blue1)" : "var(--dark)";
  return (
    <BannerStyle lightMode={lightMode} id="top">
      {/* <p className="satisfy custom-3D-title rojitech">ROJITECH</p> */}
      <div>
        <p className="hi">Hello I'm</p>
        <p className="name"> ABDULLAH JAMIU</p>
        <p className="stack">Full Stack Developer</p>
        <small className="langs">Python Django Javascript ReactJS NextJS</small>
        <small>
          Passionate about programming and always willing to learn more.
        </small>

        <div className="socials">
          <a
            href="https://twitter.com/Rojitech_code?t=F2ILVDjYghsYP_luZA1SvQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color={color} className="social" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-jamiu-660902225"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn color={color} size={30} className="social" />
          </a>
          <a
            href="https://wa.me/+2347015910956"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp color={color} size={30} className="social" />
          </a>
          <a
            href="https://t.me/Rojitech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane color={color} size={30} className="social" />
          </a>
          <a href="mailto:abdullahjamiu4@gmail.com">
            <FiMail color={color} size={30} className="social" />
          </a>
          <a
            href="https://github.com/roji-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color={color} size={30} className="social" />
          </a>
        </div>
        <Button text="Download Resume" />
      </div>
      <div className="cube">
        <CubeSpin a_width={"100px"} />
      </div>
    </BannerStyle>
  );
};

export default Banner;
