import { createBrowserRouter } from "react-router";

import  Home from "./pages/home/home";
import Notfound from './pages/notfound/notfound'
import Detail from './pages/detail/detail'
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
       children:[
       {
        path: '/',
        element: <Home/>
       },
       {
        path: '/detail/:cripto',
        element: <Detail/>
       },
       {
        path: '*',
        element: <Notfound/>
       }

       ] 
    }
])

export {router}