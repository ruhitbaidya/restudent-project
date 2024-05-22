import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-[30px]">
        <div className="bg-[#D1A054] h-screen p-[20px]">
          <h2 className="text-2xl mb-[30px]">Prod</h2>
          <ul className="space-y-[20px] text-[20px]">
            <li> <NavLink to="/dashboard/adminHome" className="flex items-center gap-2"> <FaHome /> Admin Home</NavLink> </li>
            <li> <NavLink to="/dashboard/addItem" className="flex items-center gap-2"> <ImSpoonKnife /> add items</NavLink> </li>
            <li> <NavLink to="/dashboard/manageItem" className="flex items-center gap-2"> <AiOutlineMenuUnfold /> manage items</NavLink> </li>
            <li> <NavLink to="/dashboard/manageBooking" className="flex items-center gap-2"> <FaBook /> Manage bookings</NavLink> </li>
            <li> <NavLink to="/dashboard/allUser" className="flex items-center gap-2"> <FaUsers /> all users</NavLink> </li>
          </ul>
        </div>
        <div className="p-[20px] flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
