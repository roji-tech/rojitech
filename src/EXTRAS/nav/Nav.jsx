import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import NavStyle from "./nav";

const Nav = () => {
  const [active, setActive] = useState("");

  return (
    <NavStyle>
      <div
        onClick={() => setActive("")}
        className={active === "" ? "active" : ""}
      >
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
    </NavStyle>
  );
};

export default Nav;
