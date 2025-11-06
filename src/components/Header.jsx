// src/components/Header.js

import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import {FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            lastScrollY.current = window.scrollY;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const scrollY = lastScrollY.current;

                    // Add hysteresis: different thresholds for scrolling down vs up
                    // This prevents bouncing at the threshold
                    if (scrollY > 100 && !scrolled) {
                        setScrolled(true);
                    } else if (scrollY < 50 && scrolled) {
                        setScrolled(false);
                    }

                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-main">
                    <div className="header-info">
                        <h1>Ventsislav Tsochev</h1>
                        <p className="title">Senior Blockchain Developer</p>
                        <div className="contact-quick">
                            <a href="mailto:Ven.Tsochev@gmail.com" className="contact-link">
                                <FaEnvelope /> Ven.Tsochev@gmail.com
                            </a>
                            <span className="separator">|</span>
                            <a href="tel:+359882800508" className="contact-link">
                                <FaPhone /> +359 882 800 508
                            </a>
                            <span className="separator">|</span>
                            <span className="contact-link">
                                <FaMapMarkerAlt /> Sofia, Bulgaria
                            </span>
                        </div>
                    </div>
                    <div className="header-social">
                        <a href="https://linkedin.com/in/ventsislav-tsochev" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Holymir" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <nav className="header-nav">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#certificates">Certificates</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
