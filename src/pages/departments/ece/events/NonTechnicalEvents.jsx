import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically (Ensuring Paths Work Properly)
import minuteToWinIt from "/src/assets/ece/events/nontechnical/minute_to_win_it.png";
import rhythmicRiddles from "/src/assets/ece/events/nontechnical/rhythmic_riddles.png";
import productSync from "/src/assets/ece/events/nontechnical/product_sync.png";


// Non-Technical Event Data Map
const eventData = {
    "minute-to-win-it": {
        title: "Minute to Win It – Picture Puzzle Challenge 🎯",
        description: "Are you quick on your feet and sharp with your mind? Minute to Win It – Picture Puzzle Challenge is a fast-paced and exciting game that puts your guessing skills to the test! Participants will be shown a series of images representing a person, place, movie, brand, or concept, and they must guess the correct answer within 60 seconds.",
        image: minuteToWinIt,
        instructions: [
            "Before the Event: Ensure you are registered for the event.",
            "Before the Event: Arrive [mention time] minutes before the start.",
            "Before the Event: Mobile phones & external help are strictly prohibited.",
            "During the Game: Each round, you will see images on a screen.",
            "During the Game: The images represent a person, place, movie, brand, or concept.",
            "During the Game: You must guess the correct answer within 60 seconds.",
            "During the Game: Points are awarded based on speed & accuracy.",
            "During the Game: Hint rounds may be available, but using hints reduces points."
        ],
        rules: [
            "General Rule: The event is open to all registered participants only.",
            "General Rule: Participants must report [mention time] minutes before the event starts.",
            "General Rule: Each round will be conducted within a specified time limit.",
            "General Rule: The decision of the event coordinators and judges will be final.",
            "General Rule: Use of mobile phones or any external help is strictly prohibited.",
            
            "Game Rule: Each participant/team will be shown a set of images on a screen.",
            "Game Rule: The images will represent a person, place, movie, brand, or concept.",
            "Game Rule: Participants must guess the correct answer within 60 seconds.",
            "Game Rule: If a participant/team fails to answer within the time limit, they will not score points for that round.",
            "Game Rule: Some rounds may include hints, but using a hint may reduce the points earned.",
            
            "Scoring System: Correct answer within 30 seconds → Full points.",
            "Scoring System: Correct answer between 30-60 seconds → Half points.",
            "Scoring System: No correct answer → Zero points.",
            "Scoring System: Extra points may be awarded for creative or unique answers (if applicable).",
            
            "Elimination & Final Round: The event consists of [mention number] rounds.",
            "Elimination & Final Round: Based on scores, participants with the lowest scores will be eliminated after each round.",
            "Elimination & Final Round: The final round will determine the winners based on accuracy and speed.",
            
            "Code of Conduct: Participants should maintain discipline and avoid any disruptive behavior.",
            "Code of Conduct: Any form of cheating or misconduct will lead to immediate disqualification.",
            "Code of Conduct: The organizing team has the right to modify the rules if necessary."
        ],        
        coordinators: [
            { name: "Ms. Kavithamani, AP/ECE", contact: "" },
            { name: "Aadhikeshwaran", contact: "6382093260" },
            { name: "Ruthreshwari", contact: "7558186868" },
            { name: "Piruthivika", contact: "9363924823" },

        ],
        location: "A305",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
    },

    "rhythmic-riddles": {
        title: "Rhythmic Riddles – The Whisper Challenge 🤫",
        description: "Get ready for a fun and laughter-filled challenge! Rhythmic Riddles – The Whisper Challenge is a test of teamwork, listening skills, and communication under pressure. Each team of four will play a game of telephone with a twist—while loud music plays in their headphones, they must pass along a whispered sentence without hearing each other properly!",
        image: rhythmicRiddles,
        instructions: [
            "Before the Event: Teams of 4 must report [mention time] minutes early.",
            "Before the Event: No mobile phones or external communication allowed.",
            "Before the Event: Judges’ decisions are final.",
            
            "During the Game: The first player receives a sentence from the host.",
            "During the Game: The other 3 players wear headphones with loud music.",
            "During the Game: The sentence is whispered from one player to the next (no gestures or shouting).",
            "During the Game: The final player says the sentence out loud."
        ],        
        rules: [
            "General Rules: Each team consists of 4 members.",
            "General Rules: All participants must report [mention time] minutes before the event starts.",
            "General Rules: The use of mobile phones or any external communication devices is strictly prohibited.",
            "General Rules: The decision of the event coordinators and judges will be final.",
            "General Rules: Any team caught cheating will be disqualified.",
            
            "Game Rules: The first person in the team will be given a sentence by the host.",
            "Game Rules: The second, third, and fourth members will wear headphones with music playing at a high volume to block external noise.",
            "Game Rules: The first person must whisper the sentence to the second person (without shouting or using gestures).",
            "Game Rules: The second person must then pass it to the third, and the third to the fourth in the same manner.",
            "Game Rules: The final person in the team must say the sentence aloud.",
            
            "Scoring System: Exact match (if the final sentence is identical to the original) – Full points.",
            "Scoring System: Partially correct (if the final sentence retains most of the original words) – Half points.",
            "Scoring System: Completely incorrect or gibberish – Zero points.",
            "Scoring System: Bonus points may be awarded for creativity or humor if applicable.",
            
            "Elimination & Final Round: The event will have [mention number] rounds.",
            "Elimination & Final Round: The teams with the lowest scores will be eliminated after each round.",
            "Elimination & Final Round: The final round will have a more difficult or longer sentence, and the winner will be based on accuracy and fun factor.",
            
            "Code of Conduct: No shouting or using hand gestures while whispering.",
            "Code of Conduct: Teams must not interfere with other teams.",
            "Code of Conduct: The organizing team has the right to modify the rules if necessary."
        ],        
        coordinators: [
            { name: "Mr. Balaji, AP/ECE", contact: "" },
            { name: "Vishalatchi ", contact: "7339099251" },
            { name: "Divya T", contact: "9786860234" },
            { name: "Thiresheka", contact: "9894150609" },
        ],
        location: "A303",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
    },

    "product-sync": {
        title: "Product Sync – The Hidden Order Challenge 🎭",
        description: "Put your senses to the test in Product Sync – The Hidden Order Challenge, where touch is your only guide! Participants must identify and arrange hidden objects inside a closed box without seeing them. Using only their sense of touch, they must carefully place the items in the correct order as per the given reference list.",
        image: productSync,
        instructions: [
            "Before the Event: Open to registered participants only.",
            "Before the Event: Report [mention time] minutes early.",
            "Before the Event: No mobile phones or external help allowed.",
            
            "During the Game: A set of [mention number] products is hidden in a box.",
            "During the Game: Participants feel the objects without looking inside.",
            "During the Game: Arrange the products in the correct order based on the reference list.",
            "During the Game: Time limit: [mention time] minutes.",
            "During the Game: No changes after final placement."
        ],        
        rules: [
            "General Rules: The event is open to all registered participants.",
            "General Rules: Participants must report [mention time] minutes before the event starts.",
            "General Rules: The use of mobile phones or any external help is strictly prohibited.",
            "General Rules: The decision of the event coordinators and judges will be final.",
            "General Rules: Any form of misbehavior or cheating will lead to immediate disqualification.",
            
            "Game Rules: A set of [mention number] products will be hidden inside a closed cardboard box.",
            "Game Rules: Participants will be allowed to feel the objects without looking inside.",
            "Game Rules: Based on touch, they must arrange the products in the correct order as given in the reference list.",
            "Game Rules: Each participant/team will get [mention time] minutes to complete the challenge.",
            "Game Rules: Once arranged, no further changes can be made.",
            
            "Scoring System: Correct Order – Full points.",
            "Scoring System: Partially Correct Order – Half points.",
            "Scoring System: Incorrect Order – Zero points.",
            "Scoring System: Bonus points may be given for completing the task quickly and accurately.",
            
            "Elimination & Final Round: The event will have [mention number] rounds.",
            "Elimination & Final Round: Teams/participants with the lowest scores will be eliminated after each round.",
            "Elimination & Final Round: The final round will have more complex objects or additional distractions to increase difficulty.",
            
            "Code of Conduct: Participants should not peek inside the box.",
            "Code of Conduct: They must handle the products carefully to avoid damage.",
            "Code of Conduct: The organizing team reserves the right to modify the rules if necessary."
        ],        
        coordinators: [
            { name: "Mr.Dineshkumar, AP/ECE", contact: "" },
            { name: "Jeyapriya", contact: "8524000724" },
            { name: "Nivetha ", contact: "8015924409" },
            { name: "Asariya", contact: "7604852354" },

        ],
        location: "A306",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeQUG8wOWeJ48AL2FctJXoaLsAlwIR3WZAcNdQYxpnvExuFEw/viewform",
    },
};



const NonTechnicalEvents = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    // Ensure page loads from the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Invalid Event IDs
    if (!eventData[eventId]) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
                <h1 className="text-3xl font-bold">Event Not Found</h1>
            </div>
        );
    }

    const { title, description, image, instructions, rules, coordinators, location, registerLink } = eventData[eventId];

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

                            {/* Rules */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border-2 border-yellow-400">
                                <h2 className="text-2xl font-bold text-yellow-300">⚖️ Event Rules</h2>
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
                                    href={registerLink}
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

export default NonTechnicalEvents;
