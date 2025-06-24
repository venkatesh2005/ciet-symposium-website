import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Non-Technical Event Images
import brainTeaser from "/src/assets/it/events/nontechnical/brain_teaser.png";
import digitalDesign from "/src/assets/it/events/nontechnical/digital_design.png";

// Event Data Map for Non-Technical
const eventData = {
    "brain-teaser": {
        title: "Brain Teaser",
        description:
            "The Ultimate Fun Challenge! Think Fast, Link Smart, Win Big! The Connections Game is an exciting and fun-filled non-technical event where participants must identify hidden links between words, images, or clues. It’s all about quick thinking, creativity, and teamwork!",
        image: brainTeaser,
        instructions: [
            "Identify hidden links between words, images, or clues with quick thinking and creativity.",
            "Collaborate effectively in a 2-member team to solve the challenge.",
            "Tackle the game with multiple questions in an engaging format."
        ],        
        rules: [
            "Team Size: 2 members per team.",
            "Time Limit: 20 to 30 minutes.",
            "Format: Single-Level Challenge with multiple questions."
        ],        
        coordinators: [
            { name: "Karishma.M, AP/IT", contact: "" },
            { name: "Balaji.M", contact: "9489287453" },
            { name: "Jenisha.J", contact: "9080463190" },

        ],
        location: "B202",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6"
    },

    "digital-design": {
        title: "Digital Design",
        description:
            "Design, Inspire, Impact! The Digital Poster Design Challenge is a creative competition where participants showcase their artistic and design skills by creating visually compelling digital posters on a given theme. This event encourages innovation, storytelling, and impactful visual communication.",
        image: digitalDesign,
        instructions: [
            "Create a digital poster on general themes like Sustainability, Innovation, or Mental Health, showcasing impactful storytelling and design.",
            "Use tools like Canva, Photoshop, Illustrator, or Figma to craft your poster.",
            "Submit a high-resolution PNG/JPEG file as the final output."
        ],        
        rules: [
            "Team Size: Individual or teams of 2.",
            "Time Limit: 60 minutes.",
            "Theme: General topics (e.g., Sustainability, Innovation, Mental Health, Future of AI, Social Awareness, etc.).",
            "Software Allowed: Canva, Photoshop, Illustrator, Figma, or any other graphic design tool."
        ],        
        coordinators: [
            { name: "Sasikala.N, AP/IT", contact: "" },
            { name: "Keerthana.S", contact: "6381493948" },
            { name: "Deepak.V", contact: "7548847751" },

        ],
        location: "B201",
        registerLink:
            "https://forms.gle/4HjjSLcZakQ1dXpu6"
    }
};

const NonTechnicalEvents = () => {
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

export default NonTechnicalEvents;
