import React, { useState } from 'react';
import { FaBars, FaDonate } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const [click, setClick] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setClick(!click);
    };
    return (
        <nav className="sticky top-0 z-50 bg-white xl:py-5 lg:py-3 md:py-4 py-3 border-b-2 border-[#BDC3C7]">
            <div className="xl:px-12 lg:px-8 md:px-7 px-5 flex justify-between items-center">
                <h2 className="font-bold text-blue-900 xl:text-3xl md:text-2xl text-xl flex items-center xl:gap-3 lg:gap-2 md:gap-[6px] gap-1"><FaDonate />Better Blues</h2>

                {/* Desktop navigation links */}
                <div className='flex items-center xl:gap-12 lg:gap-7 md:gap-4 gap-2'>
                    <div className="lg:block hidden lg:flex items-center xl:gap-12 lg:gap-7 text-black ">
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/home' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>Home</NavLink>
                        </ul>
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/about' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>About</NavLink>
                        </ul>
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/latest-causes' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>Latest Causes</NavLink>
                        </ul>
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/social-events' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>Social Events</NavLink>
                        </ul>
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/blog' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>Blog</NavLink>
                        </ul>
                        <ul className="text-black xl:text-[16.5px] lg:text-[15px] font-medium">
                            <NavLink to='/contact' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                            }>Contact</NavLink>
                        </ul>
                    </div>
                    <Link to='/donate'>
                        <button className="bg-emerald-400 text-white xl:w-32 md:w-28 w-20 px-4 xl:py-[14px] lg:py-[11px] md:py-3 py-2 xl:text-[16.5px]/none lg:text-[15px]/none md:text-base/none text-sm/none font-semibold shadow-md">Donate</button>
                    </Link>
                    {/* small and medium device menu button */}
                    <div className="lg:hidden visible flex items-center md:gap-4 gap-2">
                        <button className="text-white focus:outline-none"
                            onClick={toggleMobileMenu}>
                            {click ? (<FaXmark className="text-blue-900 font-bold md:text-xl text-lg" />) : (<FaBars className="text-blue-900 font-bold md:text-xl text-lg" />)}
                        </button>
                    </div>
                    {/* small and medium device menu */}
                    {isMobileMenuOpen && (
                        <div style={{ zIndex: 9999 }} className="lg:hidden absolute md:top-20 top-16 right-4 px-4 md:py-6 py-4 md:w-48 w-40 rounded-t-lg rounded-br-lg rounded-bl-4xl shadow border-4 border-blue-900 bg-white">
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/home' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>Home</NavLink>
                            </ul>
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/about' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>About</NavLink>
                            </ul>
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/latest-causes' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>Latest Causes</NavLink>
                            </ul>
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/social-events' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>Social Events</NavLink>
                            </ul>
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/blog' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>Blog</NavLink>
                            </ul>
                            <ul className="block text-black md:mb-4 mb-3 md:text-base text-sm font-medium">
                                <NavLink to='/contact' className={({ isActive }) => isActive ? " text-blue-900 border-b-2 border-blue-900" : ""
                                }>Contact</NavLink>
                            </ul>
                        </div>
                    )}
                    
                </div>



            </div>
        </nav>
    );
};

export default Header;