// src/components/Skills.js

import React from "react";
import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            category: "Blockchain & Smart Contracts",
            skills: ["Solidity", "Smart Contract Security", "Gas Optimization", "EVM", "Hardhat", "Foundry", "Ethers.js", "DeFi Protocols", "Layer 2 Solutions"],
        },
        {
            category: "Languages",
            skills: ["Java", "JavaScript", "TypeScript", "Go", "Rust"],
        },
        {
            category: "Backend & Frontend",
            skills: ["Spring Boot", "React", "Vue.js", "REST APIs"],
        },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-categories">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
