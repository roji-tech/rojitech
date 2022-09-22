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
  let color = !lightMode ? "var(--bg-light)" : "var(--white)";

  //   function to scroll up
  const toTop = () => {
    setActive("");
    window.scrollTo({
      top: 0,
      left: 0
    });
  };

  //   Toggle Light Mode
  const toLight = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <NavStyle lightMode={lightMode}>
      {location.pathname === "/" ? (
        <>
          <div
            data="Top"
            onClick={toTop}
            className={active === "" ? "active" : ""}
          >
            <AiOutlineHome color={color} />
          </div>
          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={`${active === "#about" ? "active" : ""}`}
            data="About"
          >
            <AiOutlineUser color={color} />
          </a>
          <a
            href="#exp"
            onClick={() => setActive("#exp")}
            className={active === "#exp" ? "active" : ""}
            data="Experience"
          >
            <RiServerLine color={color} />
          </a>
          <a
            href="#skills"
            onClick={() => setActive("#skills")}
            className={active === "#skills" ? "active" : ""}
            data="Skills"
          >
            <BiBook color={color} />
          </a>
          <a
            href="#projects"
            onClick={() => setActive("#projects")}
            className={active === "#projects" ? "active" : ""}
            data="Projects"
          >
            <RiServerLine color={color} />
          </a>
          <a
            href="#challenge"
            onClick={() => setActive("#challenge")}
            className={active === "#challenge" ? "active" : ""}
            data="Challenge"
          >
            <BiMessageSquareDetail color={color} />
          </a>
          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
            data="Contact"
          >
            <BiMessageSquareDetail color={color} />
          </a>
          <div
            onClick={toLight}
            className={lightMode ? "lightMode" : ""}
            data={!lightMode ? "Light" : "Dark"}
          >
            <FaMoon color={lightMode ? "black" : "white"} />
          </div>
        </>
      ) : (
        <>
          <Link to={"/"} className="myLink">
            <div
              onClick={toTop}
              className={active === "" ? "active" : ""}
              data="Home"
            >
              <AiOutlineHome color={color} />
            </div>
          </Link>
          <div
            onClick={toLight}
            className={lightMode ? "lightMode" : ""}
            data={!lightMode ? "Light" : "Dark"}
          >
            <FaMoon color={!lightMode ? "white" : "black"} />
          </div>
        </>
      )}
    </NavStyle>
  );
};

export default Nav;
