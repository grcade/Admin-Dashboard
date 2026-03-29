/* eslint-disable react/prop-types */
import { LayoutDashboard,  ShoppingBasket,BadgeIndianRupee, User } from 'lucide-react';
import {Link} from "react-router-dom"



function Sidebar({sidebar}) {

    const navItems = [
        {label: 'Dashboard',
            path: '/',
            icon: <LayoutDashboard size={18} />
        },
        {label: 'Products',
            path: '/products',
            icon: <ShoppingBasket size={18} />
        },
        {label: 'Customer',
            path: '/customer',
            icon: <User size={18} />
        },
        {label: 'Sales',
            path: '/sales',
            icon: <BadgeIndianRupee size={18} />
        }
    ]

    return (
        <div className={`sm:p-4 w-64 border-r border-gray-300  min-h-[100vh]  fixed bg-white ${sidebar ? "block pt-36  " : "hidden"}`}>
           <ul>
           { navItems.map((item)=> (
                <li key={item.label} className='mb-2'>
                    <Link to={item.path} className='flex hover:bg-blue-100  rounded-md p-2 gap-2 transition-colors'>
                    {item.icon}
                    {item.label}
                    </Link>
                </li>
            ))}
           </ul>
        </div>
    )
}

export default Sidebar
