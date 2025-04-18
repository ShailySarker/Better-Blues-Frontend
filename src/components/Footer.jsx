import moment from 'moment';
import React from 'react';
import { FaDiscord, FaDonate, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className=" bg-blue-900 text-white xl:py-12 md:py-8 py-6 lg:flex lg:flex-row lg:justify-between grid md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-x-24 md:gap-y-14 gap-6 xl:px-14 lg:px-12 md:px-7 px-5">
                <div className="flex flex-col md:items-start items-center xl:w-[22%] lg:w-[25%]">
                    <h2 className="font-bold text-white xl:text-3xl md:text-2xl text-xl flex items-center gap-1"><FaDonate />Better Blues</h2>
                    <div className="xl:mt-6 md:mt-5 mt-4">
                        <p className="xl:text-base text-sm/normal font-medium">A simple React-based donation platform integrated with Razorpay for secure and seamless payments.</p>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl md:text-xl text-lg font-bold">Quick Links</h2>
                    <div className="flex md:gap-20 gap-28 xl:mt-7 md:mt-5 mt-3">
                        <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-lg md:text-base text-sm font-medium">
                            {/* <Link to="/posts"><ul className="">All Posts</ul></Link> */}
                            <ul className="">About Us</ul>
                            <ul className="">Contact Us</ul>
                            <ul className="">Help</ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl md:text-xl text-lg font-bold">Reach Us</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-lg md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <p className="flex items-center gap-2"><FaEnvelope />contact@betterblues.com</p>
                        <p className="flex items-center gap-2"><FaPhone /> +91 0000000000</p>
                        <p></p>
                    </div>
                    <div className="xl:mt-6 md:mt-4 mt-3 flex xl:gap-7 md:gap-6 gap-5">
                        <FaFacebook className="xl:text-2xl text-xl" />
                        <FaInstagram className="xl:text-2xl text-xl" />
                        <FaDiscord className="xl:text-2xl text-xl" />
                        <FaYoutube className="xl:text-2xl text-xl" />
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl md:text-xl text-lg font-bold">Legal</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-lg md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <ul className="">Terms & Conditions</ul>
                        <ul className="">Privacy Policy</ul>
                        <ul className="">Cancellation & Refund Policy</ul>
                    </div>
                </div>
            </div>
            <div className='bg-black xl:py-4 md:py-3 py-2'>
                <p className='font-medium text-[#FFFFFF] text-center xl:text-base md:text-sm text-[13px] flex items-center gap-1 justify-center'>© <span>{moment().format('YYYY')}</span><span className='font-bold flex items-center gap-1'><FaDonate />Better Blues</span>. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;