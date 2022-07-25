import Banner from "../components/bannner/Banner";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import CodeChallenge from "../components/codeChallenge";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      {/* <CodeChallenge /> */}
      <Contact />
    </>
  );
};

export default Home;
