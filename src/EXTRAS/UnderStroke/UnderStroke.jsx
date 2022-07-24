import React from "react";
import LightModeFunc from "../../Context";
import "./understroke.css";

const UnderStroke = ({ color, dark }) => {
  const { lightMode } = LightModeFunc();

  let underDiv = {
    width: "10em",
    height: "3px",
    display: "flex",
    margin: ".4em",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: `${!lightMode ? "var(--blue2)" : "var(--dark)"}`,
  };

  let underSpan = {
    display: "inline-block",
    width: "3em",
    height: "100%",
    backgroundColor: `${!lightMode ? "var(--bg-light)" : "var(--white)"}`,
    borderRadius: "50%",
    position: "absolute",
    transform: "scaleY(300%)",
    boxSizing: "border-box",
    // border: `2px solid  var(--light)`,
  };

  return (
    <div>
      <div
        id="underDiv"
        style={underDiv}
        className={dark ? "strokedark" : "strokelight"}
      >
        <span
          id="underSpan"
          style={underSpan}
          className={dark ? "strokespandark" : "strokespanlight"}
        ></span>
      </div>
    </div>
  );
};

export default UnderStroke;
