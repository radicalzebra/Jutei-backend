import { motion } from "framer-motion";


const Button = (props) => {


   return (
      <motion.button initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1,transition:{delay:2}}} whileTap={{scale:0.8,skewX:7}} className={props.className}>{props.children}</motion.button>
   )
}

export default Button;