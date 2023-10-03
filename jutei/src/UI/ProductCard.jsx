import classes from "./ProductCard.module.css";
import starImg from '../images/starImg.svg'
import cart from'../images/cart.svg';
import heart from '../images/heart.svg'
import shoe from '../images/shoe.jpg'
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
   return (
      <NavLink to={`/products/${props.routingType}/${props.routingProductId}`} end>
         <motion.div whileHover={{scale:1.2,skewY:-6}} whileTap={{scale:1,}}  className={classes.productFrame}>

            <figure className={classes.wishlistFig}>
               <img src={heart} className={classes.heart} alt="" />
            </figure>

            <figure className={classes.productImgFig}>
               <img src={props.shoe || shoe} className={classes.productImg}/>
            </figure>

            <main className={classes.productInfo}>
               <p className={classes.productName}>{props.name}</p>

               <section className={classes.productReviewSection}>
               <figure className={classes.reviewStarFig}>
                     <img  src={starImg} className={classes.reviewStar}/>
               </figure>
                  <p className={classes.numReviewsAndReview}>{`${props.rating}/5`}<span>{`(${props.reviews} reviews)`}</span></p>
               </section>

               <section className={classes.productPriceSection}>
                  <button className={classes.productPrice}><span>{`$${props.price}`}</span></button>
                  
                  <figure  className={classes.cartFig}>
                     <img src={cart} className={classes.cartImg}/>
                  </figure>
               </section>

            </main>
         </motion.div>
      </NavLink>
   )
};

export default ProductCard;