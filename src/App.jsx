import Skills from"./components/Skills";
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";
import GithubStats from "./components/GithubStatus";
import CurrentlyWorking from "./components/CurrentlyWorking";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App(){
  return(
    <>
    <ScrollProgress/>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <GithubStats/>
     <CurrentlyWorking/>
     <Resume/>
     <Contact/>
     <Footer/>
     <BackToTop/>
    </>
   
  );
}
export default App;