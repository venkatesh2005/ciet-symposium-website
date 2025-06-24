import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images (Updated for Mechanical)
import techTalk from "/src/assets/mech/events/technical/paper_presentation.png";
import cadModeling from "/src/assets/mech/events/technical/cad_modelling.png";
import technicalQuiz from "/src/assets/mech/events/technical/technical_quiz.png";

// Event Data Map (Mechanical)
const eventData = {
    "tech-talk": {
        title: "Tech Talk - Paper Presentation 🚀",
        description: "A paper presentation is a formal way of sharing research findings, ideas, or innovations with an audience. It typically involves presenting a research paper, project, or case study through slides or visuals, while explaining key concepts, methodology, results, and conclusions. The aim is to educate, inform, and sometimes persuade the audience. It often includes a Q&A session for further discussion.",
        image: techTalk,
        instructions: [
            "Participants must select a topic related to their mechanical field.",
            "Participants must submit their papers in softcopy.",
            "Slides must be prepared in PowerPoint (PPTX) or PDF format.",
            "Maximum 4 participants per team."
        ],        
        rules: [
            "Each participant will have 10-15 minutes for presentation and 5 minutes for Q&A.",
            "Papers will be judged on content, presentation, and Q&A."
        ],        
        coordinators: [
            { name: "Dr.A.Veerakumar, AP/MECH", contact: "" },
            { name: "P.Azhaguvel", contact: "89254567012" },
            { name: "R.S.Lokeshwaran", contact: "6385282175" },

        ],
        location: "Architecture board room",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
    },

    "cad-modeling": {
        title: "CAD Modeling 🎨",
        description: "CAD modeling (Computer-Aided Design) is the process of creating 2D drawings. It allows engineers and designers to design, visualize, and analyze products or structures before manufacturing. CAD modeling is widely used in mechanical design, architecture, product development, and engineering industries for precise and efficient design creation.",
        image: cadModeling,
        instructions: [
            "Team participation and individual participation are allowed.",
            "Topic selection must be in the Mechanical field.",
            "Models will be judged on accuracy, complexity, and aesthetics."
        ],        
        rules: [
            "Participants must use a designated CAD software.",
            "The model must meet specific complexity requirements."
        ],        
        coordinators: [
            { name: "Dr.S.Vijayan, ASP/MECH", contact: "" },
            { name: "M.Prasannakumar", contact: "8778293656" },
            { name: "G.Sethupathi", contact: "9080949164" },
            { name: "B.Dharshan", contact: "9344477207" },
        ],
        location: "Cad lab",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
    },

    "technical-quiz": {
        title: "Technical Quiz 🏆",
        description: "A technical quiz is a knowledge-based competition that tests participants' understanding of mechanical field. It often includes multiple-choice questions, problem-solving tasks, and practical scenarios, helping to enhance learning and encourage innovation.",
        image: technicalQuiz,
        instructions: [
            "The quiz will consist of multiple-choice questions and numerical problems.",
            "Maximum 2 participants per team."
        ],        
        rules: [
            "The quiz will last for 60 minutes.",
            "0.25 marks will be deducted for each incorrect answer.",
            "Teams with the highest score will be declared winners."
        ],        
        coordinators: [
            { name: "Prof.N.Sadanatham, ASP/MECH ", contact: "" },
            { name: "G.Jaganathan (III MECH)", contact: "7604823617" },
            { name: "S.Pradeep (III MECH)", contact: "8778222090" },
            { name: "K.Dhanwath (II MECH)", contact: "7708730363" },


        ],
        location: "D-208",
        registerLink: "https://forms.gle/pyYz6jmoBna1FzUJ8",
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