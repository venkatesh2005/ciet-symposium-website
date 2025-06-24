import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Technical Event Images
import paperPresentation from "/src/assets/it/events/technical/paper_presentation.png";
import projectPresentation from "/src/assets/it/events/technical/project_presentation.png";
import codeCure from "/src/assets/it/events/technical/code_cure.png";
import webCraft from "/src/assets/it/events/technical/web_craft.png";

// Non-Technical Event Images
import brainTeaser from "/src/assets/it/events/nontechnical/brain_teaser.png";
import digitalDesign from "/src/assets/it/events/nontechnical/digital_design.png";

// Flagship Event Images
import freeFire from "/src/assets/it/events/flagship/freefire.jpeg";
import bgmi from "/src/assets/it/events/flagship/bgmi.png";
import cod from "/src/assets/it/events/flagship/cod.png";
import chess from "/src/assets/it/events/flagship/chess.png";
import carrom from "/src/assets/it/events/flagship/carrom.png";

const IT = () => {
    const navigate = useNavigate();

    // Retrieve stored category from localStorage (default: "technical")
    const [selectedCategory, setSelectedCategory] = useState(
        localStorage.getItem("selectedCategory") || "technical"
    );

    useEffect(() => {
        // Store the selected category in localStorage whenever it changes
        localStorage.setItem("selectedCategory", selectedCategory);
    }, [selectedCategory]);

    const eventCategories = {
        technical: {
            title: "Technical Events",
            description: "Coding, cybersecurity, and software development challenges.",
            borderColor: "border-blue-500",
            textColor: "text-blue-400",
            events: [
                {
                    name: "Tech Paper Discussion",
                    slug: "paper-presentation",
                    details: "Showcase your research and ideas in the IT field.",
                    image: paperPresentation,
                },
                {
                    name: "Project Demonstration",
                    slug: "project-presentation",
                    details: "Present your real-time tech solutions and prototypes.",
                    image: projectPresentation,
                },
                {
                    name: "Code Cure",
                    slug: "code-cure",
                    details: "Fix the buggy code and ensure the correct output.",
                    image: codeCure,
                },
                {
                    name: "Web Craft",
                    slug: "web-craft",
                    details: "Design and develop a web page with real-world themes.",
                    image: webCraft,
                },
            ],
        },
        nontechnical: {
            title: "Non-Technical Events",
            description: "Fun games, puzzles, and creative challenges.",
            borderColor: "border-purple-500",
            textColor: "text-purple-400",
            events: [
                {
                    name: "Brain Teaser",
                    slug: "brain-teaser",
                    details: "Solve tricky puzzles and challenges.",
                    image: brainTeaser,
                },
                {
                    name: "Digital Design",
                    slug: "digital-design",
                    details: "Design visually compelling digital posters.",
                    image: digitalDesign,
                },
            ],
        },
        flagship: {
            title: "Flagship Events",
            description: "Top-tier IT competitions with grand rewards!",
            borderColor: "border-green-500",
            textColor: "text-green-400",
            events: [
                { name: "Free Fire", slug: "free-fire", details: "Battle in a survival shooter!", image: freeFire },
                { name: "BGMI", slug: "bgmi", details: "Test your skills in battlegrounds!", image: bgmi },
                { name: "COD", slug: "cod", details: "Fast-paced Call of Duty action!", image: cod },
                { name: "Chess", slug: "chess", details: "Strategize your way to victory!", image: chess },
                { name: "Carrom", slug: "carrom", details: "Show off your striking skills!", image: carrom },
            ],
        },
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl" />

            <Header /> {/* Navbar */}

            <div className="flex-1 text-center px-6 pt-24 relative">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6 flex items-center justify-center gap-2">
                    <span className="cursor-pointer text-white" onClick={() => window.history.back()}>
                        ←
                    </span>
                    Department of Information Technology
                </h1>

                {/* Dropdown for selecting event category */}
                <div className="mb-6">
                    <label className="text-lg font-semibold mr-3">Select Event Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 bg-gray-900 border border-gray-600 text-white rounded-md"
                    >
                        <option value="technical">Technical</option>
                        <option value="nontechnical">Non-Technical</option>
                        {/* <option value="flagship">Flagship</option> */}
                    </select>
                </div>

                {/* Display selected category details */}
                <div className={`max-w-screen-lg mx-auto bg-gray-900 p-6 rounded-lg text-center border ${eventCategories[selectedCategory].borderColor} mb-8`}>
                    <h3 className={`text-2xl font-semibold ${eventCategories[selectedCategory].textColor}`}>
                        {eventCategories[selectedCategory].title}
                    </h3>
                    <p className="text-gray-300">{eventCategories[selectedCategory].description}</p>
                </div>

                {/* Event Boxes */}
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-3 justify-center">
                    {eventCategories[selectedCategory].events.map((event, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/events/it/${selectedCategory}/${event.slug}`)}
                            className="aspect-square bg-gray-800 p-3 rounded-lg border border-gray-600 shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition duration-200"
                        >
                            <img src={event.image} alt={event.name} className="w-full h-full object-cover rounded-md" />
                            <h4 className="text-base font-semibold text-yellow-400 text-center mt-2">{event.name}</h4>
                            <p className="text-sm text-gray-300 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                {event.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer /> {/* Footer */}
        </div>
    );
};

export default IT;
