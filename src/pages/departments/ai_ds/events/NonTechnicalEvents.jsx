import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically (Ensuring Paths Work Properly)
import treasureHunt from "/src/assets/ai_ds/events/nontechnical/treasure_hunt.png";
import synthicinema from "/src/assets/ai_ds/events/nontechnical/synthicinema.png";

// Non-Technical Event Data Map for AIDS
const eventData = {
    "treasure-hunt": {
        title: "Treasure Hunt 🗺️",
        description: "The QR-based treasure hunt is a dynamic and interactive event where participants embark on an adventurous quest, guided by a series of QR codes. Upon scanning each QR code, participants will receive a clue or task leading them to the next location or challenge. This event combines problem-solving, teamwork, and excitement, as participants race to uncover all the clues and complete the hunt. It's a thrilling opportunity to test creativity, strategy, and collaboration in a fun and engaging environment.",
        image: treasureHunt,
        instructions: [
            "Participants will navigate through a series of locations using clues provided by QR codes.",
            "Each scanned QR code reveals the next clue or task to proceed to the following location.",
            "The participant or team that successfully completes the hunt first will be declared the winner.",
            "Ensure you have a smartphone or device with a QR code scanner app installed.",
            "Follow the sequence of QR codes strictly; skipping any step is not allowed.",
            "Complete the tasks associated with each QR code before moving on.",
            "Work within the designated event boundaries or locations specified by the organizers.",
            "Collaboration within your team is allowed, but external assistance is prohibited.",
            "Take care not to tamper with QR codes or disrupt other participants."
        ],        
        rules: [
            "Participants can use any devices which can scan a QR code.",
            "A team should consist of 2-4 members. ",
            "Every participants should be in the venue on time.",
        ],
        coordinators: [
            { name: "Ms.S.Amsaveni,AP/AI&DS", contact: "" },
            { name: "Arjun P (III AI&DS)", contact: "9876543227" },
            { name: "Poovarasi P (II AI&DS) ", contact: "9876543227" },
        ],
        location: "CIET campus",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMys8IY4lw1qh6cCcUxwiWQzYcnxNi-LSqLuF8H_KBc1F4VA/viewform?usp=dialog",
    },

    "synthicinema": {
        title: "Synthicinema 🎬",
        description: "The AI film challenge is a creative event where participants must produce a 5-minute short film using AI-generated video clips. The genre for the storyline will be provided on the spot, and participants are required to craft an engaging narrative around it. This event tests participants' storytelling abilities, creativity, and technical skills in utilizing AI tools to bring their ideas to life. It offers a unique opportunity to showcase innovation and cinematic vision under time constraints.",
        image: synthicinema,
        instructions: [
            "Each team must create a 5-minute short film using AI-generated video clips.",
            "The genre for the storyline will be provided on the spot.",
            "The completed film must have a clear narrative structure and adhere to the given genre.",
            "25 minutes will be provided for making your own AI-generated film.",
            "Any kind of AI video clip generating software can be used."
        ],        
        rules: [
            "Each team should have  a laptop.",
            "A team should consist of 2 members.",
            "Every participants should be in the venue on time.",
            "If the AI generated film contains any vulgar words or actions, the team will be disqualifies.",
        ],
        coordinators: [
            { name: "Ms.S.Geeviga,AP/AI&DS", contact: "" },
            { name: "Harish kumar A (III AI&DS)", contact: "6385330897" },
            { name: "Jovina rezin infant A (III AI&DS)", contact: "9042408247" },
        ],
        location: "D-block",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMys8IY4lw1qh6cCcUxwiWQzYcnxNi-LSqLuF8H_KBc1F4VA/viewform?usp=dialog",
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
