import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Map from "../components/Map";

const CountdownTimer = () => {
    const eventDate = new Date("2025-03-27T09:30:00"); // ✅ Event Deadline
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-52 sm:w-64 px-6 py-3 text-lg font-bold tracking-wide uppercase text-white bg-transparent border-2 border-green-500 tech-button text-center">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
        </div>
    );
};

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-20 blur-3xl" />

            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <header 
                className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center px-6 sm:px-12 md:px-20"
                style={{ backgroundImage: "url('/circuit_bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/70 md:bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl px-4 sm:px-8">
                    <h1 
                        className="font-extrabold tracking-widest font-mono text-neon"
                        style={{ 
                            fontFamily: "'Orbitron', sans-serif", 
                            fontSize: "clamp(1.5rem, 4.5vw, 3.5rem)" 
                        }}
                    >
                        TECHNOVEGENZA 2K25
                    </h1>

                    <p 
                        className="text-gray-300 max-w-3xl mt-6 mx-auto font-mono leading-relaxed text-center"
                        style={{ fontSize: "clamp(0.9rem, 2.8vw, 1.4rem)", paddingLeft: "1rem", paddingRight: "1rem" }}
                    >
                        <span className="text-green-400">&gt; </span>
                        Code. Create. Innovate. The Future of Tech Begins Here.
                    </p>

                    {/* Buttons & Countdown */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                        <Link to="/departments" className="w-52 sm:w-64 px-6 py-3 text-lg font-bold tracking-wide uppercase text-white bg-transparent border-2 border-blue-500 tech-button">
                            View Events
                        </Link>
                        <CountdownTimer /> {/* ✅ Live Countdown Timer with same size */}
                    </div>
                </div>
            </header>

            {/* About Us Section */}
            <AboutUs />

            {/* Map Section */}
            <Map />

            {/* Footer */}
            <Footer />

            {/* ✅ CSS for Minimal Glow & Responsive Design */}
            <style jsx>{`
                .text-neon {
                    text-shadow: 0 0 6px rgba(0, 255, 154, 0.9), 
                                 0 0 12px rgba(0, 255, 154, 0.7), 
                                 0 0 18px rgba(0, 255, 154, 0.5);
                }

                .tech-button {
                    text-align: center;
                    transition: all 0.3s ease-in-out;
                    box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.4), 
                                0 0 15px rgba(0, 255, 154, 0.6);
                }

                .tech-button:hover {
                    background: rgba(0, 255, 154, 0.3);
                    box-shadow: 0 0 22px rgba(0, 255, 154, 0.8);
                    transform: scale(1.08);
                }

                @media (max-width: 768px) {
                    .text-neon {
                        font-size: 2.5rem; 
                    }
                    .hero-description {
                        font-size: 1.1rem;
                    }
                    .button-container {
                        flex-direction: column;
                        gap: 12px;
                    }
                }
            `}</style>

        </div>
    );
};

export default Home;
