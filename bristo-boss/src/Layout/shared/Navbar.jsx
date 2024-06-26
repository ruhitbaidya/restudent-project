import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import "./style.css";
import GetProduct from "./GetProduct";
import { useContext } from "react";
import { contextProvide } from "../../AuthContext/UserContext";
const Navbar = () => {
  const {logOut, user} = useContext(contextProvide)
  const [data] = GetProduct();
  const handelLogout = ()=>{
    logOut()
    .then((res)=> console.log(res))
  }

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/ourMenu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed left-0 right-0 z-10">
      <div className="navbar navColor text-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-[23px]"
            >
              <RiMenuUnfold4Line2 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <p className="flex flex-col -space-y-[9px]">
              <span className="text-[18px]">BISTRO BOSS</span>
              <span className="text-[13px]">Restaurant</span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">{link}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
            <div className="flex items-center gap-[25px]">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">{data.length}</span>
              <Link to="/dashboard/manageBooking">
              <button className="text-[35px]">
                <FaShoppingCart />
              </button>
              </Link>
            </div>

            <button onClick={handelLogout} className="uppercase text-[16px]">SIGN OUT</button>
            <button>
              <img
                className="w-[40px] h-[40px] border-2 rounded-full text-white"
                src={user?.photoURL}
                alt=""
              />
            </button>
          </div>
            </> : <>
            <div className="flex items-center gap-[25px]">
                       <Link to="/login">
            <button className="uppercase text-[16px]">SIGN IN</button>
            </Link>
           
          </div>
            
            </>
          }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
