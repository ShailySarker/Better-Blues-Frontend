import React, { useEffect } from 'react';
import { FaDonate } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center gap-3 text-blue-900 animate-bounce">
                <FaDonate className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl" />
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold">Better Blues</h1>
            </div>
        </div>
    );
};

export default LandingPage;