import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Ourment from "../Pages/Ourment";
import ShopNow from "../Pages/ShopNow";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/ourMenu",
                element : <Ourment></Ourment>
            },
            {
                path : "/ourShop",
                element : <ShopNow></ShopNow>
            },
            {
                path : "/:id",
                element : <ShopNow></ShopNow>
            }
        ]
    },
    {
        path : "/login",
        element : <Login></Login>
    },
    {
        path : "/dashboard",
        element : <Dashboard></Dashboard>
    }
])

export default router