import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import NavStyle from "./navStyles";
import { Link, useLocation } from "react-router-dom";
import LightModeFunc from "../../Context";

const Nav = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  const { lightMode, setLightMode } = LightModeFunc();

  //   function to scroll up
  const toTop = () => {
    setActive("");
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  //   Toggle Light Mode
  const toLight = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <NavStyle>
      {location.pathname === "/" ? (
        // <Link to={"/projects"}>View more Projects</Link>
        <>
          <div onClick={toTop} className={active === "" ? "active" : ""}>
            <AiOutlineHome />
          </div>
          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#skills"
            onClick={() => setActive("#skills")}
            className={active === "#skills" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#projects"
            onClick={() => setActive("#projects")}
            className={active === "#projects" ? "active" : ""}
          >
            <RiServerLine />
          </a>
          <a
            href="#challenge"
            onClick={() => setActive("#challenge")}
            className={active === "#challenge" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
          <div onClick={toLight} className={lightMode ? "lightMode" : ""}>
            <FaMoon color={lightMode ? "black" : "white"} />
          </div>
        </>
      ) : (
        <>
          <Link to={"/"} className="myLink">
            <div onClick={toTop} className={active === "" ? "active" : ""}>
              <AiOutlineHome />
            </div>
          </Link>
          <div onClick={toLight} className={lightMode ? "lightMode" : ""}>
            <FaMoon color={lightMode ? "white" : "black"} />
          </div>
        </>
      )}
    </NavStyle>
  );
};

export default Nav;
