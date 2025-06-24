import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically for Mechanical Non-Technical Events
import photography from "/src/assets/mech/events/nontechnical/photography.png";
import freeFire from "/src/assets/mech/events/nontechnical/freefire.jpeg";
import wordHunting from "/src/assets/mech/events/nontechnical/word_hunting.png";

// Non-Technical Event Data Map (Mechanical)
const eventData = {
    "photography": {
        title: "Photography 📸",
        description: "Photography is the art and practice of capturing light to create images using a camera or digital device. It can be used to express creativity, tell stories, and convey emotions.",
        image: photography,
        instructions: [
            "Participants must submit photographs based on a given theme (theme is given on the spot).",
            "Participants must submit their photographs in document format.",
            "Participants must use their own cameras."
        ],        
        rules: [
            "Photographs will be judged on creativity, composition, and relevance to the theme.",
            "Individual participation."
        ],        
        coordinators: [
            { name: "Mr.J.Sundaresan, AP/MECH", contact: "" },
            { name: "A.Sabaresh (III MECH)", contact: "6383199597" },
            { name: "S.Aravinthan (III MECH)", contact: "7904976934" },

        ],
        location: "Architecture board room",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
    },

    "free-fire": {
        title: "Free Fire 🎮",
        description: "E-sports (Electronic Sports) is a form of competitive gaming where professional players and teams compete in popular video games like PUBG, and Free Fire. It involves strategic gameplay, teamwork, and quick decision-making, often streamed live to global audiences.",
        image: freeFire,
        instructions: [
            "The game will be played in a designated mode.",
            "Maximum 4 participants per team.",
            "Participants must bring their own devices."
        ],        
        rules: [
            "The game will last for a designated time period.",
            "Teams with the highest score will be declared winners."
        ],        
        coordinators: [
            { name: "Mr.K.Sathikumar, AP/MECH", contact: "" },
            { name: "P.Mohannapriyan (III MECH) ", contact: "7904578948" },
            { name: "M.Saravanakumar (III MECH)", contact: "8248500818" },
            { name: "A.Athinamilagi (II MECH)", contact: "8015890051" },

        ],
        location: "EG Drawing hall (C-301)",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
    },

    "word-hunting": {
        title: "Word Hunting 🔠",
        description: "Word hunting is a fun and educational game where players search for hidden words within a grid of letters. It helps improve vocabulary, spelling, and concentration skills. Words can be placed horizontally, vertically, diagonally, or backward, and the goal is to find all the words related to a given theme or topic.",
        image: wordHunting,
        instructions: [
            "Participants must find and arrange words from a given set of letters.",
            "Maximum 2 participants per team."
        ],        
        rules: [
            "Participants with the most correct words will be declared winners.",
            "Question will be displayed."
        ],        
        coordinators: [
            { name: "Mr.M.Dhineshwaran, AP/MECH", contact: "" },
            { name: "R.Ashok (III MECH)", contact: "9361465389" },
            { name: "K.Venkatesh (II MECH)", contact: "9345166852" },


        ],
        location: "Cad lab",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
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
