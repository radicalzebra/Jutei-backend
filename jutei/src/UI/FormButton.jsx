import cart from "../images/cart.svg";
import heart from "../images/heartplus.svg";
import classes from "../UI/FormButton.module.css"
import { Card } from "../utilities/Cards";



const FormButton = (props) => {
    
   return (
      <>
        <div className={classes.flex}>
          <button className={classes.button}>{props.buttonSay}</button>


         {
            
            props.cartExist &&  <div className={classes.divContainer}> <img src={cart} alt="cart" /> </div>
         }

          {
            props.heartExist && <div className={classes.divContainer}> <img src={heart} alt="heart" /> </div>
          }
        </div>
      </>
   )
};


export default FormButton;