import React from "react";
import { ButtonStyle } from "./button";
import file from "../../ABDULLAH JAMIU'S CV.pdf";

const Button = ({ text, link, fontSize, color, bgColor }) => {
  return (
    <ButtonStyle
      className="button btn-3d"
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
      }}
    >
      <a href={link}>
        <span>{text}</span>
      </a>
    </ButtonStyle>
  );
};

export default Button;
