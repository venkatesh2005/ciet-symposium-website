import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[1300px] py-4 px-8 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 transition-all duration-500 z-50 
            ${isScrolled ? "bg-gradient-to-r from-[#174066cc] to-[#1b1f3bcc] shadow-2xl" : "bg-[#1b1f3b99] border border-white/10"}`}
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-[#00eaff] font-[Orbitron] uppercase whitespace-nowrap">
                    <Link to="/">TECHNOVEGENZA 2K25</Link>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-lg font-semibold text-white font-[Orbitron] relative">
                    <Link to="/" className="hover:text-[#00eaff] transition">Home</Link>
                    <Link to="/departments" className="hover:text-[#00eaff] transition">Events</Link>
                    {/* <Link to="/contact" className="hover:text-[#00eaff] transition">Contact</Link> */}

                    {/* Committee Dropdown */}
                    <div className="relative group">
                        <button 
                            onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
                            className="hover:text-[#00eaff] flex items-center transition"
                        >
                            Committee <FaChevronDown className="ml-1 text-sm" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isCommitteeOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#1b1f3b]/95 backdrop-blur-lg shadow-lg rounded-lg py-2">
                                <Link to="/committee/staff" className="block px-4 py-2 text-white hover:bg-[#00eaff] hover:text-black transition">Staff Committee</Link>
                                <Link to="/committee/student" className="block px-4 py-2 text-white hover:bg-[#00eaff] hover:text-black transition">Student Committee</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/developers" className="hover:text-[#00eaff] transition">Developers</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-3xl text-[#00eaff] focus:outline-none"
                    aria-expanded={isOpen}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-[#1b1f3b]/95 backdrop-blur-lg shadow-lg rounded-b-lg p-5 transition-all duration-300 
                ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"} md:hidden`}
            >
                <Link to="/" className="block text-xl text-white hover:text-[#00eaff] transition py-3">Home</Link>
                <Link to="/departments" className="block text-xl text-white hover:text-[#00eaff] transition py-3">Events</Link>
                {/* <Link to="/contact" className="block text-xl text-white hover:text-[#00eaff] transition py-3">Contact</Link> */}

                {/* Committee Dropdown in Mobile */}
                <div className="relative">
                    <button 
                        onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
                        className="block w-full text-left text-xl text-white hover:text-[#00eaff] transition py-3 flex justify-between items-center"
                    >
                        Committee <FaChevronDown className="text-sm" />
                    </button>
                    {isCommitteeOpen && (
                        <div className="ml-6">
                            <Link to="/committee/staff" className="block text-lg text-white hover:text-[#00eaff] transition py-2">Staff Committee</Link>
                            <Link to="/committee/student" className="block text-lg text-white hover:text-[#00eaff] transition py-2">Student Committee</Link>
                        </div>
                    )}
                </div>

                <Link to="/developers" className="block text-xl text-white hover:text-[#00eaff] transition py-3">Developers</Link>
            </div>
        </nav>
    );
};

export default Header;
