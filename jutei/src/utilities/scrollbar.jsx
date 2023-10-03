import { Card } from "./Cards";
import classes from "./Scrollbar.module.css";

const Scrollbar = (props) =>{

   return (

      <section className={`${classes.scrollbar} ${props.parentClassName}`}>
        <Card className={props.className + "relative"} cardTitle={props.cardTitle} numReviews={props.numReviews}>{props.children}</Card>
      </section>
   )
} 


export default Scrollbar;