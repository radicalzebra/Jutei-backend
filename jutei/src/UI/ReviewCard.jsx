import starImg from '../images/starImg.svg'
import classes from './ReviewCard.module.css'
import shoe from '../images/shoe.jpg';

const ReviewCard = (props) => {

   const exampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";

   const numStars =[];
   for(let num = 0 ; num<=Math.trunc(Number(props.stars))-1;num++) {
      numStars[num] = starImg;  
   }
   // console.log(numStars,"yyuu",Math.trunc(Number(props.stars))-1,starImg);

   return(
      <section className={classes.reviewCard}>
         <figure className={classes.userImgFig}>
            <img className={classes.userImg} src={props.userImg || shoe} alt="user" />
         </figure>

         <div className={classes.userAndReview}>
            <p className={classes.username}>{`user-name`}</p>
            <figure className={classes.reviewStars}>
              {props.stars && numStars.map(star=>{
               return <img src={star} className={classes.star} alt="star"/>
            }) }
            </figure> 
         </div>

         <main className={classes.review}>{props.review || exampleText}</main>

      </section>
   )
}


export default ReviewCard;