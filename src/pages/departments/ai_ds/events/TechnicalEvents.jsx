import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images
import paperPresentation from "/src/assets/ai_ds/events/technical/paper_presentation.png";
import ideathon from "/src/assets/ai_ds/events/technical/ideathon.png";
import aiBotBattle from "/src/assets/ai_ds/events/technical/ai_battle_bot.png";

// Event Data Map (Modified - Added Register Button Link)
const eventData = {
    "paper-presentation": {
        title: "Paper Presentation 📝",
        description: "The paper presentation event is an academic platform aimed at fostering intellectual exchange and showcasing innovative research. Participants, including students, researchers, and professionals, are invited to present their original work across diverse disciplines. This event encourages collaboration, critical discussions, and the recognition of exceptional research, inspiring progress and excellence in various fields of study.",
        image: paperPresentation,
        instructions: [
            "Each presenter will have 10 min for their presentation followed by a 5-minute Q&A session.",
            "Ensure your presentation slides are clear, concise, and visually engaging. Avoid excessive text and focus on key points.",
            "Participants for arrive at the venue sharply on time",
            "Begin with an introduction, including your name, affiliation, and research topic.",
            "Avoid unnecessary jargon to ensure accessibility for a diverse audience."
        ],
        rules: [
            "Each team should have  a laptop.",
            "A team should consist of 4-2 members.",
            "Each team should have a pre-prepared PPT.",
            "Every participants should be in the venue on time."
        ],
        coordinators: [
            { name: "Ms.Ananth Angel, AP/AI&DS", contact: "" },
            { name: "Pavan P (III AI&DS) ", contact: "9629251763" },
            { name: "Viswesvaran K (II AI&DS) ", contact: "9443722522" },

        ],
        location: "D-Block",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMys8IY4lw1qh6cCcUxwiWQzYcnxNi-LSqLuF8H_KBc1F4VA/viewform?usp=dialog",
    },

    "ideathon": {
        title: "Ideathon: Innovate & Elevate 💡",
        description: "The on-spot idea presentation event is an exciting platform that tests participants' creativity, analytical thinking, and presentation skills under time constraints. Participants will be given a topic on the spot and are expected to prepare and deliver a coherent and engaging presentation within the allotted time. This event fosters quick thinking, effective communication, and the ability to articulate ideas clearly. It provides a unique opportunity for participants to showcase their adaptability and expertise in presenting innovative perspectives on diverse topics.",
        image: ideathon,
        instructions: [
            "Each team will be provided with a topic on the spot.",
            "You will have 15 minutes to analyze and prepare your PPT.",
            "The presentation duration will be 5 minutes, followed by a 2-minute Q&A session.",
            "Focus on delivering a clear introduction, main body, and conclusion within the time limit.",
            "Avoid diverging from the topic or including irrelevant details."
        ],
        rules: [
            "Each team should have  a laptop.",
            "A team should consist of 4-2 members.",
            "Every participants should be in the venue on time.",
            "Points will be awarded based on the uniqueness and feasibility of the solution."
        ],
        coordinators: [
            { name: "Mr.S.Chandra Mohan,AP/AI&DS", contact: "" },
            { name: "Ms.L. Saranya,AP/AI&DS", contact: "" },
            { name: "Sahaya Gladwin J (III AI&DS)", contact: "9629283029" },
            { name: "Aravind P (II AI&DS)", contact: "9384957636" },

        ],
        location: "D-Block",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMys8IY4lw1qh6cCcUxwiWQzYcnxNi-LSqLuF8H_KBc1F4VA/viewform?usp=dialog",
    },

    "ai-bot-battle": {
        title: "AI Bot Battle 🤖",
        description: "The on-spot AI coding event is an engaging competition where participants are provided with a problem to solve using any AI chatbot of their choice. The task challenges participants to think critically, act swiftly, and utilize AI tools effectively. The first participant to accurately solve the given problem will be declared the winner. This event showcases the participants' problem-solving skills, speed, and innovative use of AI in tackling real-time challenges. It offers an exciting opportunity to test adaptability and technical expertise in a dynamic environment.",
        image: aiBotBattle,
        instructions: [
            "Participants will be given a coding problem or task on the spot.",
            "Use any AI chatbot of your choice to solve the task.",
            "The first participant to successfully complete the task will score a point.",
            "Ensure you have access to a working device and an AI chatbot of your choice before the event begins.",
            "Familiarize yourself with using the chatbot effectively for coding-related queries or tasks."
        ],
        rules: [
            "Each team should have  a laptop.",
            "A team should consist of 2 members.",
            "Every participants should be in the venue on time.  Every participants should be in the venue on time.",
        ],
        coordinators: [
            { name: "Mr.S.Chandra Mohan,Ap/AI&DS", contact: "" },
            { name: "Ms.L. Saranya,AP/AI&DS", contact: "" },
            { name: "Rahuman S (III AI&DS)", contact: "9025250350" },
            { name: "Sabarmathi T (II AI&DS)", contact: "9345030649" },

        ],
        location: "D-Block",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMys8IY4lw1qh6cCcUxwiWQzYcnxNi-LSqLuF8H_KBc1F4VA/viewform?usp=dialog",
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
