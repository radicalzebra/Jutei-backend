import { Link } from "react-router-dom";

Link

const CartAndHeart = (props) => {

   const clickHandler = (e) => {
      if(props.clickState === true && e.target.localName==="img") props.clicked();
      console.log(e)
   };

   return (
      <figure onClick={clickHandler} className={props.className}>
         <img onClick={clickHandler} src={props.cartImg} className={`hover:cursor-pointer ${props.after}`} style={props.imagesWidth} alt="cart" />
         <img onClick={clickHandler} src={props.heartImg} className="hover:cursor-pointer" style={props.imagesWidth} alt="heart" />
      </figure>
   )
}

export default CartAndHeart;