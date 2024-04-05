import MenuToggle from "../menuToggle/MenuToggle";


const links = <>
                <li className="hover:">Home</li>
                <li className="">Donation</li>
                <li className="">Statistics</li>
                <li className="">Contact Us</li>
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