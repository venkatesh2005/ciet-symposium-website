import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

// Importing Images Dynamically (Ensuring Paths Work Properly)
import logoDesign from "/src/assets/cse/events/nontechnical/logo_designing.png";
import justAMinute from "/src/assets/cse/events/nontechnical/just_a_minute.png";
import promptEngineering from "/src/assets/cse/events/nontechnical/prompt_engineering.png";
import recoilRumble from "/src/assets/cse/events/nontechnical/recoil_rumble.png";

// Non-Technical Event Data Map
const eventData = {
    "logo-designing": {
        title: "Logo Designing 🎨",
        description: "Participants will design a logo based on a given theme. The design can be digital or hand-drawn and must effectively convey the concept",
        image: logoDesign,
        "instructions": [
            "The theme will be provided on the spot.",
            "Participants may use tools like Photoshop, Illustrator, Canva, etc.",
            "Plagiarism will result in immediate disqualification.",
            "Participants must bring their own laptop."
        ],
        "rules": [
            "Theme provided on the spot.",
            "Allowed tools: Photoshop, Illustrator, Canva, etc.",
            "Plagiarism will lead to disqualification.",
            "Judging Criteria: Creativity, relevance, aesthetics, and originality."
        ],
        coordinators: [
            { name: "Ms.Yoga", contact: "" },
            { name: "DINESH", contact: "9345175283" },
            { name: "JEEVITHA", contact: "8072002904" },

        ],
        location: "D 308",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "just-a-minute": {
        title: "Just a Minute 🎤",
        description: "A one-minute elocution where participants deliver a speech focused on a topic that demonstrates the value of a minute in our daily lives, encouraging others to make the most out of every moment.",
        image: justAMinute,
        "instructions": [
            "Choose 1 out of the 3 topics given on the spot.",
            "Speech must be original.",
            "Participants will be given 5 minutes to prepare before speaking.",
        ],
        "rules": [
            "Time Limit: 1 minute.",
            "Topic: Choose 1 out of the 3 topics, that will be given on spot.",
            "Speech must be original.",
            "Judging Criteria: Clarity of speech, engagement, creativity, and impact of message.",
            "No use of visual aids or props.",
            "No offensive or inappropriate language.",
        ],
        coordinators: [
            { name: "Ms. Subha Priyadharashini ", contact: "" },
            { name: "SRI KRISHNA AJAY", contact: "8610106932" },
            { name: "SAFRIN FATHIMA", contact: "6383257585" },
        ],
        location: "D 309",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "prompt-engineering": {
        title: "Prompt Engineering Challenge 🤖",
        description: "Can you reverse-engineer AI creativity? Participants will be given 5 AI-generated images and must craft precise prompts to recreate them as closely as possible using an AI image generator. This event tests prompt structuring, keyword selection, and fine-tuning skills to achieve the best match",
        image: promptEngineering,
        "instructions": [
            "A total of 5 AI-generated images will be provided one by one.",
            "Time Limit: 3 minutes per image to generate and refine the prompt.",
            "Only a single prompt is allowed, and it can be refined as many times as desired before generation.",
            "Once the image is generated, no further changes can be made.",
            "No external tools or pre-made prompts are allowed.",
            "Final score is based on accuracy and creativity."
        ]
        ,
        "rules": [
            "Team Size: 1-2 members.",
            "Total Images: 5 AI-generated images will be provided one by one.",
            "Time Limit: 3 minutes per image to generate and refine the prompt.",
            "No external tools or pre-made prompts allowed.",
            "Judging Criteria: Accuracy of the recreated image, prompt efficiency, and creativity in refining details."
        ],
        coordinators: [
            { name: "Ms.Saranya & Ms.Vidhya ", contact: "" },
            { name: "SIYAM SARAN M", contact: "6374436882" },
            { name: "SREEJA P", contact: "9342816105" },
        ],
        location: "Architecture Lab",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
    },

    "recoil-rumble": {
        title: "Recoil Rumble 👀",
        description: "Participants will watch a video or set of images for a short time and then answer questions based on their observation skills.",
        image: recoilRumble,
        "instructions": [
            "Each participant will be provided with a response sheet to record their answers.",
            "No external aids, notes, or recording devices are allowed.",
            "A video or image will be displayed for a limited duration (a few seconds or minutes).",
            "Participants must observe carefully, as no rewinding, retakes, or discussions are permitted.",
            "Once the media is removed, participants must answer a series of questions based on what they observed.",
            "Accuracy and keen observation are key to progressing in the competition.",
            "Each round will have a set of questions, and participants will be scored based on accuracy.",
            "After each round, eliminations will occur, removing participants with the lowest scores.",
            "The competition continues until a final winner emerges."
        ]
        ,
        "rules": [
            "Video or images displayed for a few seconds or minutes.",
            "Participants answer a series of questions on paper.",
            "No rewinding, retakes, or discussions are allowed.",
            "Elimination occurs after each round based on accuracy.",
            "Judging Criteria: Accuracy of answers and observational skills."
        ],
        coordinators: [
            { name: "Mr. Gowrishankar", contact: "" },
            { name: "SIVA SURAJ", contact: "7418743715" },
            { name: "RAMYA", contact: "9164737692" },
        ],
        location: "Seminar Hall",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdK_pd6AlEStDgF_oHSBEHZk9ZTd9WBTyJkCTF64ciP_DP93g/viewform",
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
