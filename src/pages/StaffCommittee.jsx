import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Staff Committee Images (Replace with actual paths)
import chiefPatronImg from "../assets/committee/staff/director.jpg";
import patronImg from "../assets/committee/staff/principal.jpg";
import deanImg from "../assets/committee/staff/dean.jpg";
import convenorImg from "../assets/committee/staff/pushpalatha_cse.jpg";
import hodshImg from "../assets/committee/staff/hod_sh.jpg";
import hodAidsImg from "../assets/committee/staff/hod_aids.jpg";
import hodCivilImg from "../assets/committee/staff/hod_civil.jpg";
import hodEeeImg from "../assets/committee/staff/hod_eee.jpg";
import hodEceImg from "../assets/committee/staff/hod_ece.jpg";
import hodItImg from "../assets/committee/staff/hod_it.jpg";
import hodMechImg from "../assets/committee/staff/hod_mech.jpg";
import hodMctImg from "../assets/committee/staff/hod_mct.jpg";
import hodMbaImg from "../assets/committee/staff/hod_mba.jpg";


import staffSaranyaImg from "../assets/committee/staff/saranya_aids.jpg";
import staffSibiImg from "../assets/committee/staff/sibi_civil.jpg";
import staffGomathiImg from "../assets/committee/staff/gomathi_cse.jpg";
import staffThenmozhiImg from "../assets/committee/staff/thenmozhi_cse.jpg";
import staffThiyagarajanImg from "../assets/committee/staff/thiyagarajan_eee.jpg";
import staffYogeshvaranImg from "../assets/committee/staff/yogeshwaran_ece.jpg";
import staffSasikalaImg from "../assets/committee/staff/sasikala_it.jpg";
import staffSundaresanImg from "../assets/committee/staff/sunderesan_mech.jpg";
import staffMohanDassImg from "../assets/committee/staff/mohandass_mct.jpg";
import staffAmbikaImg from "../assets/committee/staff/ambika_mba.jpg";





const staffCommittee = {
    "Chief Patron": [{ name: "Dr.K.A. Chinnaraju", role: "Director", img: chiefPatronImg }],
    "Patron": [{ name: "Dr.K. Manikanda Subramanian", role: "Principal", img: patronImg }],
    "Dean": [{ name: "Dr.K. Kalamani M.E., Ph.D.", role: "Dean Academics", img: deanImg }],
    "Head of the Departments": [
        { name: "Dr.K. Pushpalatha M.E., Ph.D.", role: "HoD/CSE", img: convenorImg },
        { name: "Prof. K. Velumani, M.Sc., M.Phil.,", role: "HoD/S&H", img: hodshImg },
        { name: "Dr.A. Krishnamurthy M.B.A., Ph.D", role: "HoD/MBA", img: hodMbaImg },
        { name: "Dr.E.Gomathi M.E., Ph.D.", role: "HoD/AI&DS", img: hodAidsImg },
        { name: "Dr.P. Magudeaswaran M.E., Ph.D.", role: "HoD/CIVIL", img: hodCivilImg },
        { name: "Dr.S. Gokul M.E., Ph.D.", role: "HoD/EEE", img: hodEeeImg },
        { name: "Dr.A. Umaamaheshwari M.E., Ph.D.", role: "HoD/ECE", img: hodEceImg },
        { name: "Dr.N.R. Deepa M.E., Ph.D", role: "HoD/IT", img: hodItImg },
        { name: "Dr.D. Seenivasan M.E., Ph.D", role: "HoD/MECH", img: hodMechImg },
        { name: "Dr.V. Raj Kumar M.E., Ph.D", role: "HoD/MCT", img: hodMctImg },
    ],
    "Staff Coordinators": [
        { name: "Prof. L. Saranya", role: "AP/AI&DS", img: staffSaranyaImg },
        { name: "Prof. R. Sibi", role: "AP/CIVIL", img: staffSibiImg },
        { name: "Prof. S. Gomathi", role: "AP/CSE", img: staffGomathiImg },
        { name: "Prof. K. Thenmozhi", role: "AP/CSE", img: staffThenmozhiImg },
        { name: "Prof. A. Thiyagarajan", role: "AP/EEE", img: staffThiyagarajanImg },
        { name: "Prof. K. Yogeshvaran", role: "AP/ECE", img: staffYogeshvaranImg },
        { name: "Prof. N. Sasikala", role: "AP/IT", img: staffSasikalaImg },
        { name: "Prof. J. Sundaresan", role: "AP/MECH", img: staffSundaresanImg },
        { name: "Prof. M. Mohan Dass", role: "AP/MCT", img: staffMohanDassImg },
        { name: "Prof. S. Ambika", role: "AP/MBA", img: staffAmbikaImg },





    ]
};

const StaffCommittee = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
            {!isMobile && <ParticlesBackground />}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 opacity-25 blur-3xl" />
            <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-10" />

            <Header />

            <section className="relative z-10 pt-24 sm:pt-32 md:pt-40 px-6 flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                    Meet the Staff Committee
                </h2>

                {/* Chief Patron, Patron, and Dean */}
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {["Chief Patron", "Patron", "Dean"].map((category, index) => (
                        <div key={index} className="w-64">
                            <h3 className="text-lg font-bold text-yellow-400 uppercase mb-3 text-center">
                                {category}
                            </h3>
                            <div className="cursor-pointer bg-gray-800 w-64 h-80 p-6 rounded-3xl shadow-lg text-center border border-yellow-500 hover:shadow-yellow-400 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
                                data-aos="fade-up" data-aos-duration="1000">
                                <img src={staffCommittee[category][0].img} alt={staffCommittee[category][0].name} className="w-40 h-40 rounded-full object-cover" />
                                <h3 className="text-base font-semibold mt-3 mb-1 text-yellow-400">{staffCommittee[category][0].name}</h3>
                                <p className="text-xs text-orange-400 font-medium">{staffCommittee[category][0].role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Head of Departments */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-yellow-400 uppercase mb-8">
                        Head of the Departments
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {staffCommittee["Head of the Departments"].map((staff, idx) => (
                            <div key={idx} className="w-64">
                                <div className="cursor-pointer bg-gray-800 w-64 h-80 p-6 rounded-3xl shadow-lg text-center border border-yellow-500 hover:shadow-yellow-400 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
                                    data-aos="fade-up" data-aos-duration="1000">
                                    <img src={staff.img} alt={staff.name} className="w-40 h-40 rounded-full object-cover" />
                                    <h3 className="text-base font-semibold mt-3 mb-1 text-yellow-400">{staff.name}</h3>
                                    <p className="text-xs text-orange-400 font-medium">{staff.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Staff Coordinators */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-yellow-400 uppercase mb-8">
                        Staff Coordinators
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {staffCommittee["Staff Coordinators"].map((staff, idx) => (
                            <div key={idx} className="w-64">
                                <div className="cursor-pointer bg-gray-800 w-64 h-80 p-6 rounded-3xl shadow-lg text-center border border-yellow-500 hover:shadow-yellow-400 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
                                    data-aos="fade-up" data-aos-duration="1000">
                                    <img src={staff.img} alt={staff.name} className="w-40 h-40 rounded-full object-cover" />
                                    <h3 className="text-base font-semibold mt-3 mb-1 text-yellow-400">{staff.name}</h3>
                                    <p className="text-xs text-orange-400 font-medium">{staff.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
};

export default StaffCommittee;
