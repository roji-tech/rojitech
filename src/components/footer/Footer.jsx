import React from "react";
import Social from "../../EXTRAS/social/Social";
import Button from "../../EXTRAS/button/Button";
import { FooterWrapper } from "./footerStyle";
import LightModeFunc from "../../Context";
import file from "../../cv.pdf";

const Footer = () => {
  const { lightMode } = LightModeFunc();

  return (
    <FooterWrapper lightMode={lightMode}>
      <p className="name">ABDULLAH JAMIU</p>
      <Social j_content="center" />
      <div id="myBtns">
        <a href={file} download="ABDULLAH JAMIU's CV.pdf">
          <Button
            fontSize="larger"
            bgColor={"var(--bg-light)"}
            text={"Get Resume"}
          />
        </a>
        <a href={"#contact"}>
          <Button
            fontSize="larger"
            bgColor={"var(--bg-light)"}
            text="Hire Me"
          />
        </a>
      </div>
      <p>Thank You</p>
    </FooterWrapper>
  );
};

export default Footer;
