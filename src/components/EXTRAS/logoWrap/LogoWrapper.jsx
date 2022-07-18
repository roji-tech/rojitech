import React from "react";
import logo from "../../../imgs/blue-modern-Travel-light.png";
import { LogoWrap, LogoImg, LogoName } from "./logoWrapStyle";

const LogoWrapper = () => {
  return (
    <LogoWrap>
      <LogoImg src={logo} alt="LOGO" />
      <LogoName> AISHA</LogoName>
    </LogoWrap>
  );
};

export default LogoWrapper;
