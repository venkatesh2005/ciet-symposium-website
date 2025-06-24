import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Technical Event Images
import paperPresentation from "/src/assets/ece/events/technical/paper_presentation.png";
import projectPresentation from "/src/assets/ece/events/technical/project_presentation.png";
import debugTheBug from "/src/assets/ece/events/technical/debug_the_bug.png";

// Non-Technical Event Images
import minuteToWinIt from "/src/assets/ece/events/nontechnical/minute_to_win_it.png";
import productSync from "/src/assets/ece/events/nontechnical/product_sync.png";
import rhythmicRiddles from "/src/assets/ece/events/nontechnical/rhythmic_riddles.png";

// Flagship Event Images
import freeFire from "/src/assets/ece/events/flagship/freefire.jpeg";
import bgmi from "/src/assets/ece/events/flagship/bgmi.png";
import cod from "/src/assets/ece/events/flagship/cod.png";
import chess from "/src/assets/ece/events/flagship/chess.png";
import carrom from "/src/assets/ece/events/flagship/carrom.png";

const ECE = () => {
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
            description: "Participate in innovative and competitive Electronics and Communication Engineering challenges.",
            borderColor: "border-blue-500",
            textColor: "text-blue-400",
            events: [
                { name: "Paper Presentation", slug: "paper-presentation", details: "Showcase research and innovations in ECE.", image: paperPresentation },
                { name: "Project Presentation", slug: "project-presentation", details: "Display innovative projects under ECE domains.", image: projectPresentation },
                { name: "Debug the Bug", slug: "debug-the-bug", details: "Test circuit debugging skills in a real-time challenge.", image: debugTheBug },
            ],
        },
        nontechnical: {
            title: "Non-Technical Events",
            description: "Engaging and fun events to test your creativity, teamwork, and quick thinking.",
            borderColor: "border-purple-500",
            textColor: "text-purple-400",
            events: [
                { name: "Minute to Win It – Picture Puzzle Challenge", slug: "minute-to-win-it", details: "Solve picture puzzles within 60 seconds!", image: minuteToWinIt },
                { name: "Product Sync – The Hidden Order Challenge", slug: "product-sync", details: "Identify and arrange hidden objects in the correct order!", image: productSync },
                { name: "Rhythmic Riddles", slug: "rhythmic-riddles", details: "Pass a whispered message accurately through your team.", image: rhythmicRiddles },
            ],
        },
        flagship: {
            title: "Flagship Events",
            description: "Grand challenges with big rewards!",
            borderColor: "border-green-500",
            textColor: "text-green-400",
            events: [
                { name: "Free Fire", slug: "free-fire", details: "Battle it out in this intense survival shooter!", image: freeFire },
                { name: "BGMI", slug: "bgmi", details: "Test your skills in the ultimate battlegrounds!", image: bgmi },
                { name: "COD", slug: "cod", details: "Fast-paced Call of Duty action awaits!", image: cod },
                { name: "Chess", slug: "chess", details: "Strategize your way to victory in this battle of minds!", image: chess },
                { name: "Carrom", slug: "carrom", details: "Show off your striking skills in this classic game!", image: carrom },
            ],
        },
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-gray-500 to-purple-500 opacity-20 blur-3xl" />

            <Header />

            <div className="flex-1 text-center px-6 pt-24 relative">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-gray-400 text-transparent bg-clip-text mb-6 flex items-center justify-center gap-2">
                    <span className="cursor-pointer text-white" onClick={() => window.history.back()}> ← </span>
                    Electronics and Communication Engineering
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
                            onClick={() => navigate(`/events/ece/${selectedCategory}/${event.slug}`)}
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

            <Footer />
        </div>
    );
};

export default ECE;
