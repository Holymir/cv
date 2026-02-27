// src/components/Languages.jsx

import React from "react";
import { FaGlobe } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "./Languages.css";

function Languages() {
    const languages = [
        { language: "Bulgarian", level: "Native" },
        { language: "English", level: "Professional Working Proficiency" },
    ];

    return (
        <AnimatedSection animationType="fade-up">
            <section id="languages" className="languages">
                <div className="container">
                    <h2 className="section-title">
                        <FaGlobe className="title-icon" /> Languages
                    </h2>
                    <div className="languages-grid">
                        {languages.map((lang, index) => (
                            <div key={index} className="language-card">
                                <h3>{lang.language}</h3>
                                <p className="proficiency-level">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}

export default Languages;
