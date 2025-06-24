import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Technical Event Images
import projectPresentation from "/src/assets/eee/events/technical/innosphere.png";
import paperPresentation from "/src/assets/eee/events/technical/papernza.png";
import technicalQuiz from "/src/assets/eee/events/technical/wonderminds.png";

// Event Data Map for EEE Technical Events
const eventData = {
    "project-presentation": {
        title: "Project Presentation 🚀 (INNOSPHERE)",
        description: "It is a platform where the participating teams or Individual can showcase their projects and ideas. It is a chance to show off your hard work, explain your ideas and convince the value of your project",
        image: projectPresentation,
        instructions: [
            "The project must be related to Electrical and Electronics Engineering.",
            "Participants must submit an abstract summarizing their project.",
            "Teams will be shortlisted based on their abstract submission.",
            "Shortlisted teams must bring a working model or prototype."
        ],
        rules: [
            "Team Size: Maximum 4 members.",
            "Abstracts should be sent to ignisspecto@gmail.com before the deadline.",
            "The project must demonstrate practical applicability.",
            "Participants must bring their respective College ID card.",
            "The decision of the judges will be final."
        ],        
        coordinators: [
            { name: "Thiyagarajan A, AP/EEE", contact: "" },
            { name: "Ranjanilakshmi P", contact: "7010107578" },
            { name: "Ragul L", contact: "9345015959" },
        ],
        location: "Edison Lab",
        registerLink: "https://forms.gle/H3WMMHLXM1rraSdG7",
    },

    "paper-presentation": {
        title: "Paper Presentation 📜 (PAPER’NZA)",
        description: "Sharing research findings involves telling a compelling story using evidence, methods, and visuals to keep the audience interested and spark discussions about what you've learned. As your new ideas and thoughts on your subjects shall be prepared and executed on this wonderful platform",
        image: paperPresentation,
        instructions: [
            "Select a research topic related to Electrical and Electronics Engineering.",
            "Prepare a PowerPoint (PPTX) or PPSX file with a maximum of 12 slides.",
            "Presentation should be concise, engaging, and informative.",
            "Participants will have 5 minutes for the presentation and 3 minutes for discussion."
        ],        
        rules: [
            "Team Size: Maximum 2 members.",
            "One participant cannot submit more than one paper.",
            "Papers must be submitted in advance to ignisspecto@gmail.com.",
            "Participants must bring their College ID card.",
            "Judging will be based on content, clarity, and delivery."
        ],        
        coordinators: [
            { name: "Chandra Lakshmi P, AP/EEE", contact: "" },
            { name: "Brindhadevi S", contact: "6374117192" },
            { name: "Saravanan K", contact: "9488637890" },
        ],
        location: "Maker Space",
        registerLink: "https://forms.gle/H3WMMHLXM1rraSdG7",
    },

    "technical-quiz": {
        title: "Technical Quiz 🧠 (WONDERMINDS)",
        description: "A knowledge challenge where you answer questions about specific subjects, like electrical and electronics, to see how much you know. It's like a fun game to test your smarts!",
        image: technicalQuiz,
        instructions: [
            "Each team will consist of a maximum of 2 members.",
            "The quiz consists of multiple-choice questions and numerical problems.",
            "There will be two rounds: Tech Trek Challenge and Brain Freeze.",
            "Time limits will be strictly enforced for each question."
        ],
        rules: [
            "Team Size: Maximum 2 members.",
            "Mobile phones or external resources are not allowed.",
            "There will be a certain time span for each round.",
            "Respective college ID cards are compulsory.",
            "Winners will be declared based on accuracy and time efficiency."
        ],        
        coordinators: [
            { name: "Thangaraj R, AP/EEE", contact: "9715358800" },
            { name: "Avinash S", contact: "7305267303" },
            { name: "Gokulraj R ", contact: "9344241849" },

        ],
        location: "C103",
        registerLink: "https://forms.gle/H3WMMHLXM1rraSdG7",
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