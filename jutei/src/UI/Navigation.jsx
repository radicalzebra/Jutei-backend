import { Card } from "../utilities/Cards";
import CartAndHeart from "../utilities/CartAndHeart";
import UserPic from "../utilities/UserPic";
import Logo from "../utilities/Logo";
import Header from "./Header";
import cart from "../images/cart.svg";
import heart from "../images/heart.svg";
import ListModal from "../utilities/ListModal";
import { useState } from "react";




export const DefaultNavigation = (props) => {

   const [clicked,setClicked] = useState(false);

   const clickedAction = () =>{
     setClicked((prevState => !prevState));
   }

   const clickHandler = (e) =>{
      // if(e.target)
      console.log(e)
   };

    return (

      <Card onClick={clickHandler}  className="my-8 mx-12 bg-gray-50  flex items-center justify-around py-2  rounded-md  border-2 shadow-md shadow-purple-300  relative">
            <Logo  clicked={clickedAction} clickState={clicked} className="w-16  text-5xl"/>
            {clicked && <ListModal clicked={clickedAction} clickState={clicked} className={`list-inside z-50 top-20 left-60 ml-16 absolute list-none py-8 px-6 font-dosis font-medium text-xl bg-gray-100 shadow-sm shadow-rose-600 rounded-md flex flex-col justify-around w-60 h-96`}/>}
            <Header clicked={clickedAction} clickState={clicked} links={["Men", "Women", "kids"]}/>

         
            
            <Card className="flex gap-52 ml-2.5 ">
              <CartAndHeart  clicked={clickedAction} clickState={clicked} cartImg={cart} heartImg={heart}  className="w-8 flex gap-12" after="before:content['90']" imagesWidth={{width:"100%"}}/>
              <UserPic  clicked={clickedAction} clickState={clicked} picOf="user" polygonBorder={{borderWidth: "2px",borderStyle: "dashed",borderColor: "red"}}/>
            </Card>
            
      </Card>
    )
}


 