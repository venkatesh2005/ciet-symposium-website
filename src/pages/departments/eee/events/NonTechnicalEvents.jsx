import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Non-Technical Event Images
import movieMania from "/src/assets/eee/events/nontechnical/movie_mania.png";
import triviaChallenge from "/src/assets/eee/events/nontechnical/trivia.png";

// Non-Technical Event Data Map
const eventData = {
    "movie-mania": {
        title: "Movie Mania 🎬",
        description: "Movie Mania is a super fun game where you guess movie names using clues like catchy songs, iconic images, and memorable dialogues.",
        image: movieMania,
        instructions: [
            "Each team will have a maximum of 2 members.",
            "Clues will include dialogues, images, or soundtracks from movies.",
            "Teams must guess the movie name correctly within the given time."
        ],        
        rules: [
            "Team Size: Maximum 2 members.",
            "Each question must be answered within 30 seconds.",
            "No use of mobile phones or external help.",
            "Answers should be submitted immediately after each question.",
            "Participants must bring their College ID card.",
            "The decision of the judges will be final."
        ],        
        coordinators: [
            { name: "Karthigayini R, AP/EEE", contact: "" },
            { name: "Gokul V", contact: "9344505469" },
            { name: "Somasundaram E", contact: "9150123912" },
        ],
        location: "C102",
        registerLink: "https://forms.gle/H3WMMHLXM1rraSdG7",
    },

    "trivia-quiz": {
        title: "Trivia Quiz 🏆",
        description: "Trivia is like a fun game where you answer Questions about random facts (or) Knowledge. It is a chance to test what you know and learn new things in a relaxed and enjoyable way",
        image: triviaChallenge,
        instructions: [
            "Each team will have a maximum of 2 members.",
            "The quiz consists of multiple-choice questions and fact-based questions.",
            "Questions are asked commonly, answers are to be submitted after every question by teams.",
            "Each question will have a 15-second time limit."
        ],        
        rules: [
            "Team Size: Maximum 2 members.",
            "No use of mobile phones or external resources.",
            "Each round will eliminate the lowest-scoring teams.",
            "Respective college ID cards are mandatory.",
            "Any argument with the organizing team will lead to disqualification.",
            "The decision of the judges will be final."
        ],        
        coordinators: [
            { name: "Kanimozhi B, AP/EEE", contact: "" },
            { name: "Ganeshkumar R", contact: "7395833485" },
            { name: "Amirthasri S", contact: "8056435292" },

        ],
        location: "C101",
        registerLink: "https://forms.gle/H3WMMHLXM1rraSdG7",
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
