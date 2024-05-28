import { useState } from "react";
import { HiX,HiMenu  } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const links = <>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/">Home</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/donation" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Donation</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/statistics" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Statistics</NavLink></li>
                <li className=""><NavLink to="/ph_Assignment8-donation_campaign/contact" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Contact Us</NavLink></li>
            </>

const MenuToggle = () => {
    const [open, setOpen] = useState(false);
    // console.log(links);
    return (
        <div onClick={ () => setOpen(!open)}>
            {
                open === true ? <HiX></HiX> : <HiMenu></HiMenu>
            }
            <ul className={`border mt-3 py-2 p-4 pr-10  absolute  text-base z-[-1] right-3 ${open === true ? 'block' : 'hidden'}`}>
                {links}
            </ul>
        </div>
    );
};


export default MenuToggle;