import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Ourment from "../Pages/Ourment";
import ShopNow from "../Pages/ShopNow";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ManageBook from "../Pages/ManageBook";
import { AdminHome } from "../Pages/AdminHome";
import AddItem from "../Pages/AddItem";
import ManageItem from "../Pages/ManageItem";
import Alluser from "../Pages/Alluser";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: (
          <PrivateRouter>
            <Ourment></Ourment>
          </PrivateRouter>
        ),
      },
      {
        path: "/ourShop",
        element: (
          <PrivateRouter>
            <ShopNow></ShopNow>
          </PrivateRouter>
        ),
      },
      {
        path: "/:id",
        element: (
          <PrivateRouter>
            <ShopNow></ShopNow>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/manageBooking",
        element: <ManageBook></ManageBook>,
      },
      {
        path: "/dashboard/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/dashboard/manageItem",
        element: <ManageItem></ManageItem>,
      },
      {
        path: "/dashboard/allUser",
        element: <Alluser></Alluser>,
      },
      {
        path: "/dashboard/manageBooking",
        element: <ManageBook></ManageBook>,
      },
    ],
  },
]);

export default router;
