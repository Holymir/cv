// src/components/Header.js

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Header.css";
import {FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaDownload, FaGlobe, FaSpinner} from "react-icons/fa";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [generating, setGenerating] = useState(false);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef(null);
    const lastChangeTime = useRef(0);

    const handleDownloadPDF = useCallback(async () => {
        if (generating) return;
        setGenerating(true);

        try {
            const html2pdf = (await import('html2pdf.js')).default;

            // Apply PDF mode styles
            document.body.classList.add('pdf-mode');

            // Wait for styles to apply
            await new Promise(resolve => setTimeout(resolve, 200));

            const element = document.querySelector('.App');

            const opt = {
                margin: [8, 5, 8, 5],
                filename: 'Ven_Tsochev_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    scrollY: 0,
                    windowWidth: 1000,
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
            };

            await html2pdf().set(opt).from(element).save();
        } catch (err) {
            console.error('PDF generation failed:', err);
            // Fallback to browser print
            window.print();
        } finally {
            document.body.classList.remove('pdf-mode');
            setGenerating(false);
        }
    }, [generating]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const now = Date.now();

            // Prevent rapid state changes (cooldown period of 300ms)
            if (now - lastChangeTime.current < 300) {
                return;
            }

            // Clear any pending timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Debounce the scroll handling
            timeoutRef.current = setTimeout(() => {
                // Large hysteresis: collapse at 150px, expand at 30px
                // This creates a 120px buffer zone
                if (currentScrollY > 150 && !scrolled) {
                    setScrolled(true);
                    lastChangeTime.current = Date.now();
                } else if (currentScrollY < 30 && scrolled) {
                    setScrolled(false);
                    lastChangeTime.current = Date.now();
                }

                lastScrollY.current = currentScrollY;
            }, 50); // 50ms debounce
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-main">
                    <div className="header-info">
                        <h1>Ven Tsochev</h1>
                        <p className="title">Fintech & Blockchain Developer</p>
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
                        <a href="https://www.linkedin.com/in/ven-tsochev" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Holymir" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub Profile">
                            <FaGithub />
                        </a>
                        <a href="https://sentifi.xyz" target="_blank" rel="noopener noreferrer" className="social-link" title="Portfolio - SentiFi AI">
                            <FaGlobe />
                        </a>
                        <button onClick={handleDownloadPDF} className="download-resume-btn" title="Download Resume as PDF" disabled={generating}>
                            {generating ? <FaSpinner className="spin-icon" /> : <FaDownload />} <span className="btn-text">{generating ? 'Generating...' : 'Resume'}</span>
                        </button>
                    </div>
                </div>
                <nav className="header-nav">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#certificates">Certificates</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
