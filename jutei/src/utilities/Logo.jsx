import { useNavigate } from "react-router-dom";

const Logo = (props) => {

   const navigate = useNavigate();

   const navigateHandler = (e) => {
      navigate("/"); 
      clickHandler();
   };

   const clickHandler = (e) => {
      if(props.clickState === true && e.target.innerText==="👟") props.clicked();
   };

   return (
      <figure onClick = {navigateHandler} className={props.className} >
         {/* <img onClick={clickHandler} src={shoeIcon} alt="Brand logo" className="hover:cursor-pointer" />
          */}
          <p onClick={clickHandler}  className="hover:cursor-pointer" ><a>👟</a></p>
      </figure>
   )
}

export default Logo;