import { useState } from "react";
import { HiX,HiMenu  } from "react-icons/hi";

const links = <>
                <li className="">Home</li>
                <li className="">Donation</li>
                <li className="">Statistics</li>
                <li className="">Contact Us</li>
            </>

const MenuToggle = () => {
    const [open, setOpen] = useState(false);
    console.log(links);
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