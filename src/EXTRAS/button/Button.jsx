import React from "react";
import { ButtonStyle } from "./button";

const Button = ({ text, fontSize, color, bgColor }) => {
  return (
    <ButtonStyle
      className="button btn-3d"
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
      }}
    >
      <span>{text}</span>
    </ButtonStyle>
  );
};

export default Button;
