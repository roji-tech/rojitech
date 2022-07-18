import React from "react";
import SwitchBgMode from "../switchBgMode/SwitchBgMode";
import { MdMenu, MdClose, MdHome, MdAllInbox, MdBook } from "react-icons/md";
import "./sidebar.css";

const SideBar = ({ dark, switchMode }) => {
  return (
    <div className="sidebar">
      <input type="checkbox" name="sidebar" id="sidebar" />
      <div>
        <label htmlFor="sidebar">
          <MdMenu size={20} className="toggle-side" id="open-side" />
        </label>
      </div>
      <div className="side-links">
        <div className="first">
          <div className="side-link side-home" text="Home">
            <MdHome />
          </div>
          <div className="side-link side-about" text="About">
            <MdAllInbox />
          </div>
          <div className="side-link side-about" text="About">
            <MdAllInbox />
          </div>
        </div>
        <div className="middle">
          <label htmlFor="sidebar">
            <MdClose
              size={20}
              className="toggle-side"
              color="red"
              id="close-side"
            />
          </label>
        </div>
        <div className="second">
          <div className="side-link side-testy" text="Testimonies">
            <MdBook />
          </div>
          <div className="side-link side-testy" text="Testimonies">
            <MdBook />
          </div>
          <SwitchBgMode
            color="black"
            className="side-func"
            dark={dark}
            switchMode={switchMode}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
