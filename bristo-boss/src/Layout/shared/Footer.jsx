import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (
    <div>
        <div className="grid grid-cols-2 ">
        <div className="bg-[#1F2937] py-[50px] flex items-center justify-center">
            <div className="text-white text-center">
            <h2 className="text-3xl mb-[20px]">CONTACT US</h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 1742772705</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
        </div>
        <div className="bg-[#111827] py-[50px] text-white flex justify-center items-center">
            <div className="text-center space-y-[20px]">
            <h2 className="text-3xl">Follow US</h2>
            <p>Join us on social media</p>
            <div className="flex gap-[20px] justify-center text-[25px]">
                <Link to=""><FaFacebook /></Link>
                <Link to=""><FaInstagram /></Link>
                <Link to=""><TiSocialTwitter /></Link>
            </div>
            </div>
        </div>
    </div>
    <div className="bg-[#151515] text-white text-center py-[15px]">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer