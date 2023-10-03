// import { motion } from "framer-motion";
import MonetaryCard from '../UI/MonetaryCard';
import money from "../images/weblogo/money.svg"
import wallet from "../images/weblogo/wallet.svg"
import increase from "../images/weblogo/increase.svg"
import topProducts from "../images/weblogo/topProducts.svg"
import { Card } from "../utilities/Cards";
import SellerTopProducts from '../UI/SellerTopProducts';
import shoe from '../images/shoe.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';
import shoe4 from '../images/shoe4.jpg';
import ReviewCard from '../UI/ReviewCard';
import Scrollbar from './../utilities/scrollbar';
import Invoices from '../UI/Invoices';
import { motion, spring } from 'framer-motion';




const Dashboard = (props) => {


   return (
      <>
         <motion.Card initial={{y:-200}} animate={{y:0}} className="flex  gap-4 mx-36 mt-20">
            <MonetaryCard className="bg-gray-50 grow-0 rounded-md shadow-md basis-1/5 shadow-gray-300" footSvg={increase} headSvg={money} headText="Total Sales" mainText="8965" footText="+2.45%"/>
            <MonetaryCard className="bg-gray-50 grow-0 rounded-md shadow-md basis-1/5 shadow-gray-300" footSvg={increase} headSvg={wallet} headText="Total Revenue" mainText="$789,653.33" footText="+5.45%"/>
            <SellerTopProducts className="bg-gray-50 grow-1 px-3 py-2 gap-3 basis-3/4 shadow-gray-300 shadow-md rounded-md" headText="Top Products" headSvg={topProducts} products={[{img:shoe,text:"Shoe-Nike_1",productId:"121"},{img:shoe2,text:"Shoe-Nike_2",productId:"121"},{img:shoe,text:"Shoe-Nike_3",productId:"121"},{img:shoe3,text:"Shoe-Nike_4",productId:"121"},{img:shoe4,text:"Shoe-Nike_5",productId:"121"}]}/>
         </motion.Card>

         <Card className="flex gap-4 mt-8 mx-36 mb-8 h-96 relative">
             <Card className="bg-gray-200 basis-full rounded-lg shadow-md shadow-gray-400">
                 <h4>chart area</h4>
             </Card>
{/* 
             <Scrollbar parentClassName="bg-gray-100 rounded-lg shadow-lg shadow-gray-400" className="bg-gray-100 text-sm relative" cardTitle="Top Reviews">
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  
             </Scrollbar> */}
         </Card>


         <Invoices className="shadow-md rounded-md px-4 py-4 shadow-gray-500 gap-12 mx-36 mb-8 bg-red-500" data={[{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"ourself7862r2r2rrc@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},{orderId:"13231", name:"Arshad",city:"Kolkata", status:"paid",amount:"$123", email:"our@gmail.com", date:"1.2.3"},]}/>

      </>
   )


}

export default Dashboard;