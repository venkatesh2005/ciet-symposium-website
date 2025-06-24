import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Technical Event Images
import waterRocketry from "/src/assets/mct/events/technical/water_rocketry.png";
import lineFollower from "/src/assets/mct/events/technical/line_follower_robot.png";
import bicycleAssembly from "/src/assets/mct/events/technical/bicycle_assembly.png";
import technicalQuiz from "/src/assets/mct/events/technical/technical_quiz.png";
import paperPresentation from "/src/assets/mct/events/technical/paper_presentation.png";

// Event Data Map (Modified - Added Register Button Link)
const eventData = {
    "water-rocketry": {
        title: "Water Rocketry 🚀",
        description: "Water rocketry is a event that involves people's to learn and upgrade their aerodynamical knowledge. In this event they make a mini rocket model that is able to launch with the pressure of fluid the longest distance covered rocket will be announced as winner.",
        image: waterRocketry,
        instructions: [
            "The rocket must be launched from a standard launch pad.",
            "The competition will be judged on distance, and design.",
            "Launch in an Open Area: Launch the rocket in an open area, away from people and obstacles.",
            "Judging Criteria:",
            "Distance: The rocket's maximum distance achieved during the competition.",
            "Design and Innovation: The creativity, innovation, and overall design of the rocket."
        ],
        "rules": [
            "Your rocket has to launch from the base we have set.",
            "The horizontal distance of your rocket covered is taken.",
            "The longest distance covered rocket will win.",
            "We had a range limit, only if the rocket is dropped within the range limit will it be considered.",
            "Team members can be a minimum of 3 and a maximum of 4 members per team.",
            "If anyone in your team violates the rule, the whole team will be eliminated.",
            "Only 3 chances will be given per team, and the total distance will be calculated; the longest will win."
        ],
        coordinators: [
            { name: "Srinithi P (Faculty)", contact: "" },
            { name: "Kiran Kumar B", contact: "7200746958" },
        ],
        location: "Football Ground",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "line-follower-robot": {
        title: "Line Follower Robot 🤖",
        description: "A line follower competition is an exciting robotics challenge where participants design and program robots to autonomously navigate a predefined path marked by a line, typically in black on a white surface or vice versa. The goal is for the robot to follow the line accurately and complete the course in the shortest possible time. ",
        image: lineFollower,
        instructions: [
            "Your robot must be **fully autonomous**.",
            "The track will include **sharp turns, intersections, and obstacles**.",
            "The surface will be smooth and uniform.",
            "Teams will get **2 attempts**, and the best time will be considered.",
        ],
        "rules": [
            "Team Composition:",
            "Each team can have a maximum of 3-4 members.",
            "Participants must be college students and should bring their college ID cards.",
            "Robot Specifications:",
            "The robot must be autonomous and follow a black line on a white surface.",
            "The maximum dimensions allowed: 25 cm x 25 cm x 20 cm (LxWxH).",
            "The robot must be battery-powered (no wired connections to an external power source).",
            "The maximum voltage should not exceed 12V.",
            "Track Details:",
            "The track will have sharp turns, intersections, and possible obstacles.",
            "The width of the black line will be around 2 cm.",
            "The track may include gaps or breaks where the robot must continue on its own.",
            "The surface will be smooth and uniform, avoiding rough patches.",
            "Competition Rules:",
            "Each team will get 2 attempts, and the best time will be considered.",
            "The robot must start within 5 seconds after the signal.",
            "If the robot goes off-track, a team member can restart it from the last checkpoint (with a penalty of 5 seconds).",
            "If the robot completely stops for more than 10 seconds, it will be disqualified.",
            "External control (such as remote or manual assistance) is strictly prohibited.",
            "Scoring Criteria:",
            "Fastest completion time will determine the winner.",
            "Penalties (5 seconds each) will be given for:",
            "Restarting after going off-track.",
            "Touching the robot after the start signal.",
            "In case of a tie, the team with fewer penalties will be the winner.",
            "General Rules:",
            "Participants should report 30 minutes before the event.",
            "Teams should not damage the track or interfere with other robots.",
            "Judges’ decisions are final in case of any disputes."
        ]
        ,
        coordinators: [
            { name: "Avinash B (Faculty)", contact: "" },
            { name: "Pavithran S", contact: "8148731502" },
        ],
        location: "C Block - SSP Laboratory",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "bicycle-assembly": {
        title: "Bicycle Assembly 🚲",
        description: "A bicycle assembly competition is an exciting hands-on event that tests participants' technical skills, teamwork, and efficiency. In this challenge, individuals or teams are tasked with assembling a bicycle from a set of provided parts within a specific time frame.",
        image: bicycleAssembly,
        instructions: [
            "Each team will be given a disassembled bicycle.",
            "The fastest team to **correctly assemble** the bicycle wins.",
            "Each team member gets their turn in the assembly process.",
        ],
        "rules": [
            "The disassembled bicycle will be provided.",
            "The team that assembles the bicycle faster will be the winner team.",
            "A team can contain a minimum of 2 to a maximum of 4 members.",
            "Each team member will have their separate chances to assemble the bicycle.",
            "The assembly time will be noted, and the fastest assembly time will be announced as the winner.",
            "All team members have to wear shoes; if any team member is not wearing shoes, that member will not be allowed to participate."
        ],
        coordinators: [
            { name: "Arun Prasath V (Faculty)", contact: "" },
            { name: "Manikandan R", contact: "8807020616" },
        ],
        location: "AHP Laboratory (MM Lab)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "technical-quiz": {
        title: "Technical Quiz 📚",
        description: "A technical quiz competition is an engaging and intellectually challenging event that tests participants' knowledge and understanding of various technical concepts, advancements, and industry-specific topics. Teams or individuals compete in answering a series of thought-provoking questions that may range from fundamental principles to recent technological trends.",
        image: technicalQuiz,
        instructions: [
            "The quiz consists of **Preliminary, Semi-Final, and Final rounds**.",
            "Questions include **MCQs, Buzzer Round, and Rapid Fire**.",
            "There will be no negative marking unless mentioned.",
        ],
        "rules": [
            "Eligibility & Registration:",
            "Participants must be students of recognized institutions.",
            "Teams can have 2-4 members.",
            "Prior registration is mandatory before the deadline.",
            "Quiz Format:",
            "The quiz will have multiple rounds (Preliminary, Semi-Final, Final).",
            "Question types may include MCQs, Buzzer Round, Rapid Fire.",
            "Each correct answer carries a specific score, and no negative marking unless mentioned.",
            "General Rules:",
            "Teams must be present on time at the venue.",
            "Use of mobile phones or external help is strictly prohibited.",
            "In case of a tie, a tiebreaker round will be conducted.",
            "The quizmaster’s decision is final, and arguments will not be entertained.",
            "Answering Rules:",
            "Teams must wait for their turn unless it’s a buzzer round.",
            "Once answered, no changes can be made to the response.",
            "In the buzzer round, the first team to press the buzzer gets to answer.",
            "Scoring & Winner Selection:",
            "Scores will be displayed at the end of each round.",
            "The team with the highest score in the final round wins.",
            "Prizes and certificates will be awarded based on performance."
        ],
        coordinators: [
            { name: "Senthil Kumar K (Faculty)", contact: "" },
            { name: "Diwakaran C", contact: "8524094997" },
        ],
        location: "B Block (B302)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },

    "paper-presentation": {
        title: "Paper Presentation 📝",
        description: "A paper presentation competition is an intellectually stimulating event where participants showcase their research, innovative ideas, or theoretical insights on a specific topic or field. Competitors prepare well-structured papers and deliver engaging presentations to communicate their findings and viewpoints effectively to a panel of judges and an audience. ",
        image: paperPresentation,
        instructions: [
            "Your paper should follow **IEEE or standard research format**.",
            "Time Limit: **7-10 minutes (including Q&A).**",
            "The presentation must use PPT or PDF format.",
        ],
        "rules": [
            "Paper Submission Rules:",
            "The paper should be in IEEE / standard research format (Title, Abstract, Introduction, Methodology, Results, Conclusion, References).",
            "Submission must be in PDF or DOCX format.",
            "Page limit: Usually 4-6 pages (check symposium guidelines).",
            "The plagiarism percentage should be within the allowed limit (e.g., below 15%).",
            "Proper citations and references must be included.",
            "Eligibility & Registration:",
            "Participants must be students of recognized institutions.",
            "Each team can have 1-6 members.",
            "Registration before the deadline is mandatory.",
            "Presentation Rules:",
            "Time limit: 7-10 minutes (including Q&A).",
            "The presentation must be in PPT or PDF format.",
            "Avoid excessive text—use bullet points, diagrams, and visuals.",
            "Each team member should contribute to the presentation.",
            "Judging Criteria:",
            "Content Quality – Depth of research and originality.",
            "Clarity & Communication – How well the topic is explained.",
            "Presentation Skills – Eye contact, body language, voice modulation.",
            "Q&A Handling – Ability to answer questions confidently.",
            "General Rules:",
            "Participants must arrive on time for their slot.",
            "Use professional language and formal attire.",
            "Avoid using mobile phones during the session.",
            "Strictly adhere to the time limit."
        ]
        ,
        coordinators: [
            { name: "Senthil Kumar K (Faculty)", contact: "" },
            { name: "Manoj Pandian K", contact: "6379172145" },
        ],
        location: "B Block (B302)",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
    },
    "go-kart-workshop": {
        title: "Design, Build, and Ride Your Own Go-Kart! 🏎️",
        description: "Join us for an exciting and hands-on Go-Kart Making Workshop! In this unique and interactive experience, participants will design, build, and test their own go-karts. Our expert instructors will guide you through the process, teaching you the fundamentals of engineering, mechanics, and safety.",
        image: bicycleAssembly,
        instructions: [
            "Keep proper timing for the event.",
        ],
        "rules": [
            "Valid college ID cards are mandatory for participation.",],
        coordinators: [
            { name: "Arun Prasath V (Faculty)", contact: "" },
            { name: "Ram Prabhu", contact: "8438913764" },
        ],
        location: "B 302",
        registerLink: "https://forms.gle/9avXJfkKPbcWt3z39",
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