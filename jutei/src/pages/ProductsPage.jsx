import { Card } from "../utilities/Cards";
import CartAndHeart from "../utilities/CartAndHeart";
import UserPic from "../utilities/UserPic";
import Logo from "../utilities/Logo";
import Header from "../UI/Header";
import cart from "../images/cart.svg";
import filter from "../images/filter.svg";
import heart from "../images/heart.svg";
import ProductCard from "../UI/ProductCard";
import Button from "../utilities/Button";
import InputList from "../utilities/InputList";
import Input from "../utilities/Input";


const ProductsPage = (props) => {
   return (

      <>
        {/* HEADER */}
         {/* <Card style={{ paddingTop:"1rem",display:"flex",gap:"9rem",alignItems:"center",minWidth:"50%"}}>
            <Logo style={{marginLeft:"1rem", transform:"translateY(-60%)"}}/>
            <Header links={["Categories", "Men", "Women", "kids", "Login/Signup"]}/>

         
            
            <Card style={{display:"flex", gap:"13rem"}}>
             <CartAndHeart cartImg={cart} heartImg={heart} parentStyle={{width:"2rem", display:"flex", gap:"3rem"}} imagesWidth={{width:"100%"}}/>
             <UserPic picOf="user" polygonBorder={{borderWidth: "2px",borderStyle: "dashed",borderColor: "red"}}/>
            </Card>
            
          </Card> */}


      {/* MAIN */}
      <Card className="flex gap-24 mt-24 flex-col">

         <Card className="mx-auto w-2/4">
             <Input labelText="🔎" inputType="search" placeholder="search..." label="true"/>
         </Card>

          
         <Card className="grid grid-cols-1 gap-y-8 px-24">          
            <Card className="flex justify-between mr-28 last:justify-self-end">
               <Card className="bg-black-100 flex gap-1">
                     <Button className="font-semibold bg-gray-200 hover:bg-purple-500  w-16 h-8 rounded-sm">All</Button>
                     <Button className="font-normal bg-gray-200 w-16 hover:bg-purple-500 active:bg-purple-500 hover:text-gray-200 hover:font-medium h-8 rounded-sm">nike</Button>
                     <Button className="font-normal  hover:bg-purple-500 hover:text-gray-200 hover:font-medium bg-gray-200 w-16 h-8 rounded-sm">puma</Button> 
                     <Button className="font-normal  hover:bg-purple-500 hover:text-gray-200 hover:font-medium bg-gray-200 w-16 h-8 rounded-sm">fila</Button> 
                     <Button className="font-normal  hover:bg-purple-500 hover:text-gray-200 hover:font-medium bg-gray-200 w-16 h-8 rounded-sm">reebok</Button>
                     <Button className="font-normal  hover:bg-purple-500 hover:text-gray-200 hover:font-medium bg-gray-200 w-16 h-8 rounded-sm">adidas</Button>
                     <Button className="font-normal  hover:bg-purple-500 hover:text-gray-800 hover:font-medium bg-gray-200 w-16 h-8 rounded-sm">others</Button>
               </Card>
               <InputList listOptions={["Stars","Price","Reviews"]} label={filter} img="true" className=""/>
            </Card>

            <Card className=" flex gap-12 flex-wrap">
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
            </Card> 
         </Card>
      </Card>

      </>
   )
}

export default ProductsPage;