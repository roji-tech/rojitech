import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import "./social.css";

const Social = () => {
  let socialSize = "30";

  return (
    <div>
      <div className="social-links">
        <a
          href="https://wa.me/+2348134093585"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaWhatsapp size={socialSize} className="social" />
        </a>
        <a
          href="mailto:aishaakinbani@gmail.com"
          rel="noreferrer"
          target={"_blank"}
        >
          <MdEmail size={socialSize} className="social" />
        </a>
        <a href="https://t.me/aishawrite" rel="noreferrer" target={"_blank"}>
          <FaTelegramPlane size={socialSize} className="social" />
        </a>
        <a
          href="https://www.facebook.com/aisha.akinbani"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaFacebookF size={socialSize} className="social" />
        </a>
        <a href="twitter.com" rel="noreferrer" target={"_blank"}>
          <FaTwitter size={socialSize} className="social" />
        </a>
        <a
          href="https://www.instagram.com/p/CcLW9xpsoPg/?igshid=YmMyMTA2M2Y="
          rel="noreferrer"
          target={"_blank"}
        >
          <FaInstagram size={socialSize} className="social" />
        </a>
      </div>
    </div>
  );
};

export default Social;
