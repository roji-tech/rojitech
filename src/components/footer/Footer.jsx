import React from "react";
import Social from "../../EXTRAS/social/Social";
import Button from "../../EXTRAS/button/Button";
import { FooterWrapper } from "./footerStyle";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>ABDULLAH JAMIU</p>
      <Social j_content="center" />
      <Button fontSize="larger" text={"Get Resume"} />
      <p>Thank You</p>
    </FooterWrapper>
  );
};

export default Footer;
