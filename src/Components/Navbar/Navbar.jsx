import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line} from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
    ]
    const [open,setOpen] = useState(false)
    return (
        <nav className="relative">
            <div onClick={() => setOpen(!open)}
             className="md:hidden text-2xl">
                {open?<FaWindowClose />:<RiMenu2Line />}
                
            </div>
            <ul className={`${open?'top-6 left-7':'-top-60 left-7'} duration-1000 md:flex md:bg-white bg-slate-400 text-white md:rounded-none rounded-2xl px-6 absolute md:static`}>
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;