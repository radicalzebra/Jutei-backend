import { Link, useNavigate } from "react-router-dom";
import { Card } from "../utilities/Cards";

const SellerTopProducts = (props) => {

   return (
      <Card className={`flex flex-col ${props.className}`}>
         <header className="flex gap-2">
            <img src={props.headSvg} alt="" />
            <p className="text-md text-gray-400">{props.headText}</p>
         </header>         

         <main className="flex justify-around">
            {props.products.map((el,i)=>{

               return <Card className="flex flex-col gap-1 hover:cursor-pointer">
                         <img className="max-w-80 h-20 rounded-md " src={el.img} alt="top product" />
                         <Link to={`/products/all/${el.productId}`} className="text-sm overflow-x-hidden font-medium">{el.text}</Link>
                     </Card>
            })}
         </main>
      </Card>
   )
}

export default SellerTopProducts;