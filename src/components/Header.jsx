import axios from 'axios';
import React, { useState } from 'react';
import { FaBars, FaDonate } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Header = () => {
    const [click, setClick] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setClick(!click);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        amount: "",
        address: "",
    });

    const loadRazorpay = () => {
        const RAZORPAY_URL = import.meta.env.VITE_RAZORPAY_URL;

        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = RAZORPAY_URL;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Number(form.amount) <= 0) {
            alert("Amount must be greater than 0.");
            return;
        }

        const isLoaded = await loadRazorpay();

        if (!isLoaded) {
            alert("Razorpay SDK failed to load.");
            return;
        }
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

        const options = {
            key: RAZORPAY_KEY,
            amount: form.amount * 100,
            currency: "INR",
            name: "Better Blues",
            description: "Donation",
            handler: async function (response) {
                try {
                    const razorpay_payment_id = response?.razorpay_payment_id;
                    if (!razorpay_payment_id) {
                        alert("Payment ID missing.");
                        return;
                    }
                    const res = await axios.post(`${API_BASE_URL}/donate`, {
                        ...form,
                        razorpay_payment_id,
                    });

                    if (res?.data?.success) {
                        alert("Donation successful! Thank you.");
                        setIsOpen(false);
                        setForm({ name: "", email: "", amount: "", address: "" });
                    } else {
                        alert("Donation recorded failed on backend.");
                    }
                } catch (err) {
                    alert("Error sending to backend.");
                }
            },
            prefill: {
                name: form.name,
                email: form.email,
            },
            notes: {
                address: form.address,
            },
            theme: {
                color: "#10B981",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setIsOpen(false);
        setForm({ name: "", email: "", amount: "", address: "" });
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
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-emerald-400 text-white xl:w-32 md:w-28 w-20 px-4 xl:py-[14px] lg:py-[11px] md:py-3 py-2 xl:text-[16.5px]/none lg:text-[15px]/none md:text-base/none text-sm/none font-semibold shadow-md">Donate</button>

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

                    {/* Modal */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-xl md:w-full w-11/12 max-w-md">
                                <h2 className="text-xl font-bold mb-6 text-center">Donate Now!</h2>
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        className="w-full p-2 shadow border rounded"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        className="w-full p-2 shadow border rounded"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Amount (INR)"
                                        required
                                        className="w-full p-2 shadow border rounded"
                                        value={form.amount}
                                        onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Address"
                                        required
                                        className="w-full p-2 shadow border rounded"
                                        value={form.address}
                                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                                    />
                                    <div className="flex justify-center gap-3 mt-3">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setForm({ name: "", email: "", amount: "", address: "" });
                                            }}
                                            className="w-28 shadow font-medium px-4 py-2 bg-gray-300 rounded"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-28 shadow font-medium px-4 py-2 bg-emerald-500 text-white rounded"
                                        >
                                            Pay
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;