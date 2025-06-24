import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Non-Technical Event Images
import scavengerHunt from "/src/assets/mct/events/nontechnical/scavenger_hunt.png";
import reelsEditing from "/src/assets/mct/events/nontechnical/reels_making_video_editing.png";
import posterLogoDesign from "/src/assets/mct/events/nontechnical/logo_designing_poster_making.png";

// Non-Technical Event Data Map
const eventData = {
    "scavenger-hunt": {
        title: "Scavenger Hunt 🔍",
        description: "A scavenger hunt competition is an adventurous and interactive event that challenges participants to solve clues and find hidden items or locations within a set time frame. Teams or individuals navigate through a series of puzzles, riddles, or tasks, with each successfully completed challenge leading to the next step in the hunt.",
        image: scavengerHunt,
        instructions: [
            "All teams will play the given games, and eliminations will be based on points.",
            "At the completion of each game, the remaining teams will receive a clue to play the next game.",
            "Teams that violate rules will be eliminated immediately.",
            "The team that successfully completes all the games first wins.",
        ],
        rules: [
            "At first, all teams will play the given games, and teams will be eliminated based on their points.",
            "Each team may contain 3 to 4 members.",
            "Once the game has started, the rules must be strictly followed.",
            "At the completion of each game, the remaining teams will be provided a clue to play the next game.",
            "If any team is caught red-handed or violates any rule, they will be eliminated.",
            "The team that completes all the games first will be declared the winner.",
            "If any team receives complaints against them, they will not be allowed to participate in any other events, even if they have registered previously."
        ],        
        coordinators: [
            { name: "Mohan Dass M (Faculty)", contact: "" },
            { name: "Manikandan R ", contact: "8807020616" },
            { name: "Pavithran S ", contact: "8148731502" },
        ],
        location: "C Block – SSP Laboratory (Ground Floor)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "reels-editing": {
        title: "Reels Making & Video Editing 🎬",
        description: "A reels-making and video-editing competition is a thrilling event that puts participants' creativity, storytelling, and technical skills to the test. Competitors are tasked with creating captivating short videos or reels based on a specific theme, showcasing their ability to combine engaging visuals, soundtracks, and effects to deliver a powerful message or narrative.",
        image: reelsEditing,
        instructions: [
            "The topic will be given on the spot.",
            "Participants must submit their reel within the given time limit.",
            "Video editing and creativity are key judging factors.",
        ],
        rules: [
            "The team must have a maximum of 4 members.",
            "Reel topic will be given on the spot.",
            "Reels must be submitted within the given time; late submissions will not be accepted.",
            "If more than one team has a similar outcome, both teams will be eliminated.",
            "The reel length should not exceed 1 minute.",
            "If any team repeatedly creates reels by copying other teams, the copied team will be eliminated.",
            "If any team receives complaints against them, they will not be allowed to compete in any other events, even if they have registered previously."
        ],        
        coordinators: [
            { name: "Arun Prasath V (Faculty)", contact: "" },
            { name: "Kiran Kumar B", contact: "7200746958" },
            { name: "Manoj Pandian K", contact: "6379172145" },
        ],
        location: "B Block (B301)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "poster-logo-design": {
        title: "Poster Making & Logo Designing 🎨",
        description: "A logo designing and poster-making competition is a creative event that invites participants to unleash their artistic and conceptual skills. Competitors are tasked with designing unique logos or crafting visually captivating posters based on a given theme or concept.",
        image: posterLogoDesign,
        instructions: [
            "The topic will be provided on the spot.",
            "Competitors must create a logo or poster within **one hour**.",
            "Creativity, branding, and marketing aspects will be considered.",
        ],
        rules: [
            "Topic will be provided at the spot.",
            "To create your logo/poster you will provide one hour time.",
            "Who is submitted to the within one hour only will take to value if you take more than one hour you may eliminate.",
            "The perfection only will be valued by quality of your logo/poster you designed.",
            "Competitors have to make a logo for the given company to make it as brand.",
            "To create the poster to marketing the brand that the logo as designed logo time will be one hour.",
            "If any team is got complaints on them, they wouldn’t allow to participate in any other events even if they register previously."
        ],        
        coordinators: [
            { name: "Arun Prasath V (Faculty)", contact: "99446 35325" },
            { name: "Ram Prabhu K ", contact: "84389 13764" },
            { name: "Diwakaran C", contact: "85240 94997" },
        ],
        location: "B Block (B302)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
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
