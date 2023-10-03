import { DefaultNavigation } from "../UI/Navigation"
import { Outlet } from "react-router-dom"

const NavigationLayout = (props) => {
    return (
      <>
         <DefaultNavigation/>
         
         <Outlet/>
      </>
    )
}

export default NavigationLayout;