import Home from "./components/home";
import Projects from "./components/projects";
import { useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import { useViewportScroll } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import "./App.css";
import "./css/nav.css";
import "./css/home.css";
import "./css/timeline.css";
import "./css/card.css";

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const goToAbout = (id) => {
    //console.log(aboutRef.current.offsetHeight);
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToHome = (id) => {
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToProject = (id) => {
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      //console.log(projectsRef);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      //console.log(homeRef.current.offsetTop);
      //console.log(aboutRef.current.offsetTop);
      //console.log(projectsRef.current.offsetTop);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  return (
    <div className='container-fluid  '>
      <Navbar
        ref={{
          ref1: homeRef,
          ref2: aboutRef,
          ref3: projectsRef,
        }}
      >
        {" "}
      </Navbar>
      <div id='body'>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
      </div>
    </div>
  );
}

export default App;
