import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images
import codeRefactoring from "/src/assets/cse/events/technical/code_refactoring.png";
import redesignX from "/src/assets/cse/events/technical/redesignx.png";
import codeQuest from "/src/assets/cse/events/technical/codequest.png";
import ideathon from "/src/assets/cse/events/technical/ideathon.png";
import jumbledCode from "/src/assets/cse/events/technical/jumbled_code.png";
import techFeud from "/src/assets/cse/events/technical/tech_feud.png";

// Event Data Map (Modified - Added Register Button Link)
const eventData = {
    "code-refactoring": {
        title: "Code Refactoring Challenge 🚀",
        description: "Transform messy code into a clean, efficient masterpiece! Optimize pre-written code while maintaining its functionality. Show off your coding skills and best practices!",
        image: codeRefactoring,
        "instructions": [
            "You will be given a poorly written code snippet.",
            "Refactor and optimize it without changing functionality.",
            "Ensure your code is clean, modular, and efficient.",
            "Submit your refactored version within the given time."
        ],
        "rules": [
            "3 Rounds, 20 minutes each.",
            "Round 1: Fix syntax and minor bugs.",
            "Round 2: Optimize for efficiency.",
            "Round 3: Improve structure and readability.",
            "Code must function the same after refactoring.",
            "No external libraries allowed.",
            "Judging based on efficiency, readability, and structure.",
            "Plagiarism leads to disqualification."
        ],
        coordinators: [
            { name: "Ms.ROHINI M", contact: "" },
            { name: "JAGADEEP S R ", contact: "7603882600" },
            { name: "DHARSHANA", contact: "" },
        ],
        location: "CSE LAB 3",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "redesignx": {
        title: "ReDesignX UI/UX Challenge 🎨",
        description: "Can you perfectly clone a website in just 1 hour? Participants will be provided with a sample website output, color palette, and necessary resources. The challenge is to recreate the design with complete functionality, ensuring accuracy, responsiveness, and smooth performance.",
        image: redesignX,
        "instructions": [
            "Ensure the website matches the given design and includes all required functionalities.",
            "Use only the provided resources (no external templates or pre-made code)."
        ],
        "rules": [
            "Team Size: 1-2 members.",
            "The website must match the given design and include all required functionalities.",
            "Use only the provided resources (no external templates or pre-made code).",
            "Time Limit: 1 hour.",
            "Judging Criteria: Design accuracy, functionality, and code quality."
        ],
        coordinators: [
            { name: "Ms.KANCHANA S", contact: "" },
            { name: "VENKATESH M", contact: "7339252602" },
            { name: "SAJEENA", contact: "8778136006" },
        ],
        location: "Architecture Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "jumbled-code-challenge": {
        title: "Jumbled Code Challenge 🧩",
        description: "Can you untangle the mess and bring the code back to life? Participants will receive disorganized or buggy program code in C, Java, or Python. Their task is to fix, reorder, and debug it within the given time. The event consists of 3 rounds, each lasting 10 minutes, testing syntax correction, logical structuring, and debugging skills!",
        image: jumbledCode,
        "instructions": [
            "Participants will receive printed question papers with disorganized code.",
            "Fix syntax errors, reorder code, and debug programs.",
            "Work through progressively difficult rounds.",
            "Submit correct answers within the time limit."
        ],
        "rules": [
            "Team Size: Maximum 2 members.",
            "Printed question papers will be provided.",
            "No external resources are allowed.",
            "3 Rounds (10 mins each):",
            "Round 1 (Basics): Fix syntax errors, predict program output, and complete basic programs.",
            "Round 2 (Moderate): Reorder jumbled code, fill in the blanks, and fix minor bugs.",
            "Round 3 (Advanced): Debug and complete partially written programs.",
            "Judging Criteria: Accuracy, efficiency, and correctness."
        ],
        coordinators: [
            { name: "Ms. Karthika", contact: "" },
            { name: "AFREENA M", contact: "7550314020" },
            { name: "NAVEEN MUTHU", contact: "8825590766" },

        ],
        location: "CSE Lab 3",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "ideathon-innovate-elevate": {
        title: "Ideathon: Innovate & Elevate 💡",
        description: "Have a game-changing idea? This event challenges participants to develop and present innovative tech solutions for real-world problems. Teams must submit a well-structured PPT before the event and present their idea live to a panel of judges. The best ideas will be evaluated based on creativity, feasibility, and impact.",
        image: ideathon,
        "instructions": [
            "Form a team of up to 4 members.",
            "Select a problem and propose an innovative solution.",
            "Each team will have 5-10 minutes to present their idea in front of the judges, followed by a Q&A session."
        ],
        "rules": [
            "Team Size: 2-4 members.",
            "Submission: A PPT presentation must be prepared before the event and submitted on time.",
            "Content Requirements: The PPT should cover problem statement, solution, technology stack, feasibility, and impact analysis.",
            "Judging Criteria: Innovation, feasibility, impact, clarity of presentation, and ability to answer questions."
        ],
        coordinators: [
            { name: "Ms. Nithya Devi", contact: "" },
            { name: "ABILESH", contact: "6380445404" },
            { name: "MOHANA PRIYANKA", contact: "9342317812" },
        ],
        location: "Seminar Hall",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "codequest": {
        title: "CodeQuest 🚀",
        description: "CodeQuest is a two-round coding challenge that tests your coding skills and problem-solving abilities through Blind Coding and Reverse Coding. You’ll solve problems with minimal information, relying on logic and creativity.",
        image: codeQuest,
        "instructions": [
            "You will receive a set of coding challenges—solve as many as possible within the given time.",
            "Use C, C++, Java, or Python.",
            "Consists of 2 rounds. After the teams are selected, the second round will resume immediately."
        ],
        "rules": [
            "Team Size: 2 members.",
            "Round 1 (Basic): Code without seeing the problem statement or, given an output, write the code. Time Limit: 15 minutes.",
            "Round 2 (Advanced): Solve a more difficult problem or write code for a complex output. Time Limit: 25 minutes.",
            "General Rules:",
            "Tools: Text editors or IDEs only. No external help.",
            "Judging: Based on correctness, logic, and efficiency.",
            "Elimination: Incorrect or late submissions lead to elimination."
        ],
        coordinators: [
            { name: "Ms. Manimozhi", contact: "" },
            { name: "THASNEEM M", contact: "7418475504" },
            { name: "SAMSON", contact: "9566853483" },
        ],
        location: "Architecture Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "tech-feud": {
        title: "Tech Feud 🏆",
        description: "A coding relay challenge that tests teamwork and problem-solving under pressure! Teams will receive coding questions, but there’s a twist—after a set time, teammates must swap positions and continue working on the same code. The goal is to build functional solutions while adapting to the changes made by their partner.",
        image: techFeud,
        "instructions": [
    "Each team will be given 3 coding problems.",
    "Time limit: 10 minutes per question, with a mandatory teammate swap halfway through.",
    "The second teammate must continue from where the first left off, ensuring logical continuity.",
    "Submit functional solutions within the time limit."
],
        "rules": [
    "Team Size: 2 members.",
    "Total Questions: 3 coding problems will be provided.",
    "Time Limit: 10 minutes per question, with a mandatory teammate swap halfway through.",
    "Code Continuation: The second teammate must continue where the first left off, ensuring smooth logic flow.",
    "No external resources allowed.",
    "Judging Criteria: Code correctness, efficiency, and seamless teamwork."
],
        coordinators: [
            { name: "Ms. Abirami", contact: "" },
            { name: "SHANKAR", contact: "9444940098" },
            { name: "PRIYA M", contact: "637458399" },

        ],
        location: "CSE Lab 3",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
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