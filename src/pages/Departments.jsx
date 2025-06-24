import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const departments = [
    { name: "CSE & CS", path: "/departments/cse" },
    { name: "CIVIL", path: "/departments/civil" },
    { name: "ECE", path: "/departments/ece" },
    { name: "MECH", path: "/departments/mech" },
    { name: "IT", path: "/departments/it" },
    { name: "AI & DS", path: "/departments/ai_ds" },
    { name: "EEE", path: "/departments/eee" },
    { name: "MECHATRONICS", path: "/departments/mct" },
    { name: "MBA", path: "/departments/mba" },
];

const Departments = () => {
    const navigate = useNavigate(); // Navigation hook

    return (
        <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl z-0" />

            <Header />

            <section className="relative z-10 pt-24 sm:pt-32 md:pt-40 px-6 sm:px-12 md:px-20 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Explore Departments
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {departments.map((dept, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(dept.path)} // Navigate to department page
                            className="cursor-pointer bg-gray-900 p-6 rounded-lg shadow-lg text-center border border-blue-500 hover:shadow-blue-400 transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">
                                {dept.name}
                            </h3>
                            <p className="text-purple-400">View Events</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Departments;
