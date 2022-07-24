import React from "react";
import Social from "../../EXTRAS/social/Social";
import Button from "../../EXTRAS/button/Button";
import { FooterWrapper } from "./footerStyle";
import LightModeFunc from "../../Context";

const Footer = () => {
  const { lightMode } = LightModeFunc();

  return (
    <FooterWrapper lightMode={lightMode}>
      <p className="name">ABDULLAH JAMIU</p>
      <Social j_content="center" />
      <Button
        fontSize="larger"
        bgColor={"var(--bg-light)"}
        text={"Get Resume"}
      />
      <p>Thank You</p>
    </FooterWrapper>
  );
};

export default Footer;
