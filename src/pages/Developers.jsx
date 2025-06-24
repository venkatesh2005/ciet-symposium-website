import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import Team Photos (Ensure images exist in assets/team/)
import venkateshImg from "../assets/team/venkatesh_cse.png";
import shankarImg from "../assets/team/shankar_cse.png";
import jagadeepImg from "../assets/team/jagadeep_cse.jpg";

// Team Members Data
const teamMembers = [
    { name: "Venkatesh M", role: "Designer & Developer", img: venkateshImg },
    { name: "Shankar K S", role: "Designer", img: shankarImg },
    { name: "Jagadeep S R", role: "Designer", img: jagadeepImg },
];

const Developers = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-black text-white">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl" />

            <Header />

            <div className="flex-grow w-5/6 mx-auto text-center py-10 pt-25"> {/* Added pt-20 to fix header overlap */}
                <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide drop-shadow-lg">
                    Developers
                </h1>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg text-center backdrop-blur-md transition-transform hover:scale-105 hover:border-cyan-400"
                        >
                            <div className="relative w-50 h-50 mx-auto flex items-center justify-center">
                                {/* First Rotating Layer (Slow) */}
                                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                                    <svg className="w-64 h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 364" fill="none">
                                        <path
                                            opacity="0.4"
                                            d="M8.5364 205.548C28.6088 260.841 107.076 319.177 143.801 341.434C215.436 383.662 310.059 364.577 362.065 278.57C414.07 192.564 386.167 93.069 322.857 39.8315C259.548 -13.4061 153.272 -8.70203 85.2407 30.4868C17.2098 69.6756 -16.5541 136.432 8.5364 205.548Z"
                                            fill="url(#paint0_linear)"
                                        ></path>
                                    </svg>
                                </div>

                                {/* Second Rotating Layer (Medium Speed) */}
                                <div className="absolute inset-0 flex items-center justify-center animate-spin-medium">
                                    <svg className="w-48 h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 364" fill="none">
                                        <path
                                            opacity="0.4"
                                            d="M8.5364 205.548C28.6088 260.841 107.076 319.177 143.801 341.434C215.436 383.662 310.059 364.577 362.065 278.57C414.07 192.564 386.167 93.069 322.857 39.8315C259.548 -13.4061 153.272 -8.70203 85.2407 30.4868C17.2098 69.6756 -16.5541 136.432 8.5364 205.548Z"
                                            fill="url(#paint0_linear)"
                                        ></path>
                                    </svg>
                                </div>

                                {/* Third Rotating Layer (Fast) */}
                                <div className="absolute inset-0 flex items-center justify-center animate-spin-fast">
                                    <svg className="w-46 h-46" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 364" fill="none">
                                        <path
                                            opacity="0.4"
                                            d="M8.5364 205.548C28.6088 260.841 107.076 319.177 143.801 341.434C215.436 383.662 310.059 364.577 362.065 278.57C414.07 192.564 386.167 93.069 322.857 39.8315C259.548 -13.4061 153.272 -8.70203 85.2407 30.4868C17.2098 69.6756 -16.5541 136.432 8.5364 205.548Z"
                                            fill="url(#paint0_linear)"
                                        ></path>
                                    </svg>
                                </div>

                                {/* Profile Image */}
                                <img
                                    src={member.img}
                                    alt={`${member.name} - ${member.role}`}
                                    className="relative w-44 h-44 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-cyan-300 mt-4">{member.name}</h2>
                            <p className="text-gray-300 mt-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

            {/* Gradient Definition (Same for All Layers) */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="paint0_linear" x1="187.236" y1="0.917583" x2="203.307" y2="364" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E100A8"></stop>
                        <stop offset="1" stopColor="#71009C"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Developers;
