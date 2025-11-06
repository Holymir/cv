import React from "react";
import "./Footer.css";
import { FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p className="footer-text">
                        Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" /> by Ventsislav Tsochev
                    </p>
                    <p className="footer-copyright">
                        © {currentYear} All rights reserved
                    </p>
                </div>
                <div className="footer-message">
                    <p>Let's build something amazing together!</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
