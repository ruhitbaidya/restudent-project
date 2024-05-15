import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css"
const Navbar = () => {
    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">CONTACT us</NavLink></li>
        <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
        <li><NavLink to="/ourMenu">Our Menu</NavLink></li>
        <li><NavLink to="/ourShop">Our Shop</NavLink></li>
    </>
  return (
    <div className="navbar navColor text-white fixed z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
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
        <ul className="menu menu-horizontal px-1 uppercase">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
       <div className="flex items-center gap-[25px]">
        <button className="text-[22px]"><FaShoppingCart /></button>
        <button className="uppercase text-[16px]">SIGN OUT</button>
        <button>
        <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
        </button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
