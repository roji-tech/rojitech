import BannerStyle from "./bannerStyle";
import one from "../../IMGS/1.jpeg";
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
        <small className="langs">
          Python Django Javascript ReactJS NextJS
        </small>
        <small>
          Passionate about programming and always willing to learn more.
        </small>

        <div className="socials">
          <FaTwitter color={color} className="social" size={30} />
          <FaLinkedinIn color={color} size={30} className="social" />
          <FaWhatsapp color={color} size={30} className="social" />
          <FaTelegramPlane color={color} size={30} className="social" />
          <FiMail color={color} size={30} className="social" />
          <FaGithub color={color} size={30} className="social" />
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
