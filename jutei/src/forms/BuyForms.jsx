
import { Card } from "../utilities/Cards"
import InputList from './../utilities/InputList';
import FormButton from './../UI/FormButton';

const BuyForms = (props) => {
  
   return (
      <form className='flex flex-col gap-8'>
         <Card className='flex gap-10'>
            <InputList listOptions={["7","8","9","10","11","12"]} label="size"/>
            <InputList listOptions={["1","2","3","4","6","7"]} label="quantity"/>
         </Card>

         <Card>
            <FormButton buttonSay="BUY" cartExist="true" heartExist="true"/>
         </Card>
        
      </form>
   )
}

export default BuyForms;