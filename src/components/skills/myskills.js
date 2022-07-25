import {
  FaPython,
  FaBootstrap,
  FaPhp,
  FaReact,
  FaWordpress,
  FaCss3,
  FaHtml5,
  FaJava,
} from "react-icons/fa";

import { CgCPlusPlus } from "react-icons/cg";
import { SiTypescript, SiDjango, SiRedux, SiJavascript, SiNextdotjs } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const size = 25;

export const advance = {
  backend: [
    { text: "Python", icon: <FaPython color="#3737ff" size={size} /> },
    { text: "Django", icon: <SiDjango color="lightgreen" size={size} /> },
    {
      text: "SQL",
      icon: <AiOutlineConsoleSql color="#fff" size={size} />,
    },
  ],
  frontend: [
    {
      text: "Javascript",
      icon: <SiJavascript color="#EFD81D" size={size} />,
    },
    {
      text: "ReactJS",
      icon: <FaReact color="#5ED4F4" size={size} />,
    },
    {
      text: "NextJS",
      icon: <SiNextdotjs color="#fff" size={size} />,
    },
    {
      text: "Typescript",
      icon: <SiTypescript color="#007acc" size={size} />,
    },
    {
      text: "Redux",
      icon: <SiRedux color="#764abc" size={size} />,
    },
    {
      text: "HTML5",
      icon: <FaHtml5 color="#F06529" size={size} />,
    },
    {
      text: "CSS3",
      icon: <FaCss3 color="#28A4D9" size={size} />,
    },
  ],
};

export const intermediate = [
  {
    text: "Bootstrap",
    icon: <FaBootstrap color="#fff" size={size} />,
  },
  {
    text: "PHP",
    icon: <FaPhp color="#8993be" size={size} />,
  },
];

export const basic = [
  {
    text: "C++",
    icon: <CgCPlusPlus color="#659ad2" size={size} />,
  },
  {
    text: "Wordpress",
    icon: <FaWordpress color="#21759b" size={size} />,
  },
  {
    text: "Java",
    icon: <FaJava color="#f89820" size={size} />,
  },
];
