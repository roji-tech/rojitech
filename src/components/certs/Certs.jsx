import React from "react";
import CertStyle from "./certStyle";
import CertBox from "./CertBox";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";

import python from "./imgs/python.png";
import react from "./imgs/react.png";
import cyber from "./imgs/cyber.png";

const CertList = [
  {
    img: python,
    text: "Python Certificate",
    text2: "From Side Hustle",
  },
  {
    img: react,
    text: "React JS Certificate",
    text2: "From Side Hustle",
  },
  {
    img: cyber,
    text: "Cyber Security Essentials ",
    text2: "Certificate From CISCO",
  },
];

const Certs = () => {
  return (
    <CertStyle>
      <Heading j_content={"start"}>
        <h1>Certificates</h1>
        <UnderStroke />
      </Heading>
      <div className="certs">
        {CertList.map(({ img, text, text2 }) => (
          <CertBox text={text} text2={text2} img={img} />
        ))}
      </div>
    </CertStyle>
  );
};

export default Certs;
