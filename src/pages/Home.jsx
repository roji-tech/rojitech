import Banner from "../components/bannner/Banner";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import CodeChallenge from "../components/codeChallenge";
import Certs from "../components/certs/Certs";
import Edu from "../components/edu/Edu";
import Experience from "../components/experience/Experience";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Edu />
      <Certs />
      <Experience />
      <Skills />
      <Projects />
      <CodeChallenge />
      <Contact />
    </>
  );
};

export default Home;
