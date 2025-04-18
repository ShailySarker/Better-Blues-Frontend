import React from 'react';

const DonationCard = ({ image, title, raised, goal }) => {
    const percentage = Math.round((raised / goal) * 100);

    return (
        <div className="bg-white rounded-md shadow-md p-4 w-full">
            <img src={image} alt={title} className="xl:h-56 lg:h-40 md:h-48 h-44 w-full object-cover rounded-md" />
            <h2 className="xl:text-lg text-[16.5px] font-semibold xl:mt-4 md:mt-3 mt-2">{title}</h2>
            <p className="xl:text-sm text-[13.5px] text-green-500 font-bold my-2">{percentage}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between xl:text-sm text-[13.5px] font-medium text-gray-700">
                <span>Raised: ${raised.toLocaleString()}</span>
                <span>Goal: ${goal.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default DonationCard;