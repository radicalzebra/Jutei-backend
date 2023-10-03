import { useState } from "react";
import circle from '../images/circle.svg'
import classes from './MultiImages.module.css';
import arrowRight from '../images/arrowRight.svg'


//Note: try to impliment the dot feature  without using direct DOM manipulation
const MultiImages = (props) => {
  const [imageNum,setImageNum] = useState(0);

  const changeImgHandler = (event) => {

      document.querySelector(`#dot${imageNum > 0   ? imageNum -1 : 0 }`).classList.remove(`${classes.fillRed}`);
     

      if(window.getComputedStyle(document.querySelector(`#dot${0}`)).fill === `rgb(255, 255, 255)` ) {
         document.querySelector(`#dot${props.images.length -1}`).classList.remove(`${classes.fillRed}`);
      }

     if(imageNum === props.images.length - 1) {
        setImageNum(0);
     } else {
         setImageNum((prevState) => prevState + 1);
     }
    
      document.querySelector(`#dot${imageNum}`).classList.add(`${classes.fillRed}`);
      
   //    console.log("yo",  window.getComputedStyle( document.querySelector(`#dot${0}`)).fill);
   // //   console.log(imageNum,props.images.length-1,props.images[imageNum])
  };

  const parentStyle = {
   width:`${ props.parentWidth || "550px"}`,
   height: `${ props.parentHeight || "550px"}`,
   backgroundColor: "red",
   borderRadius: "0.755rem",
   position:"relative",
   overflow: "hidden",
  }


  return (
    <figure style={parentStyle}>
        <img src={props.images[imageNum]} className={classes.img} alt={`product images`}/>
        <div className={classes.dots}>
            {
               props.images && props.images.map((img,i) =>
                  <svg key={i} id={`dot${i}`}  onClick={changeImgHandler} width="800px" height="800px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                     <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#141f1f"/>
                     <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0d0d0d" stroke-width="1.5"/>
                  </svg> 
               ) 
            }
        </div>

        <div onClick={changeImgHandler} className={classes.arrowRt}>
           <img src={arrowRight}  alt="arrow right"/>
         </div>

    </figure>
    
    
    )
};

export default MultiImages;