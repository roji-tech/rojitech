import Button from "../button/Button";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderImgWrap,
  HeaderTexts,
  HeaderButtons,
} from "./headerStyle";
import LogoWrapper from "../EXTRAS/logoWrap/LogoWrapper";
import Social from "../social/Social";
import myImg from "../../imgs/headerImg.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper />
      <HeaderWrap>
        <HeaderTexts>
          <p className="p1"> Hello, </p>
          <p className="p2">
            I'm{" "}
            <span>
              <b>Aisha Akinbani </b>
            </span>
          </p>
          <p className="p3">
            A Top Notch <span className="job">WRITER 📝</span>
          </p>
          <Social />
          <HeaderButtons>
            <Button bgColor="" text={"Let's talk"} />
            <Button text={"Get Resume"} />
          </HeaderButtons>
        </HeaderTexts>
        <HeaderImgWrap>
          <img src={myImg} alt="ME" />
        </HeaderImgWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;

/* <CurvedDiv>
    <svg
      version="1.1"
      width="100%"
      height="200px"
      id="svgCurve"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1377")' fill="none">
        <path
          d="M 0,69 C 96,122.6 288,309.8 480,337 C 672,364.2 768,180.2 960,205 C 1152,229.8 1344,409.8 1440,461L1440 560L0 560z"
          fill={"var(--bg-white)"}
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1377">
          <rect width="100%" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  </CurvedDiv> */
