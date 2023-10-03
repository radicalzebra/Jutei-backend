import polygon from "../images/user/Polygon.svg";
import defaultUserImg from "../images/user/user.svg";
import classes from "../utilities/UserPic.module.css";

const UserPic = (props) => {

   return (
        
         <figure className={classes.figure}>
            <img src={polygon} className={classes.polygon} style={props.polygonBorder}/>
            <img src={props.userImg ? props.userImg:defaultUserImg} className={classes.userImg} alt={`${props.picOf || " "}`} />
         </figure>
   
   )
}



export default  UserPic;