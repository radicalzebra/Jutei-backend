import { Card } from "../utilities/Cards";
import Input from "../utilities/Input";
import Scrollbar from "../utilities/scrollbar";


const Invoices = (props) => {

   const Col = (props) => {
      return (
         <Card className={`${props.className}`}>
           <p className="text-lg text-gray-400 font-medium border-b-2 border-purple-500">{props.text}</p>
           {props.children}
        </Card>
      ) 
   }

   return (
      <Scrollbar className={`flex flex-col font-dosis font-semibold bg-gray-900 text-white ${props.className}` }>
          <Card className="flex justify-between">
             <p className="text-2xl font-semibold text-red-400 ">Invoices</p>
             <Input labelText="🔎" searchClasses = "w-40 text-black h-7" inputType="search" placeholder="filter..." label="true"/>
          </Card>

           <Scrollbar className="grid grid-cols-7 gap-x-1" parentClassName="h-96">
                  <Col text="No." className="col-start-1 col-end-2">
                     {props.data.map((el, i) => <p key={i} className="text-md">{i+1}</p>)}
                  </Col>

                  <Col text="Order Id" className="col-start-2 col-end-3">
                     {props.data.map((el, i) => <p key={i} className="text-md">{el.orderId}</p>)}
                  </Col>

                  <Col text="Name" className="col-start-3 col-end-4">
                     {props.data.map((el, i) => <p key={i} className="text-mdm">{el.name}</p>)}
                  </Col>

                  <Col text="City" className="col-start-4 col-end-5">
                     {props.data.map((el, i) => <p key={i} className="text-md">{el.city}</p>)}
                  </Col>

                  <Col text="Status" className="col-start-5 col-end-6">
                     {props.data.map((el, i) => <p key={i} className={`text-md text-green-400 ${el==="pending"? "text-yellow-400": el==="cancelled"? "text-red-600": ""}`}>{el.status}</p>)}
                  </Col>

                  <Col text="Amount" className="col-start-6 col-end-7">
                     {props.data.map((el, i) => <p key={i} className="text-md text-yellow-500">{el.amount}</p>)}
                  </Col>

                  <Col text="Date" className="col-start-7 col-end-8">
                     {props.data.map((el, i) => <p key={i} className="text-md">{el.date}</p>)}
                  </Col>
            </Scrollbar>


      </Scrollbar>
   )
}

export default Invoices;