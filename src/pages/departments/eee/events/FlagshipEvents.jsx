import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically (Ensuring Paths Work Properly)
import freeFire from "/src/assets/eee/events/flagship/freefire.jpeg";
import bgmi from "/src/assets/eee/events/flagship/bgmi.png";
import cod from "/src/assets/eee/events/flagship/cod.png";
import chess from "/src/assets/eee/events/flagship/chess.png";
import carrom from "/src/assets/eee/events/flagship/carrom.png";

// Flagship Event Data Map
const eventData = {
    "free-fire": {
        title: "Free Fire 🔥",
        description: "Battle it out in this intense survival shooter!",
        image: freeFire,
        instructions: [
            "Register your squad before the event.",
            "Each team consists of 4 players.",
            "Standard Free Fire battle royale rules apply.",
            "Finals will be held in a best-of-3 format.",
        ],
        rules: [
            "Use of hacks or cheats results in instant disqualification.",
            "Players must use their own devices.",
            "Teams must be ready 10 minutes before their match.",
            "Any form of misconduct will lead to penalties.",
        ],
        coordinators: [
            { name: "Vikram T", contact: "9876543240" },
            { name: "Ananya M", contact: "9876543241" }
        ],
        location: "Gaming Zone - Room D01",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "bgmi": {
        title: "BGMI 🎮",
        description: "Test your skills in the ultimate battlegrounds!",
        image: bgmi,
        instructions: [
            "Register your team before the event starts.",
            "Each squad consists of 4 players.",
            "Matches will be played in classic mode.",
            "The top 5 teams qualify for the finals.",
        ],
        rules: [
            "No emulators allowed, only mobile devices.",
            "Use of any third-party software leads to disqualification.",
            "Voice chat is allowed only within teams.",
            "Fair play and sportsmanship are mandatory.",
        ],
        coordinators: [
            { name: "Siddharth Verma", contact: "9876543242" },
            { name: "Priya Menon", contact: "9876543243" }
        ],
        location: "E-Sports Arena - Room D02",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "cod": {
        title: "Call of Duty (COD) 🎯",
        description: "Fast-paced Call of Duty action awaits!",
        image: cod,
        instructions: [
            "Solo and squad registrations are available.",
            "Each match follows the TDM 5v5 format.",
            "The top 8 teams will advance to knockout rounds.",
            "Finals will be a best-of-3 match format.",
        ],
        rules: [
            "No external controllers or hacks allowed.",
            "Only mobile devices are permitted.",
            "Players must use their own accounts.",
            "Toxic behavior or cheating leads to disqualification.",
        ],
        coordinators: [
            { name: "Arjun Nair", contact: "9876543244" },
            { name: "Megha S", contact: "9876543245" }
        ],
        location: "E-Sports Lounge - Room D03",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "chess": {
        title: "Chess ♟️",
        description: "Strategize your way to victory in this battle of minds!",
        image: chess,
        instructions: [
            "Register as a solo participant.",
            "Each round follows a Swiss-system format.",
            "Games will have a 10-minute rapid format.",
            "Finalists will compete in a best-of-3 match.",
        ],
        rules: [
            "No external assistance or devices allowed.",
            "Players must follow fair play guidelines.",
            "Any form of cheating leads to immediate disqualification.",
            "Time control must be strictly followed.",
        ],
        coordinators: [
            { name: "Rohan K", contact: "9876543246" },
            { name: "Neha R", contact: "9876543247" }
        ],
        location: "Strategy Hall - Room E01",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "carrom": {
        title: "Carrom 🎱",
        description: "Show off your striking skills in this classic game!",
        image: carrom,
        instructions: [
            "Register as a solo player or in a doubles team.",
            "Each match follows the best-of-3 format.",
            "Standard carrom board rules apply.",
            "The top 4 players qualify for semi-finals.",
        ],
        rules: [
            "No external powder or personal accessories allowed.",
            "Any foul play results in a penalty.",
            "Time limits will be enforced per round.",
            "Referee decisions are final.",
        ],
        coordinators: [
            { name: "Amit J", contact: "9876543248" },
            { name: "Sneha L", contact: "9876543249" }
        ],
        location: "Indoor Games Area - Room E02",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },
};

const FlagshipEvents = () => {
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

export default FlagshipEvents;
