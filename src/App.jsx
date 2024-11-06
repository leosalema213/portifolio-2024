import "./App.css";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <>
        <Hero />
        <About />
        <SideBar />
        <Projects />
        <Courses />
        <Footer />
      </>
    </>
  );
}

export default App;
