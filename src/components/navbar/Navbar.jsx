import MenuToggle from "../menuToggle/MenuToggle";
import { NavLink } from "react-router-dom";

const links = <>
                <li className=""><NavLink to="/">Home</NavLink></li>
                <li className=""><NavLink to="/donation">Donation</NavLink></li>
                <li className=""><NavLink to="/statistics">Statistics</NavLink></li>
                <li className=""><NavLink to="/contact">Contact Us</NavLink></li>
            </>
            



const Navbar = () => {
    return (
        <navbar className="border w-full flex item-center justify-between " >
            <div className="justify-content-between border w-1/2 sm:w-1/3">
                <a href="#" className="logo"><img  src="/src/assets/logo&icon/Logo.png" alt="logo"/></a>
            </div>
            <div className="md:hidden content-center text-2xl sm:text-3xl">
                <MenuToggle></MenuToggle>
                
            </div>
            <ul className={`border hidden md:flex md:gap-5 lg:gap-8 items-center w-1/2 md:w-auto  md:text-md lg:text-xl font-medium `} >
                {links}
            </ul>   
        </navbar>
    );
};


export default Navbar;