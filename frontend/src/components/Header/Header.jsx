/* eslint-disable react/prop-types */

import { Menu } from "lucide-react";

import dashboardLogo from '../../assets/dashboard.png';


function Header({setSidebar, sidebar}) {

    const handleMenu = () => {
        sidebar? setSidebar(false)  : setSidebar(true);
    }
    return (
        <div className=" flex fixed top-0 left-0 sm:left-64 right-0 z-40 bg-white shadow-sm justify-stretch sm:justify-end ">
            <div className="sm:hidden m-4" onClick={handleMenu}> <Menu /> </div>
            <img src={dashboardLogo} alt="Logo" style={{ width: "50px", height: "50px", margin: "24px", }} />
            <p className=' font-medium text-4xl my-7 pr-12'>E-Commerce Dashboard</p>
        </div>
    );
}

export default Header;
