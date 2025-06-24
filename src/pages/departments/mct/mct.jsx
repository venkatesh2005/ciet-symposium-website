import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Technical Event Images
import waterRocketry from "/src/assets/mct/events/technical/water_rocketry.png";
import lineFollower from "/src/assets/mct/events/technical/line_follower_robot.png";
import bicycleAssembly from "/src/assets/mct/events/technical/bicycle_assembly.png";
import technicalQuiz from "/src/assets/mct/events/technical/technical_quiz.png";
import paperPresentation from "/src/assets/mct/events/technical/paper_presentation.png";
import goKartImage from "/src/assets/mct/events/technical/kart_making.png";


// Non-Technical Event Images
import scavengerHunt from "/src/assets/mct/events/nontechnical/scavenger_hunt.png";
import reelsEditing from "/src/assets/mct/events/nontechnical/reels_making_video_editing.png";
import posterLogoDesign from "/src/assets/mct/events/nontechnical/logo_designing_poster_making.png";

// Importing Images Dynamically (Ensuring Paths Work Properly)
import freeFire from "/src/assets/mct/events/flagship/freefire.jpeg";
import bgmi from "/src/assets/mct/events/flagship/bgmi.png";
import cod from "/src/assets/mct/events/flagship/cod.png";
import chess from "/src/assets/mct/events/flagship/chess.png";
import carrom from "/src/assets/mct/events/flagship/carrom.png";

const MCT = () => {
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
            description: "Exciting Mechatronics challenges to test and refine your skills.",
            borderColor: "border-blue-500",
            textColor: "text-blue-400",
            events: [
                { name: "Water Rocketry", slug: "water-rocketry", details: "Launch a water rocket to the longest distance!", image: waterRocketry },
                { name: "Line Follower Robot", slug: "line-follower-robot", details: "Build an autonomous robot that follows a line!", image: lineFollower },
                { name: "Bicycle Assembly", slug: "bicycle-assembly", details: "Assemble a bicycle in the shortest time!", image: bicycleAssembly },
                { name: "Technical Quiz", slug: "technical-quiz", details: "Test your Mechatronics knowledge in a challenging quiz!", image: technicalQuiz },
                { name: "Paper Presentation", slug: "paper-presentation", details: "Showcase your research with a structured paper!", image: paperPresentation },
                { 
                    name: "Design, Build, and Ride Your Own Go-Kart!", 
                    slug: "go-kart-workshop", 
                    details: "Join us for an exciting and hands-on Go-Kart Making Workshop! Design, build, and test your own go-karts with expert guidance!", 
                    image: goKartImage 
                },                
            ],
        },
        nontechnical: {
            title: "Non-Technical Events",
            description: "Engage in fun and creative non-technical events.",
            borderColor: "border-purple-500",
            textColor: "text-purple-400",
            events: [
                { name: "Scavenger Hunt", slug: "scavenger-hunt", details: "Find hidden clues and complete challenges!", image: scavengerHunt },
                { name: "Reels Making & Video Editing", slug: "reels-editing", details: "Create and edit an engaging reel on the spot!", image: reelsEditing },
                { name: "Poster Making & Logo Designing", slug: "poster-logo-design", details: "Design a brand logo and marketing poster!", image: posterLogoDesign },
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
                    Department of Mechatronics Engineering
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
                            onClick={() => navigate(`/events/mct/${selectedCategory}/${event.slug}`)}
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

export default MCT;
