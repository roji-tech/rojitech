import React from "react";

import "./understroke.css";

const UnderStroke = ({color, dark }) => {
  let underDiv = {
    width: "10em",
    height: "3px",
    display: "flex",
    margin: ".4em",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "var(--blue2)"
  };

  let underSpan = {
    display: "inline-block",
    width: "3em",
    height: "100%",
    backgroundColor: "var(--bg-light)",
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
