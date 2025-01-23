import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

// hooks
// import useAutheCheck from "../../../hooks/auth/auth";
// import { IUserPayload } from "../../../types/interfaces/user.interface";

import { verifyToken } from "../../../reducers/auth/action";
import { IUserPayload } from "../../../types/interfaces/user.interface";

interface INavBarProps {
    auth: IUserPayload,
    dispatch: any
}


const NavBar: React.FC<INavBarProps> = ({auth, dispatch}) => {

    useEffect(() => {
        dispatch(verifyToken())
    }, [])

    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const params = new URLSearchParams(window.location.search);
    
    // 404 page
    if (params.has('page', '404')) {
        return <></>
    }
  

    // hook for check authen tication

    // dispatch(verifyToken())
    console.log("LOGGG",auth);
    
    return (
        <nav className="dark:bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Hamburger Icon */}
                <button className="text-white md:hidden focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu Links */}
                <div className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-8`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-700 dark:text-white"
                            >
                                ROOMS
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-700 dark:text-white"
                            >
                                MY BOOKING
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-700 dark:text-white"
                            >
                                ANOUNCEMENT
                            </a>
                        </li>
                        {/* <li>
                            <a href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                            >
                                Contact
                            </a>
                        </li> */}
                    </ul>
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <button
                        className="flex items-center space-x-2 focus:outline-none"
                        onClick={toggleDropdown}
                    >
                        <span className="hidden md:inline-block mx-3"><b>User Name</b></span>
                        {/* Profile Picture */}
                        <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-50"
                            onMouseLeave={closeDropdown}
                        >
                            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                Edit Profile
                            </a>
                            <button onClick={() => alert("Logged out")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = function(state: any) {
    return {
      auth: state.auth || {}
    }
  }

export default connect(mapStateToProps)(NavBar);
