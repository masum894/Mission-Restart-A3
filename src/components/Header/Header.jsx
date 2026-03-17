import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import githubIcon from "../../../assets/fi_2111432.png";

const Header = () => {
    
    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "bg-[#7C3AED] text-white font-semibold px-4 py-2 rounded-lg" : "font-medium text-gray-600 hover:text-[#7C3AED]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/apps" 
                    className={({ isActive }) => 
                        isActive ? "bg-[#7C3AED] text-white font-semibold px-4 py-2 rounded-lg" : "font-medium text-gray-600 hover:text-[#7C3AED]"
                    }
                >
                    All Apps
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/installation" 
                    className={({ isActive }) => 
                        isActive ? "bg-[#7C3AED] text-white font-semibold px-4 py-2 rounded-lg" : "font-medium text-gray-600 hover:text-[#7C3AED]"
                    }
                >
                    Installation
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white border-b border-gray-100 px-4 md:px-12 py-4 sticky top-0 z-50">
            {/* Navbar Start: Logo and Site Name */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Hero IO Logo" className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-black text-[#7C3AED] tracking-tight">HERO IO</span>
                </Link>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End: Contribution Button with Icon */}
            <div className="navbar-end">
                <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-all active:scale-95 capitalize"
                >
                    
                    <img 
                        src={githubIcon} 
                        alt="GitHub" 
                        className="w-5 h-5 brightness-0 invert" 
                    />
                    <span>Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Header;