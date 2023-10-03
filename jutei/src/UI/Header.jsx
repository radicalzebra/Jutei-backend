import classes from "./Header.module.css"
import { NavLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';


const Header = (props) => {
   
   const location = useLocation();

   const clickedShow = (e) => {
      if(e.target.innerText==="Categories" && props.clickState === false) props.clicked();
      if(e.target.localName==="a" && props.clickState===true) props.clicked();
       console.log(e)
   }

   return (
      <>
        <div className={classes.header}>
            <motion.a onClick={clickedShow} className={`hover:cursor-pointer ${props.clickState && "underline"}`}>Categories </motion.a>
            {props.links.map((el,i) => <NavLink onClick={clickedShow} key={i} to={`/${el==="Men" ? "products/men" : el==="Women" ? "products/women" : el==="kids" ? "products/kids" : ""}`} className ={({isActive})=> isActive ? "text-red-700 underline": " "} end>{el}</NavLink>)}
        </div>
      </>
   )
};


export default Header;

// e.target.innerText===`${"Men" || "Women" || "kids"}`