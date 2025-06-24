import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";  // Ensure this component is available
import AOS from "aos";  // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

// Import Student Committee Images
// AI&DS Overall Coordinators
import shahithyaImg from "../assets/committee/student/shahithya_aids.jpg";
import sowmyanarayanan from "../assets/committee/student/sowmyanarayanan_aids.jpg";

// CIVIL Overall Coordinators
import dhivyadharshanImg from "../assets/committee/student/dhivyadharshan_civil.jpg";
import kanimozhiImg from "../assets/committee/student/kanimozhi_civil.jpg";
import prithvirajImg from "../assets/committee/student/prithviraj_civil.jpg";


// CSE Overall Coordinators
import venkatImg from "../assets/committee/student/venkatesh_cse.png";
import jagadeepImg from "../assets/committee/student/jagadeep_cse.jpg";
import thasneemImg from "../assets/committee/student/thasneem_cse.jpg";
import afreenaImg from "../assets/committee/student/afreena_cse.jpg";
// import sivasurajImg from "../assets/committee/student/sivasuraj_cse.jpg";

// ECE Overall Coordinators
import sriranjanaImg from "../assets/committee/student/sriranjana_ece.jpg";
import vijayibalajiImg from "../assets/committee/student/vijaibalaji_ece.jpg";

// EEE Overall Coordinators
import ajayImg from "../assets/committee/student/ajay_eee.jpg";
import santhoshkumarImg from "../assets/committee/student/santhoshkumar_eee.jpg";

// IT Overall Coordinators
import gunaImg from "../assets/committee/student/guna_it.jpg";
import muthunivethaImg from "../assets/committee/student/muthunivetha_it.jpg";

// MECH Overall Coordinators
import aravinthanImg from "../assets/committee/student/aravinthan_mech.jpg";
import azhaguvelImg from "../assets/committee/student/azhaguvel_mech.jpg";


// MCT Overall Coordinators
import kirankumarImg from "../assets/committee/student/kirankumar_mct.jpg";
import manojpandianImg from "../assets/committee/student/manojpandian_mct.jpg";

// MBA Overall Coordinators
import farmanImg from "../assets/committee/student/farman_mba.jpg";
import ramasamyImg from "../assets/committee/student/ramasamy_mba.jpg";

// Categorized Student Committee Members by Department
const studentCommittee = {
    "Artificial Intelligence & Data Science (AI & DS)": [
        { name: "Shahithya R", role: "III AI & DS", img: shahithyaImg, contact: "7418706004" },
        { name: "Sowmya narayanan R", role: "III AI & DS", img: sowmyanarayanan, contact: "8838744464" },
    ],
    "Civil Engineering (CIVIL)": [
        { name: "Dhivya Dharshan J", role: "II CIVIL", img: dhivyadharshanImg, contact: "6369625016" },
        { name: "Kanimozhi M S", role: "III CIVIL", img: kanimozhiImg, contact: "6383085179" },
        { name: "Prithiviraj V S", role: "III CIVIL", img: prithvirajImg, contact: "7339486587" },
    ],
    "Computer Science Engineering (CSE)": [
        { name: "Afreena M", role: "III CSE", img: afreenaImg, contact: "7550314020" },
        { name: "Jagadeep S R", role: "III CSE", img: jagadeepImg, contact: "7603882600" },
        // { name: "Siva Suraj M", role: "III CSE", img: sivasurajImg, contact: "7339252602" },
        { name: "Thasneem M", role: "III CSE", img: thasneemImg, contact: "7418475504" },
        { name: "Venkatesh M", role: "III CSE", img: venkatImg, contact: "7339252602" },
    ],
    "Electronics and Communication Engineering (ECE)": [
        { name: "Sri Ranjana", role: "III ECE", img: sriranjanaImg, contact: "6379794269" },
        { name: "Vijai Balaji", role: "III ECE", img: vijayibalajiImg, contact: "8525844825" },
    ],
    "Electrical and Electronics Engineering (EEE)": [
        { name: "Santhosh Kumar", role: "III EEE", img: santhoshkumarImg, contact: "6381538016" },
        { name: "Ajay", role: "III EEE", img: ajayImg, contact: "9843516204" },
    ],
    "Information Technology (IT)": [
        { name: "Guna M", role: "III IT", img: gunaImg, contact: "9361242836" },
        { name: "MuthuNivedha R", role: "III IT", img: muthunivethaImg, contact: "7418937828" },
    ],
    "Mechanical Engineering (MECH)": [
        { name: "Aravinthan S", role: "III MECH", img: aravinthanImg, contact: "7904976934" },
        { name: "Azhaguvel P", role: "III MECH", img: azhaguvelImg, contact: "8925467012" },
    ],
    "Mechatronics (MCT)": [
        { name: "Kiran Kumar  B", role: "III MCT", img: kirankumarImg, contact: "7200746958" },
        { name: "Manoj Pandian K", role: "III MCT", img: manojpandianImg, contact: "6379172145" },
    ],
    "Master of Business Administration (MBA)": [
        { name: "Farman S", role: "MBA", img: farmanImg, contact: "7395870270" },
        { name: "Ramasamy P", role: "MBA", img: ramasamyImg, contact: "8248445692" },
    ]
};

const StudentCommittee = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = React.useState(false);

    // Use effect to check window width and set isMobile state
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check initial window size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Sort departments alphabetically and place MBA last
    const departments = Object.keys(studentCommittee).filter(department => department !== "Master of Business Administration (MBA)").sort();
    departments.push("Master of Business Administration (MBA)"); // Add MBA at the end

    // Initialize AOS (animate on scroll)
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
            {/* Conditional rendering of Particles Background for larger screens */}
            {!isMobile && (
                <div className="absolute inset-0 z-0">
                    <ParticlesBackground />
                </div>
            )}

            {/* Glowing Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-30 blur-3xl z-0" />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <section className="relative z-10 pt-24 sm:pt-32 md:pt-40 px-6 sm:px-12 md:px-20 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Meet the Student Committee
                </h2>

                {/* Categorized Sections */}
                {departments.map((department, index) => (
                    <div key={index} className="mt-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">
                            {department}
                        </h3>

                        {/* Flexbox to center the content */}
                        <div className="flex flex-wrap justify-center gap-8">
                            {studentCommittee[department].map((member, idx) => (
                                <div
                                    key={idx}
                                    className="cursor-pointer bg-gray-900 p-6 rounded-3xl shadow-lg text-center border border-blue-500 hover:shadow-blue-400 transition-transform transform hover:scale-110 hover:shadow-xl overflow-hidden"
                                    data-aos="fade-up" // Adding AOS animation
                                    data-aos-duration="1000" // Duration of animation
                                >
                                    <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-2 overflow-hidden">
                                        <img
                                            src={member.img}
                                            alt={`${member.name} - ${member.role}`}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">{member.name}</h3>
                                    <p className="text-purple-400">{member.role}</p>
                                    <p className="text-purple-400">{member.contact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default StudentCommittee;
