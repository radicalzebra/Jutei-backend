import classes from './ProductDesc.module.css'

const ProductDesc = (props) => {

   return (
      <div className={classes.description}>
         
         <div className={classes.sellerAndBrand}>
            <p>Seller <span>»</span> </p>
            <span>{props.seller}</span>
         </div>
          

         <div className={classes.about}>
            <div>About<span>»</span></div>
            <p>{props.about}</p>
         </div>


         <div className={classes.sellerAndBrand}>
             <p>Brand  <span>»</span></p>
             <span>{props.brand}</span>
         </div>
         
      </div>
   )
};

export default ProductDesc