import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Technical Event Images
import codeRefactoring from "/src/assets/cse/events/technical/code_refactoring.png";
import redesignX from "/src/assets/cse/events/technical/redesignx.png";
import codeQuest from "/src/assets/cse/events/technical/codequest.png";
import ideathon from "/src/assets/cse/events/technical/ideathon.png";
import jumbledCode from "/src/assets/cse/events/technical/jumbled_code.png";
import techFeud from "/src/assets/cse/events/technical/tech_feud.png";

// Non-Technical Event Images
import logoDesign from "/src/assets/cse/events/nontechnical/logo_designing.png";
import justAMinute from "/src/assets/cse/events/nontechnical/just_a_minute.png";
import promptEngineering from "/src/assets/cse/events/nontechnical/prompt_engineering.png";
import recoilRumble from "/src/assets/cse/events/nontechnical/recoil_rumble.png";


// Flagship Event Images
import freeFire from "/src/assets/cse/events/flagship/freefire.jpeg";
import bgmi from "/src/assets/cse/events/flagship/bgmi.png";
import cod from "/src/assets/cse/events/flagship/cod.png";
import chess from "/src/assets/cse/events/flagship/chess.png";
import carrom from "/src/assets/cse/events/flagship/carrom.png";
const CSE = () => {
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
            description: "Exciting coding challenges to test and refine your skills.",
            borderColor: "border-blue-500",
            textColor: "text-blue-400",
            events: [
                { name: "Code Refactoring", slug: "code-refactoring", details: "Optimize messy code!", image: codeRefactoring },
                { name: "ReDesignX", slug: "redesignx", details: "Clone a website with precision!", image: redesignX },
                { name: "Jumbled Code Challenge", slug: "jumbled-code-challenge", details: "Fix the scrambled code!", image: jumbledCode },
                { name: "Ideathon: Innovate & Elevate", slug: "ideathon-innovate-elevate", details: "Innovate and pitch!", image: ideathon },
                { name: "CodeQuest", slug: "codequest", details: "Solve complex coding puzzles!", image: codeQuest },
                { name: "Tech Feud", slug: "tech-feud", details: "Team-based coding battle!", image: techFeud },
            ],
        },
        nontechnical: {
            title: "Non-Technical Events",
            description: "Fun games, puzzles, and team challenges.",
            borderColor: "border-purple-500",
            textColor: "text-purple-400",
            events: [
                { name: "Logo Designing", slug: "logo-designing", details: "Create an outstanding logo!", image: logoDesign },
                { name: "Just a Minute", slug: "just-a-minute", details: "Speak fluently within a minute!", image: justAMinute },
                { name: "Prompt Engineering", slug: "prompt-engineering", details: "Master AI prompts!", image: promptEngineering },
                { name: "Recoil Rumble", slug: "recoil-rumble", details: "Memory-based fun game!", image: recoilRumble },
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl" />

            <Header /> {/* Navbar */}

            <div className="flex-1 text-center px-6 pt-24 relative">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6 flex items-center justify-center gap-2">
                    <span className="cursor-pointer text-white" onClick={() => window.history.back()}>
                        ←
                    </span>
                    Department of Computer Science and Engineering and Cyber Security
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
                        <option value="flagship">Flagship</option>
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
                            onClick={() => navigate(`/events/cse/${selectedCategory}/${event.slug}`)}
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

export default CSE;
