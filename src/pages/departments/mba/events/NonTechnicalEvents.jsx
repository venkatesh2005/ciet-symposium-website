import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically (Ensuring Paths Work Properly)
// Non-Technical Event Images
import adGorithm from "/src/assets/mba/events/nontechnical/ad_gorithm.png";
import iplAuction from "/src/assets/mba/events/nontechnical/ipl_auction.png";

// Non-Technical Event Data Map
const eventData = {
    "ad-gorithm": {
        title: "AD Gorithm 🎭",
        description: "Round 1: MCQ (Offline) – Buzzword Blitz | Round 2: Technical Round – Create a digital poster using Canva | Round 3: Adzap – 5-minute roleplay (advertisement campaign for an assigned product).",
        image: adGorithm,
        instructions: [
            "4 members per team.",
            "Laptop should be necessary with internet facility.",
            "Questions based on marketing.",
            "Decisions made by panel should be final.",
            "In case of any unethical behavior, the participants will be ruled."
        ],        
        rules: [
            "4 members per Team.",
            "Evaluation Criteria: Creativity and branding effectiveness in each round. Visual appeal and message clarity in the ad campaign. Coordination among team members.",
            "Participant Requirement: Each team should have at least one laptop."
        ],        
        coordinators: [
            { name: "Ms.K.Santhini", contact: "" },
            { name: "Sumangalya S", contact: "9843268666" },
            { name: "Vanathi", contact: "9789290804" },
        ],
        location: "E110",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBy5IuXVElocVQ1sSS2j4jUydyqXYiIdzbBF5mYLqLlgH6sA/viewform?usp=header",
    },

    "ipl-auction": {
        title: "IPL Auction 🏏",
        description: "Round 1: MCQ-Quiz – A set of 50 questions will be asked | Round 2: Auction – Team selection, budget allocation, and player selection.",
        image: iplAuction,
        instructions: [
            "Phones strictly not allowed.",
            "4 members per team.",
            "Decisions made by the panel should be the final.",
            "In case of any unethical behavior, the participants will be ruled."
        ],        
        rules: [
            "4 Members per team.",
            "Evaluation Criteria: Quiz accuracy.",
            "Evaluation Criteria: Strategic player selection and budget management.",
            "Participant Requirement: Each team should have at least one laptop."
        ],        
        coordinators: [
            { name: "Ms.G.Vinothini", contact: "" },
            { name: "Premkumar", contact: "9500297314" },
            { name: "Akash", contact: "9123552948" },
        ],
        location: "B005",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBy5IuXVElocVQ1sSS2j4jUydyqXYiIdzbBF5mYLqLlgH6sA/viewform?usp=header",
    },
};


const NonTechnicalEvents = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    // Ensure page loads from the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Invalid Event IDs
    if (!eventData[eventId]) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
                <h1 className="text-3xl font-bold">Event Not Found</h1>
            </div>
        );
    }

    const { title, description, image, instructions, rules, coordinators, location, registerLink } = eventData[eventId];

    return (
        <div className="relative min-h-screen bg-black text-white">
            <Header />

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl pointer-events-none" />

            {/* Main Content Wrapper */}
            <div className="relative min-h-[calc(100vh-4rem)] w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-16 pt-24 md:pt-32">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Left Section: Image */}
                    <div className="w-full md:w-1/2 h-fit md:sticky top-24">
                        <img
                            src={image}
                            alt={title}
                            className="w-full rounded-lg shadow-lg border-2 border-yellow-400"
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="w-full md:w-1/2 px-2 md:px-6">

                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-5 px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded transition duration-200"
                        >
                            ← Back to Events
                        </button>

                        {/* Event Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                            {title}
                        </h1>

                        {/* Event Description */}
                        <div className="mt-6 bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                            <h2 className="text-2xl font-bold text-yellow-300">📜 Event Description</h2>
                            <p className="mt-3 text-lg text-gray-300">{description}</p>
                        </div>

                        {/* Event Details */}
                        <div className="mt-6 space-y-6">
                            {/* Instructions */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">📌 Instructions</h2>
                                <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
                                    {instructions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rules */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">⚖️ Event Rules</h2>
                                <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
                                    {rules.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Coordinators */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">👨‍💼 Event Coordinators</h2>
                                <ul className="mt-2 text-gray-300 space-y-1">
                                    {coordinators.map((coordinator, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{coordinator.name}</span>
                                            <span className="text-yellow-400">{coordinator.contact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Event Location */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">📍 Event Location</h2>
                                <p className="mt-3 text-lg text-gray-300">{location}</p>
                            </div>

                            {/* Registration Button */}
                            <div className="mt-6">
                                <a
                                    href={registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block text-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
                                >
                                    🚀 Register Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NonTechnicalEvents;
