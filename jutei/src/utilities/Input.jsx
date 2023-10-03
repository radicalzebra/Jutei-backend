import { motion } from "framer-motion";
import { Card } from "./Cards";


const Input = (props) => {

  const searchClasses = `rounded-3xl w-4/5 h-10 px-4  focus-visible:border-red-700 focus-visible:border-4 border-black border-2 outline-none ${props.searchClasses}`;
   
   return (
     <Card>
         {props.label && <motion.label  for="input" className="mr-1">{props.img ? <img src={props.src} alt="search"/> : props.labelText || ""}</motion.label> }
         <motion.input whileTap={{skewY:5}} onEnter  id="input" type={props.inputType} placeholder={props.placeholder} className={`${props.inputType==="search" ? searchClasses : props.inputClasses}`}/>
     </Card>
   )
}

export default Input;