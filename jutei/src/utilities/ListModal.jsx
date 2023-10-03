import { Card } from "./Cards";
import { motion, spring } from "framer-motion";
import { NavLink } from "react-router-dom";







const ListModal = (props) => {


   const clickedShow = (e) => {

      console.log(e.target.innerText)
      if(e.target.innerText==="👟 sneakers")  props.clicked();
       if(e.target.innerText=== "🏀 basketball shoes") props.clicked();
       if(e.target.innerText=== "🎾 tennis shoes" ) props.clicked();
       if(e.target.innerText=== "🥾 hiking shoes") props.clicked();
       if(e.target.innerText===  "🩴 slippers") props.clicked();
       if(e.target.innerText=== "⚽ football shoes") props.clicked();

   }

   const initial = {x: `${props.clickState===true ? "-100vw" :"0"}`, opacity:`${props.clickState === true ? 0 : 1}`}
   const animate = {x: `${props.clickState===false ? "-100vw" :"0"}`,opacity:`${props.clickState === false ? 0 : 1}`};
   

   return (
     
     <motion.ul initial={initial} animate={animate} className={props.className}>
         
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"sneakers"}`}><motion.li whileHover={{scale:1.3 ,originX:0, transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.2}}>👟 sneakers</motion.li> </NavLink>
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"basketball"}`}><motion.li whileHover={{scale:1.3 ,originX:0,transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.3}}>🏀 basketball shoes</motion.li></NavLink>
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"football"}`}><motion.li whileHover={{scale:1.3 ,originX:0,transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.4}}>⚽ football shoes</motion.li></NavLink>
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"tennis"}`}><motion.li whileHover={{scale:1.3 ,originX:0,transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.5}}>🎾 tennis shoes</motion.li></NavLink>
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"hiking"}`}><motion.li whileHover={{scale:1.3 ,originX:0,transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.6}}>🥾 hiking shoes</motion.li></NavLink>
        <NavLink onClick={clickedShow} to={`/products/all/shoes/${"slippers"}`}><motion.li whileHover={{scale:1.3 ,originX:0,transition:{delay:0}}} whileTap={{scale:0.8}} initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: 0.7}}>🩴 slippers</motion.li></NavLink>
           
     </motion.ul>
    
   )
}


export default ListModal;