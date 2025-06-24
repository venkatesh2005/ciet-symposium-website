import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Civil Engineering Technical Event Images
import techTalk from "/src/assets/civil/events/technical/tech_talks.png";
import firstLook from "/src/assets/civil/events/technical/first_look.png";
import battleOfMinds from "/src/assets/civil/events/technical/battle_of_minds.png";
import surveyHunt from "/src/assets/civil/events/technical/survey_hunt.png";

// Civil Engineering Technical Event Data
const eventData = {
    "tech-talk": {
        title: "Tech Talk - Paper Presentation 📜",
        description: "Present your research paper on Smart and Sustainable Construction or Digitalization & Automation in Civil Engineering.",
        image: techTalk,
        instructions: [
            "Submit your paper before the deadline to civilciet2012@gmail.com.",
            "Presentation should be in PPTX or PDF format.",
            "Each team gets 8-10 minutes for presentation with a 2-5 minute Q&A session.",
        ],
        rules: [
            "Team participation (maximum of 2 members) or individual participation is allowed.",
            "Papers must be submitted before the deadline.",
            "No excessive animations in presentation slides.",
            "Selected papers will be allowed for presentation.",
        ],
        coordinators: [
            { name: "Ms. Revathi K", contact: "" },
            { name: "Kishorek V", contact: "6374781432" },
            { name: "Divya P", contact: "-" },

        ],
        location: "C 204",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
    },

    "first-look": {
        title: "First Look - Poster Presentation 🖼️",
        description: "Design and present an informative poster on Sustainable Urban Planning and 3D Printing in Construction.",
        image: firstLook,
        instructions: [
            "Submit your poster in A1 or A0 size format.",
            "The poster must be readable from a distance of at least 3 feet.",
        ],
        rules: [
            "Team participation (maximum of 2 members) or individual participation is allowed.",
            "Poster should be either printed or in digital format.",
            "Must be in portrait or landscape orientation.",
        ],
        coordinators: [
            { name: "Ms. Kalaivani P", contact: "" },
            { name: "Manimaran M", contact: "8608162281" },
            { name: "Jayaganesh", contact: "-" },

        ],
        location: "C 203",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
    },

    "battle-of-minds": {
        title: "Battle of Minds – Quiz 🧠",
        description: "Test your knowledge in Civil Engineering, Science, Technology, and Current Affairs.",
        image: battleOfMinds,
        instructions: [
            "Teams of two members are allowed.",
            "The quiz will cover general knowledge, science, technology, and engineering topics.",
        ],
        rules: [
            "Teams must not use mobile phones or reference materials.",
            "The quizmaster’s decision is final.",
            "Discussion among team members is allowed only before answering.",
            "If a team fails to answer in the given time, the question passes to the next team.",
        ],
        coordinators: [
            { name: "Ms. Revathi M P", contact: "" },
            { name: "Chandru R", contact: "8778811424" },
            { name: "Kathiresan G", contact: "-" },

        ],
        location: "C 202",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
    },

    "survey-hunt": {
        title: "Survey Hunt - Treasure Hunt 🔍",
        description: "Solve clues using survey data or logical reasoning to reach the next location.",
        image: surveyHunt,
        instructions: [
            "Teams will receive clues based on survey data.",
            "Solve the clues to proceed to the next location.",
            "No use of mobile phones or external help unless specified.",
        ],
        rules: [
            "Team of 2 members is allowed.",
            "Teams must not tamper with clues or mislead other teams.",
            "Any misconduct or cheating will lead to disqualification.",
            "The first team to complete all clues wins.",
            "If multiple teams finish close together, winners will be decided based on time taken.",
        ],
        coordinators: [
            { name: "Mr. Seenivasan G R", contact: "" },
            { name: "Elamugil T", contact: "9342155158" },
            { name: "Bharath S", contact: "-" },
            { name: "Chandru K M", contact: "-" },


        ],
        location: "Survey Lab",
        registerLink: "https://forms.gle/qzn5sUaSrDUQTaFs6",
    },
};

const TechnicalEvents = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    // Ensure page loads from the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If event doesn't exist, show an error page
    if (!eventData[eventId]) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
                <h1 className="text-3xl font-bold">Event Not Found</h1>
            </div>
        );
    }

    const { title, description, image, instructions, rules, coordinators, location } = eventData[eventId];

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

                            {/* Rules & Regulations */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">⚖️ Event Rules & Regulations</h2>
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
                                    href={eventData[eventId].registerLink}
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

export default TechnicalEvents;