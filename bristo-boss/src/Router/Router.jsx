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
import AddImage from "../Pages/AddImage";
import PaymentsMoney from "../Pages/PaymentsMoney";

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
      {
        path: "/contact",
        element: <AddImage></AddImage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/adminHome",
        element: (
          <PrivateRouter>
            <AdminHome></AdminHome>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/manageBooking",
        element: (
          <PrivateRouter>
            <ManageBook></ManageBook>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/addItem",
        element: (
          <PrivateRouter>
            <AddItem></AddItem>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/manageItem",
        element: (
          <PrivateRouter>
            <ManageItem></ManageItem>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <PrivateRouter>
            <Alluser></Alluser>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/manageBooking",
        element: (
          <PrivateRouter>
            <ManageBook></ManageBook>
          </PrivateRouter>
        ),
      },
      {
        path : "/dashboard/payment",
        element : <PaymentsMoney></PaymentsMoney>
      }
    ],
  },
]);

export default router;
