import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Civil Non-Technical Event Images
import captureIt from "/src/assets/civil/events/nontechnical/capture_it.png";
import connexion from "/src/assets/civil/events/nontechnical/connexion.png";

// Non-Technical Civil Engineering Event Data Map
const eventData = {
    "capture-it": {
        title: "Capture It 📷",
        description: "A photography challenge where participants capture the essence of architecture and construction through their lens.",
        image: captureIt,
        instructions: [
            "Theme will be revealed at the start of the event.",
            "Participants must submit a maximum of 3 original photographs.",
            "Photos should highlight elements of architecture, construction, or nature’s impact on structures.",
            "Editing is allowed but should not manipulate reality.",
            "Submit photographs in JPEG or PNG format.",
        ],
        rules: [
            "Solo participation only.",
            "All images must be taken within the event duration.",
            "No AI-generated or stock images allowed.",
            "Plagiarism or any form of copied work will lead to disqualification.",
            "Participants must provide a short caption for each image.",
        ],
        coordinators: [
            { name: "Ms. Revathi M P", contact: "" },
            { name: "Ajay P", contact: "8778110028" },
            { name: "Praveen Kumar R", contact: "-" },

        ],
        location: "C - 202",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
    },

    "connexion": {
        title: "Connexion 🔗",
        description: "A mind-challenging game where participants must connect Civil Engineering-related clues to form meaningful answers.",
        image: connexion,
        instructions: [
            "Teams will receive a set of Civil Engineering-related clues.",
            "The goal is to connect the clues logically and identify the correct word, phrase, or concept.",
            "Each round will have a different level of difficulty.",
            "Teams must answer within the given time limit per question.",
        ],
        rules: [
            "Team Size: Maximum of 2 members.",
            "No use of mobile phones or external references.",
            "Answers must be written and submitted before time runs out.",
            "In case of a tie, additional tiebreaker rounds will be held.",
        ],
        coordinators: [
            { name: "Ms. Kalaivani P", contact: "" },
            { name: "Hari Prakash M V", contact: "9500858903" },
            { name: "Malini R", contact: "-" },


        ],
        location: "C - 204",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
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
