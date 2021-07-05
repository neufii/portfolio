import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Cards = ({
  src = null,
  cardText = null,
  cardTitle = null,
  btnText = "To Project",
  link = null,
  date = new Date().toDateString(),
}) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className='card'
  >
    <div className='card-image '>
      <img className='img-fluid' src={src} />
    </div>
    <div className='card-text'>
      <span className='date'>{date}</span>
      <h2>{cardTitle}</h2>
      <p>{cardText} </p>
    </div>
    <div className='card-footer'>
      <a href={link} target="_blank">
        {btnText} <FontAwesomeIcon icon={faArrowCircleRight} />
      </a>
    </div>
  </motion.div>
);

export default Cards;
