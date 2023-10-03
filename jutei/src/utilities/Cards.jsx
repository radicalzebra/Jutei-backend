import classes from '../utilities/Cards.module.css';
import {motion} from "framer-motion";

export const Card = (props) => {

   const myComponentStyle = {
      ...props.style
   };


   return (
      <>
       <div style={myComponentStyle} className={props.className}>
         {props.cardTitle ? <span className='absolute -top-10 z-10 left-1'>{props.cardTitle} {"    "} {props.numReview ? <span className='text-gray-400'>{`(${props.numReview})`}</span>: ""} </span>: ""}
         {props.children}
       </div>
      </>
   )
}

export const CommentsAndOtherCard = (props) => {

   return (
       <section className={classes.commentSection}>
          {props.cardTitle &&  <div className={classes.title}>{props.cardTitle} {props.numReview && <span>{`(${props.numReview} reviews)`} </span>}</div>}
          <div style={props.style} className={classes.commentCard}>{props.children}</div>
       </section>
   )

}
