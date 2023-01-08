import { motion } from "framer-motion"

const pathVariants={
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: {duration: 0.5} }
};

const Lvl2DoneIcon = () => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <motion.polyline variants={pathVariants} initial="hidden" animate="visible" fill="none" points="7.8,23.6 17.8,33.6 38.1,13.3"/>
    </motion.svg>
  )
}

export default Lvl2DoneIcon
