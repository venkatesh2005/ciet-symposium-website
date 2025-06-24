import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images
import bestManager from "/src/assets/mba/events/technical/best_manager.png";
import businessQuiz from "/src/assets/mba/events/technical/business_quizbest.png";
import paperPresentation from "/src/assets/mba/events/technical/paper_presentation.png";

// Event Data Map (Modified - Added Register Button Link)
const eventData = {
    "best-manager": {
        title: "Best Manager 🏆",
        description: "ROUND 1: Scenario based challenge (Scenario analysis - 10 mins, Solution discussion - 10 mins) | ROUND 2: HR personal interview | ROUND 3: Case study analysis & Presentation",
        image: bestManager,
        instructions: [
            "Participants should be in formal attire.",
            "No group participation.",
            "Decisions made by the panel should be final.",
            "Participants must carry their own laptops with internet facility.",
            "The topic/theme for the rounds will be given on the spot.",
            "In case of any unethical behavior, the participants will be disqualified."
        ],        
        rules: [
            "Individual event.",
            "Participants must be in formal attire.",
            "Participants should carry their resume.",
            "The topic/theme for the rounds will be given on the spot.",
            "In case of any unethical behavior, the participants will be disqualified."
        ],        
        coordinators: [
            { name: "Dr.M.Arunmozhi, ASP/MBA", contact: "" },
            { name: "Mathesh.V", contact: "9840750517" },
            { name: "Vetriselvan", contact: "9360135751" },

        ],
        location: "B005",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBy5IuXVElocVQ1sSS2j4jUydyqXYiIdzbBF5mYLqLlgH6sA/viewform?usp=header",
    },

    "business-quiz": {
        title: "Business Quiz 📊",
        description: "Round 1: Preliminary Round – A Quiz on general knowledge | Round 2: Current Affairs Round – Questions based on specific business themes like marketing, leadership, financial strategies, recent global business events, mergers & acquisitions, market trends, and other key business news | Round 3: Final Round – A buzzer round where participants answer questions as quickly as possible to secure the highest points.",
        image: businessQuiz,
        instructions: [
            "Mobile phones are strictly restricted.",
            "Questions will be based on General Knowledge, Current Affairs, and Business-related topics.",
            "In case of any unethical behavior, the participants will be disqualified."
        ],        
        rules: [
            "2 members per team.",
            "A participant can only be a part of one team.",
            "In case of individual participation, the participant will compete alone.",
            "Teams will be given a specific time to answer each question in each round.",
            "Points will be awarded based on the accuracy and speed of responses.",
        ],
        coordinators: [
            { name: "Ms.S.Ambika, AP/MBA", contact: "" },
            { name: "Franklin Messach", contact: "8056643063" },
            { name: "Vimsun.I", contact: "6369919937" },
        ],
        location: "E110",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBy5IuXVElocVQ1sSS2j4jUydyqXYiIdzbBF5mYLqLlgH6sA/viewform?usp=header",
    },

    "paper-presentation": {
        title: "Paper Presentation 📝",
        description: "The paper must be original and related to business, management, finance, marketing, HR, or any relevant MBA domain.",
        image: paperPresentation,
        instructions: [
            "The paper must be original and related to business, management, finance, marketing, HR, or any relevant MBA domain.",
            "The document must be submitted in PDF or DOC format.",
            "Plagiarism will result in immediate disqualification.",
            "Each team will have 5 minutes for presentation, followed by a 2-minute Q&A session.",
            "In case of any unethical behavior, the participants will be disqualified."
        ],        
        rules: [
            "Participants must register in teams of 1-2 members.",
            "The document must be submitted in PDF or DOC format.",
            "The maximum word count is 3,000 words (excluding references and appendices).",
            "Plagiarism will result in immediate disqualification.",
            "Each team will have 5 minutes for presentation, followed by a 2-minute Q&A session.",
            "Presentations should be in PowerPoint (PPT) format.",
            "The slides should not exceed 10 slides (excluding title and references).",
            "Participants must submit their papers before the deadline.",
            "The decision of the judges will be final and binding."
        ],
        coordinators: [
            { name: "Dr.A.Krishnamurthy, HOD/MBA", contact: "" },
            { name: "Lakshmipriya.S", contact: "6385242594" },
            { name: "Mahan Anumohan", contact: "9003359588" },
        ],
        location: "B003",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBy5IuXVElocVQ1sSS2j4jUydyqXYiIdzbBF5mYLqLlgH6sA/viewform?usp=header",
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