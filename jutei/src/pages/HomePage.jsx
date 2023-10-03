import ProductCard from '../UI/ProductCard';
import ReviewCard from '../UI/ReviewCard'
import {Card} from '../utilities/Cards';
import MultiImages from '../UI/MultiImages';
import brandBanner from '../images/banners/brandBanner.svg';
import bannerImg1 from '../images/banners/bannerImg1.png';
import bannerImg2 from '../images/banners/bannerImg2.png';
import bannerImg3 from '../images/banners/bannerImg3.png';
import bannerImg4 from '../images/banners/bannerImg4.png';
import Scrollbar from '../utilities/scrollbar';
import ListModal from '../utilities/ListModal';








const HomePage = (props) => {


   return (
      <>
         <Card style={{padding:"3rem"}}>
            <Card>
               <MultiImages parentWidth = "100%"  parentHeight = "700px"  images={[bannerImg1,bannerImg2,bannerImg3,bannerImg4]}/>
            </Card>
         </Card>

         <Card className="flex gap-8 p-12 h-full">
              <Card className="relative h-full" cardTitle="Review">
                <Scrollbar className="relative" parentClassName="flex flex-col bg-gray-300 rounded-lg">
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                </Scrollbar>
              </Card>

               <Card className="flex gap-8 justify-end relative" cardTitle="Most Loved">
                  <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
                  <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
                  <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>    
               </Card>

         </Card>

         <Card className="my-16 w-full ">
            <figure className='px-8'>
                <img src={brandBanner} style={{width:"100%"}}/>
            </figure>
         </Card>


         <Card className="p-px rounded-md">
             <Card className="w-fit flex mx-12 my-16  flex-wrap  gap-20 relative" cardTitle="Random Picks">
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
               <ProductCard name="product name" rating="4.9" reviews="123" price="139.99" routingType="men" routingProductId="1312#"/>
            </Card> 
         </Card>

         

        


       

         {/* <Card padding="3px 7px">
            <CommentsAndOtherCard cardTitle="Similar" flexDirection="rows" gap="7px">
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            <ProductCard name="product name" rating="4.9" reviews="123" price="139.99"/>
            </CommentsAndOtherCard>
         </Card> */}


         {/* //product  */}
         {/* <Card style={{ display:"flex", gap:"3rem", padding:"3% 9%" }}>
            <CommentsAndOtherCard cardTitle="Product Name">
                  <MultiImages images={[shoe,shoe2,shoe3,shoe4]}/>
            </CommentsAndOtherCard>

            <div>

               <Card style={{marginBottom : "13%"}}>
                  <BuyForms/>
               </Card>

               <CommentsAndOtherCard flexDirection="column" cardTitle="Review" numReview="123" backColor="#e8e7e6" maxWidth="481px" height="364px">
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
                  <ReviewCard stars="4"/>
               </CommentsAndOtherCard>
            </div>
            
         </Card> */}

         {/* <CommentsAndOtherCard cardTitle="Description" backColor="#e8e7e6" maxWidth="548px" height="185px" padding="7px">
               <ProductDesc seller="Arshad" brand="adidas" about="jgccgcjcjcccchccadbfjdqbjqdjdvjdbcjbcjd  qljlwdjlbdjlcbdjkcb ljwhff qfqehfkckadhcidwhfs wh ckqdhciwiwhciadnkdshidsh  pqeyfiwckdid fwdcoqeif iqhckqdhipqefb8qef qehckq  qe fqeiqeidi8 f8qeqilehiwehiqkas db9qed qwdqwooqeu oqec; iewf8iewodj ewbwri ciqeh 8 wfiopjclqh[oqeufqe[ojqelhiqepfqep qo  qe foqehoqeh foqe coqehqe[fjqe'lj q9bfe9 oqefo[qe 9fu["/>
         </CommentsAndOtherCard> */}

      </>
   )
}


export default HomePage;