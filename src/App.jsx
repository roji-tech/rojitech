import Banner from "./components/bannner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./EXTRAS/nav/Nav";
import CodeChallenge from "./components/codeChallenge";
import CubeSpin from "./EXTRAS/cubeSpinner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <CodeChallenge />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// https://www.figma.com/file/vKKuYeAgar0A0wfst0ECq8/Xyluz-Portfolio-Website?node-id=36%3A9
