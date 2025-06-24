import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-center py-6 mt-12 border-t border-blue-500">
            <img 
                src="/footer-logo.png" 
                alt="College Header" 
                className="mx-auto mb-4 w-48"
            />
            <p className="text-gray-400">© 2025 CIET Symposium | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
