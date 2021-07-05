import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState, useRef, forwardRef } from "react";
import ReactTooltip from "react-tooltip";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPortrait } from "@fortawesome/free-solid-svg-icons";

const Navbar = forwardRef((props, ref) => {
  const SCROLL_OFFSET = 10;

  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);
  const [currentSec, setSection] = useState("home");

  const refs = ref;
  const variants = {
    visible: { opacity: 1, y: 0 },

    hidden: { opacity: 0, y: -25 },
  };

  function update() {
    if (
      scrollY?.current + SCROLL_OFFSET > refs.ref1.current.offsetTop &&
      scrollY?.current + SCROLL_OFFSET < refs.ref2.current.offsetTop
    ) {
      setSection("home");
    } else if (
      scrollY?.current + SCROLL_OFFSET > refs.ref2.current.offsetTop &&
      scrollY?.current + SCROLL_OFFSET < refs.ref3.current.offsetTop
    ) {
      setSection("about");
    } else if (scrollY?.current + SCROLL_OFFSET > refs.ref3.current.offsetTop) {
      setSection("pj");
    }
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      //console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      //console.log(scrollY.current);
    }
  }
  const goToAbout = (id) => {
    //console.log(aboutRef.current.offsetHeight);
    refs.ref2.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToHome = (id) => {
    refs.ref1.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToProject = (id) => {
    refs.ref3.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <motion.nav
      className='row navbar bg-light flex-row w-100 position-fixed'
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      whileHover={"visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1 }}
    >
      <div className='row align-items-center'>
        <div className='mx-4 my-2'>AJ</div>
        <button
          className={`btn btn-link ${currentSec === "home" ? "active" : ""}`}
          onClick={goToHome}
        >
          Home
        </button>
        <button
          className={`btn btn-link ${currentSec === "about" ? "active" : ""}`}
          onClick={goToAbout}
        >
          About{" "}
        </button>
        <button
          className={`btn btn-link ${currentSec === "pj" ? "active" : ""}`}
          onClick={goToProject}
        >
          Projects{" "}
        </button>
      </div>
      <div className='d-flex align-items-center'>
        <a
          data-tip='Github'
          className='mx-3'
          href='https://github.com/anon-L'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon className='fa-btn' icon={faGithub} size='2x' />
        </a>
        <a
          data-tip='LinkedIn'
          href='https://www.linkedin.com/in/anon-laosirilurchakai-1070471b5/'
          target='_blank'
          rel='noreferrer'
          alt=' '
          className='mx-3'
        >
          <FontAwesomeIcon className='fa-btn' icon={faLinkedinIn} size='2x' />
        </a>
        <a
          data-tip='Resume'
          href='https://drive.google.com/file/d/1ZQbBLyoe5oq480gHV17l8nwLKvVXRqPE/view'
          target='_blank'
          rel='noreferrer'
          className='mx-3'
        >
          <FontAwesomeIcon className='fa-btn' icon={faPortrait} size='2x' color="#ADB5BD"/>
        </a>
      </div>
      <ReactTooltip />
    </motion.nav>
  );
});
export default Navbar;
