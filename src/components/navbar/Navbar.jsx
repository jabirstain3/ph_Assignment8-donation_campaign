import MenuToggle from "../menuToggle/MenuToggle";
import { NavLink } from "react-router-dom";

const links = <>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/" >Home</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/donation" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Donation</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/statistics" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Statistics</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/contact" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Contact Us</NavLink></li>
            </>
            



const Navbar = () => {
    return (
        <nav className="border w-full flex item-center justify-between " >
            <div className="justify-content-between border w-1/2 sm:w-1/3">
                <a href="" className="logo"><img  src="/ph_Assignment8-donation_campaign/src/assets/logo&icon/Logo.png" alt="logo"/></a>
            </div>
            <div className="md:hidden content-center text-2xl sm:text-3xl">
                <MenuToggle></MenuToggle>
                
            </div>
            <ul className={`border hidden md:flex md:gap-5 lg:gap-8 items-center w-1/2 md:w-auto  md:text-md lg:text-xl font-medium `} >
                {links}
            </ul>   
        </nav>
    );
};


export default Navbar;