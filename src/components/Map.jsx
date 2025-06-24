import React from "react";

const Map = () => {
    return (
        <section className="py-16 px-6 sm:px-12 md:px-20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Location</h2>
            <div className="flex justify-center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.573267979797!2d76.76868840802898!3d10.995547586942706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86104b8f60b01%3A0x75c28a0ddc379a9d!2sCoimbatore%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1741794100255!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: 0, width: "100%", maxWidth: "900px", borderRadius: "8px" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    );
};

export default Map;
