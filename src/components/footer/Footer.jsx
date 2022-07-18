import React from "react";
import Social from "../social/Social";
import Button from "../button/Button";
import { FooterWrapper, FooterWrap, FooterButtons } from "./footerStyle";

import LogoWrapper from "../EXTRAS/logoWrap/LogoWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterWrap>
        <div className="thanks">
          <LogoWrapper />
          <p>Thank You</p>
        </div>
        <FooterButtons>
          <Button fontSize="larger" bgColor="" text={"Hire Me"} />
          <Button fontSize="larger" text={"Get Resume"} />
        </FooterButtons>
        <div className="media">
          <Social />
        </div>
      </FooterWrap>
      <small>
        &copy; <b>AISHA CREATIVITY </b> All Right Reserved
      </small>
    </FooterWrapper>
  );
};

export default Footer;
