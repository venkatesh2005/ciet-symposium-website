import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define Student & Staff Committees with members
const committees = [
    {
        category: "Student Committee",
        members: [
            { name: "Ananya P", role: "President" },
            { name: "Rohan G", role: "Vice President" },
            { name: "Meera S", role: "Treasurer" },
            { name: "Vikram N", role: "Event Coordinator" },
            { name: "Sneha K", role: "Technical Lead" },
        ],
        link: "/committee/student",  // ✅ Updated to match the correct route
    },
    {
        category: "Staff Committee",
        members: [
            { name: "Dr. Arjun Reddy", role: "Chairperson" },
            { name: "Ms. Priya Jain", role: "Faculty Advisor" },
            { name: "Mr. Sudhir Kumar", role: "Logistics Head" },
            { name: "Dr. Neha Sharma", role: "Sponsorship Coordinator" },
            { name: "Prof. Sandeep Gupta", role: "Finance Head" },
        ],
        link: "/committee/staff",  // ✅ Updated to match the correct route
    }
];

const Committee = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* ✅ Navbar */}
            <Header />

            {/* ✅ Main Content */}
            <div className="flex-grow w-5/6 mx-auto text-center py-10">
                <h1 className="text-4xl font-extrabold text-green-400 tracking-wide drop-shadow-lg">
                    Committees
                </h1>
                <p className="text-gray-300 mt-3 italic text-lg">
                    "Meet the Student & Staff Leaders of Technovegenza 2K25"
                </p>

                {/* ✅ Committee Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    {committees.map((committee, index) => (
                        <Link
                            key={index}
                            to={committee.link}  // ✅ Updated to match the new routes
                            className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg text-center 
                                       transition-transform hover:scale-105 hover:border-green-400"
                        >
                            <h2 className="text-2xl font-bold text-green-300 mt-2">{committee.category}</h2>

                            {/* ✅ Display Multiple Members */}
                            <ul className="mt-3 text-gray-300 text-sm">
                                {committee.members.slice(0, 4).map((member, i) => (
                                    <li key={i} className="mt-1">
                                        <span className="font-semibold text-green-400">{member.name}</span> - {member.role}
                                    </li>
                                ))}
                                {committee.members.length > 4 && <li className="text-yellow-400 mt-2">+ More...</li>}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ✅ Footer */}
            <Footer />
        </div>
    );
};

export default Committee;
