import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavigationLayout from './pages/NavigationLayout';
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/Dashboard';




const router = createBrowserRouter([
  {path:`/`, 
   element:<NavigationLayout/>,
   errorElement:<p className='text-2xl'>Error hogya bhai</p>,
   children:[
    {index:true, element:<HomePage/>},
    {path:"dashboard/:seller", element:<Dashboard/>},
    {path:"products/:type",  
     children:[
      {index:true, element:<ProductsPage/>},
      {path:"shoes/:shoeType" , element:<ProductsPage/>},
      {path:":productId" , element:<ProductPage/>}
    ]},
    
   ]
  },
])


function App() {
   return <RouterProvider router={router}/>
}

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

export default App
