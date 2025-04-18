import React from 'react';
import donateCard1 from "../../assets/Images/Home_donateCard1.jpg";
import donateCard2 from "../../assets/Images/Home_donateCard2.jpg";
import donateCard3 from "../../assets/Images/Home_donateCard3.jpg";
import donateCard4 from "../../assets/Images/Home_donateCard4.jpg";
import donateCard5 from "../../assets/Images/Home_donateCard5.jpg";
import donateCard6 from "../../assets/Images/Home_donateCard6.jpg";
import donateCard7 from "../../assets/Images/Home_donateCard7.jpg";
import donateCard8 from "../../assets/Images/Home_donateCard8.jpg";
import donateCard9 from "../../assets/Images/Home_donateCard9.jpg";
import donateCard10 from "../../assets/Images/Home_donateCard10.jpg";
import donateCard11 from "../../assets/Images/Home_donateCard11.jpg";
import donateCard12 from "../../assets/Images/Home_donateCard12.jpg";
import donateCard13 from "../../assets/Images/Home_donateCard13.jpg";
import donateCard14 from "../../assets/Images/Home_donateCard14.jpg";
import donateCard15 from "../../assets/Images/Home_donateCard15.jpg";
import donateCard16 from "../../assets/Images/Home_donateCard16.jpg";
import DonationCard from './Components/DonationCard';

const cards = [
    {
        id: 1,
        image: donateCard1,
        title: 'Ensure Education For Every Poor Children',
        raised: 20000,
        goal: 35000,
    },
    {
        id: 2,
        image: donateCard2,
        title: 'Providing Healthy Food For The Children',
        raised: 8750,
        goal: 35000,
    },
    {
        id: 3,
        image: donateCard3,
        title: 'Supply Drinking Water For The People',
        raised: 17500,
        goal: 35000,
    },
    {
        id: 4,
        image: donateCard4,
        title: 'Support Healthcare for Rural Families',
        raised: 12000,
        goal: 40000,
    },
    {
        id: 5,
        image: donateCard5,
        title: 'Provide Shelter to Homeless People',
        raised: 9500,
        goal: 50000,
    },
    {
        id: 6,
        image: donateCard6,
        title: 'Warm Clothes for Winter Relief',
        raised: 7000,
        goal: 25000,
    },
    {
        id: 7,
        image: donateCard7,
        title: 'Help Orphan Children With Daily Needs',
        raised: 16000,
        goal: 32000,
    },
    {
        id: 8,
        image: donateCard8,
        title: 'Build Sanitation Facilities for Villages',
        raised: 14500,
        goal: 35000,
    },
    {
        id: 9,
        image: donateCard9,
        title: 'Emergency Relief for Flood Victims',
        raised: 24000,
        goal: 50000,
    },
    {
        id: 10,
        image: donateCard10,
        title: 'Empower Girls Through Education',
        raised: 18000,
        goal: 36000,
    },
    {
        id: 11,
        image: donateCard11,
        title: 'Support Elderly With Medical Aid',
        raised: 11000,
        goal: 30000,
    },
    {
        id: 12,
        image: donateCard12,
        title: 'Community Clean-Up Drives',
        raised: 6000,
        goal: 20000,
    },
    {
        id: 13,
        image: donateCard13,
        title: 'Distribute Hygiene Kits to Families',
        raised: 9500,
        goal: 18000,
    },
    {
        id: 14,
        image: donateCard14,
        title: 'Create Livelihood Opportunities',
        raised: 13000,
        goal: 30000,
    },
    {
        id: 15,
        image: donateCard15,
        title: 'Install Solar Lights in Villages',
        raised: 10000,
        goal: 28000,
    },
    {
        id: 16,
        image: donateCard16,
        title: 'Donate Books to Underprivileged Children',
        raised: 5500,
        goal: 15000,
    },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 xl:px-24 lg:px-16 md:px-12 px-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center xl:gap-6 lg:gap-5 md:gap-[22px] gap-4">
                {cards?.map((card, id) => (
                    <DonationCard key={id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Home;