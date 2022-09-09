import React from "react";
import { CertBoxStyle } from "./certStyle";
import LightModeFunc from "../../Context";

const CertBox = ({ img, text, text2 }) => {
  const { lightMode } = LightModeFunc();

  return (
    <CertBoxStyle lightMode={lightMode}>
      <div className="img">
        <img src={img} alt="hello" />
      </div>
      <div className="text">
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </CertBoxStyle>
  );
};

export default CertBox;
