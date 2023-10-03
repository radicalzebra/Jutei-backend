import { Card } from "../utilities/Cards"

const MonetaryCard =(props) => {

   return (
       <Card className={`${props.className} flex flex-col justify-between px-3 py-2 gap-3`}>
            <header className="flex gap-2  text-gray-400">
               <img src={props.headSvg} alt="Header icon" />
               <p>{props.headText}</p>
            </header>

            <main className="text-xl font-mono pl-4 text-yellow-500">
               <p>{props.mainText}</p>
            </main>

            <footer className="flex text-md text-teal-600 pl-3">
                 <p>{props.footText}</p>
                 <img className="stroke-teal-600" src={props.footSvg} alt="increase" />
            </footer>
       </Card>
   )
}

export default MonetaryCard;