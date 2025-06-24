import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// IT Event Images
import paperPresentation from "/src/assets/it/events/technical/paper_presentation.png";
import projectPresentation from "/src/assets/it/events/technical/project_presentation.png";
import codeCure from "/src/assets/it/events/technical/code_cure.png";
import webCraft from "/src/assets/it/events/technical/web_craft.png";

// Event Data Map for IT
const eventData = {
    "paper-presentation": {
        title: "Tech Paper Discussion",
        description:
            "The Paper Presentation event is an opportunity for students to showcase their research, innovative ideas, and technical expertise in various domains. Participants will present their papers on selected topics, demonstrating their analytical skills, creativity, and depth of knowledge.",
        image: paperPresentation,
        instructions: [
            "Create a clear PowerPoint (PPT) – Use bullet points, images, and graphs for better understanding.",
            "Keep slides simple – Avoid too much text; use concise points.",
            "Choose topics on recent tech trends and showcase originality.",
            "Ensure clear and engaging teamwork during the presentation."
        ],        
        rules: [
            "Team Size: 2 to 4 members per team.",
            "Presentation Time: 5 to 7 minutes.",
            "Topics: Domains based on Recent Trends in Technologies."
        ],        
        coordinators: [
            { name: "Preetha.K, AP/IT", contact: "" },
            { name: "Jasika.S", contact: "8148830317" },
            { name: "Kalai Amuthan.K", contact: "9342178209" }

        ],
        location: "LAB 2",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6",
    },

    "project-presentation": {
        title: "Project Demonstration",
        description:
            "The Project Presentation event is a platform for participants to showcase their innovative ideas, technical expertise, and problem-solving skills. Participants will present their projects, explaining the concept, implementation, and impact. A working demo or prototype is encouraged to enhance their presentation.",
        image: projectPresentation,
        instructions: [
            "Showcase your project with a brief introduction, problem, solution, and technical implementation.",
            "Include a demo or prototype to highlight functionality and uniqueness.",
            "Discuss future scope and impact for scalability and innovation."
        ],        
        rules: [
            "Team Size: 2 to 4 members per team.",
            "Time Limit: 5 to 10 minutes per team.",
            "Project Type: Can be hardware, software, AI/ML, web applications, IoT, or any tech-based solution."
        ],        
        coordinators: [
            { name: "Preetha.K, AP/IT", contact: "" },
            { name: "Rathidevi.R", contact: "8807496175" },
            { name: "Dinesh Pandian.K", contact: "9500421761" },
        ],
        location: "LAB 2",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6",
    },

    "code-cure": {
        title: "Code Cure",
        description:
            "The Code Debugging Challenge is a thrilling competition designed to test participants' ability to quickly identify and fix errors in code. Participants will be given buggy code snippets and must debug them to ensure the correct output within the given time.",
        image: codeCure,
        instructions: [
            "Debug code snippets in C, Java, or Python to ensure correct execution.",
            "Earn points for each error fixed and additional bonus points for optimization.",
            "Evaluate solutions, provide insights, and recognize top performers."
        ],        
        rules: [
            "Team Size: Individual or teams of 2.",
            "Time Limit: 30-45 minutes.",
            "Languages Allowed: C, Java, Python."
        ],        
        coordinators: [
            { name: "Mithraa.N, AP/IT", contact: "" },
            { name: "Hemadharshini.K", contact: "9345857328" },
            { name: "Royston Xavio.E", contact: "7339582303" },
        ],
        location: "LAB 2",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6",
    },

    "web-craft": {
        title: "Web Craft",
        description:
            "Level 1: Web Design Quiz - A fast-paced quiz round covering fundamental and advanced topics in web design and development. Level 2: Scenario-Based Web Design Challenge - Participants will be given a real-world scenario or theme and must design a web page based on it.",
        image: webCraft,
        instructions: [
            "Define objectives, topics (HTML, CSS, JavaScript), and schedule.",
            "Set up resources – Ensure necessary tools, software, and internet access for participants.",
            "Engage with hands-on activities – Guide participants through live coding and real-time projects.",
            "Conclude with Q&A and feedback – Clarify doubts, share best practices, and provide learning resources."
        ],        
        rules: [
            "Level 1: Topics include HTML, CSS, JavaScript basics.",
            "Level 1: Format includes MCQs, True/False, and short answer questions.",
            "Level 1: Time Limit: 20-30 minutes.",
            "Level 1: Selection - Top teams/individuals move to Level 2.",
            
            "Level 2: Tools Allowed - HTML, CSS, JavaScript, frameworks like Bootstrap, React, or even no-code tools.",
            "Level 2: Time Limit: 60-90 minutes."
        ],        
        coordinators: [
            { name: "Mohana Priya,G, AP/IT", contact: "" },
            { name: "Sanjay.R", contact: "8524919020" },
            { name: "Ramya.A", contact: "8778763551" },

        ],
        location: "B201",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6",
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
