import Banner from "../components/bannner/Banner";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
// import CodeChallenge from "../components/codeChallenge";
import Certs from "../components/certs/Certs";
import Edu from "../components/edu/Edu";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Edu />
      <Skills />
      <Projects />
      {/* <CodeChallenge /> */}
      <Certs />
      <Contact />
    </>
  );
};

export default Home;
