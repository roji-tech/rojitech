import BannerStyle from "./bannerStyle";
import one from "../IMGS/1.jpeg";
import {
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import Button from "../button/Button";

const Banner = () => {
  return (
    <BannerStyle>
      <p className="satisfy rojitech">ROJITECH</p>
      <div>
        <p className="hi">
          <em>Hi there </em>
        </p>
        <p className="name"> I am ABDULLAH JAMIU</p>
        <p className="stack">A Full Stack Developer</p>

        <div className="socials">
          <FaTwitter color="blue" size={25} />
          <FaLinkedinIn color="blue" size={25} />
          <FaWhatsapp color="blue" size={25} />
          <FaTelegramPlane color="blue" size={25} />
        </div>
        <Button
          text="Download Resume"
          color={"blue"}
          bgColor={"var(--bg-lighter)"}
        />
      </div>
      <div className="banner__img">
        <img src={one} alt="PYTHON JAVASCRIPT" />
      </div>
    </BannerStyle>
  );
};

export default Banner;
