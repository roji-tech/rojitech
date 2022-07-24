import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Footer from "./components/footer/Footer";
import Nav from "./EXTRAS/nav/Nav";
import GlobalStyle from "./StyleGlobal";
import LightModeFunc from "./Context";

function App() {
  const { lightMode } = LightModeFunc();

  return (
    <BrowserRouter>
      <GlobalStyle lightMode={lightMode} />
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// https://www.figma.com/file/vKKuYeAgar0A0wfst0ECq8/Xyluz-Portfolio-Website?node-id=36%3A9
