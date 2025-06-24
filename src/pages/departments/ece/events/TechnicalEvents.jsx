import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images for ECE
import paperPresentation from "/src/assets/ece/events/technical/paper_presentation.png";
import projectPresentation from "/src/assets/ece/events/technical/project_presentation.png";
import debugTheBug from "/src/assets/ece/events/technical/debug_the_bug.png";


const eventData = {
    "paper-presentation": {
        title: "Paper Presentation 📄",
        description: "A paper presentation allows the students to showcase their ideas, findings and innovations to the academic community. The paper in the relevant fields of ECE such as VLSI, Semiconductor Devices, Communication Systems, Wireless Technologies, Embedded Systems, IoT, Signal & Image Processing, Antennas, Microwave Engineering, Robotics & computer Automation are accepted for a paper presentation.",
        image: paperPresentation,
        instructions: [
            "Topics: Papers must be related to ECE fields, including VLSI, Semiconductor Devices, Communication, Wireless Tech, Embedded Systems, IoT, Signal Processing, Antennas, Microwave Engineering, Robotics & Automation.",
            "Submission: Max 2 authors per paper.",
            "Submission: Must follow IEEE format (PDF).",
            "Submission: Structure - Title, Abstract, Introduction, Methodology, Results, Conclusion, References.",
            "Presentation: 10 min presentation + 5 min Q&A.",
            "Presentation: Use PowerPoint (PPT) with clear visuals.",
            "Presentation: Stick to time limits and key points."
        ],        
        rules: [
            "Teams can have 2 to 4 members.",
            "Presentation time: 5 to 7 minutes.",
            "Each team must prepare a PowerPoint presentation with a minimum of 10 slides and a maximum of 20 slides.",
            "All participants will get a certificate.",
            "First, Second, and Third prizes will be awarded based on jury evaluation."
        ],
        coordinators: [
            { name: "Mr. Arun Kumar, AP/ECE", contact: "" },
            { name: "Thirisha", contact: "7708929465" },
            { name: "S. Santhosh", contact: "6379730301" },
        ],
        location: "Vlsi Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
    },

    "project-presentation": {
        title: "Project Presentation 🛠️",
        description: "We invite students to submit project under the domain of Electronics and Communication Engineering (ECE). This is an excellent opportunity to showcase innovative ideas, contribute to technological advancements, and address real-world challenges through cutting-edge solutions with hardware-based Prototypes, Software-Based Projects, AI/ML-Based Projects, Web Application Projects, IoT & Smart Systems",
        image: projectPresentation,
        instructions: [
            "Domains: Projects must relate to ECE, including Hardware Prototypes, Software Projects, AI/ML, Web Apps, IoT & Smart Systems.",
            "Submission: Max 4 members per team.",
            "Submission: Submit a PDF abstract with Title, Objective, Methodology, and Requirements.",
            "Presentation: 10 min demo + 5 min Q&A.",
            "Presentation: Use PPT or Live Demo to showcase innovation & impact."
        ],        
        rules: [
            "Team Size: 2 to 4 members per team.",
            "Make a poster description on chart paper to display your project.",
            "First, Second, and Third prizes will be awarded based on jury evaluation."
        ],        
        coordinators: [
            { name: "Mrs.Yuganandhine, AP/ECE", contact: "9876543212" },
            { name: "Aravind", contact: "9361229866" },
            { name: "Abinash", contact: "8525007851" },
            { name: "Dhaneshwar", contact: "9655999485" },
        ],
        location: "Digital Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
    },

    "debug-the-bug": {
        title: "Debug the Bug 🐞",
        description: "We invite students to participate in the Circuit Debugging Challenge under the domain of Electronics and Communication Engineering (ECE). This is an exciting opportunity to test your circuit analysis skills, troubleshoot real-world issues, and enhance your problem-solving abilities in hardware debugging.",
        image: debugTheBug,
        instructions: [
            "Team Size: 2 to 4 members per team.",
            "Each team will be given time to debug the circuit.",
            "Efficiency and correctness of the debugging approach will be evaluated.",
            "First, Second, and Third prizes will be awarded based on jury evaluation."
        ],        
        rules: [
            "Eligibility: Open to students in ECE interested in circuit analysis and hardware debugging.",
            "Challenge Format: Teams of max 2 members.",
            "Challenge Format: Identify and fix faults in given circuits.",
            "Challenge Format: Time-limited debugging tasks."
        ],        
        coordinators: [
            { name: "Mrs. Alice Shalini, AP/ECE", contact: "" },
            { name: "Ajithkumar", contact: "8870753787" },
            { name: "Ajay R P", contact: "9342740916" },
            { name: "A. Brightson", contact: "8124400360" },

        ],
        location: "Electronics Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
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