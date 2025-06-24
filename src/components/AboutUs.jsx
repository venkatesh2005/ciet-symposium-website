import React from "react";
import aboutImage from "/clg.png"; // Ensure you have this image in the assets folder

const AboutUs = () => {
    return (
        <section className="py-16 px-6 sm:px-12 md:px-20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Us</h2>
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto text-gray-300 leading-relaxed">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="mb-6">
                        Welcome to <span className="text-green-400 font-bold">TECHNOVEGENZA 2K25</span>, 
                        an innovative tech fest where creativity, innovation, and technology come together!
                        Our mission is to provide a platform for students to showcase their skills, 
                        learn new technologies, and interact with industry experts.
                    </p>
                    <p>
                        Join us for an exciting experience filled with coding competitions, 
                        tech workshops, and networking opportunities. The future of technology begins here!
                    </p>
                </div>

                {/* Image on the Right */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img 
                        src={aboutImage} 
                        alt="Tech Event" 
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
