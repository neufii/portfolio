import cover from "../img/cover.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, forwardRef } from "react";
import { useInView } from "react-hook-inview";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

const Home = forwardRef((props, ref) => {
  const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);
  const randomDuration = () => Math.random() * 0.07 + 0.23;

  const emojiVariants = {
    animate: (i) => ({
      rotate: i % 2 === 0 ? [-2, 2.3, 0] : [2, -2.4, 0],
      transition: {
        delay: getRandomDelay(),
        repeat: Infinity,
        duration: randomDuration(),
      },
    }),

    rest: { rotate: 0 },
  };

  return (
    <div ref={ref}>
      {/* <motion.div>
        <h1>Home</h1>
      </motion.div> */}
      <img src={cover} className='img-fluid' alt='' />
      <motion.div className='header position-absolute'>
        <h1>
          Hi{" "}
          <motion.div
            className='emoji'
            whileHover='animate'
            whileTap='animate'
            animate='rest'
            variants={emojiVariants}
          >
            👋
          </motion.div>{" "}
          <br /> I'm Anon,
        </h1>
        <h5>I'm an aspiring software engineer currently living in Bangkok.</h5>
        <a
          href='https://drive.google.com/file/d/1ZQbBLyoe5oq480gHV17l8nwLKvVXRqPE/view'
          target='_blank'
        >
          <span className='h3'>Download Resume</span>{" "}
          <FontAwesomeIcon icon={faPortrait} size='2x' />
        </a>
      </motion.div>
    </div>
  );
});
export default Home;
/* const Home = forwardRef ((propRef,propRef2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={propRef}>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{ duration:1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={{ position: "relative" }}
      >
        <h1> Home</h1>
      </motion.div>
      <img
        src={cover}
        alt=""
        style={{ width: "98.5vw", height: "auto" }}
      ></img>
    </div>
  );
});

export default forwardRef(Home);
 */
