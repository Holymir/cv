// src/components/Skills.js

import React from "react";
import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            category: "Blockchain & Smart Contracts",
            skills: ["Solidity", "Smart Contract Security", "Gas Optimization", "EVM", "Hardhat", "Foundry", "Truffle", "Ethers.js", "Web3.js", "DeFi Protocols", "Layer 2 Solutions"],
        },
        {
            category: "Languages",
            skills: ["Java", "JavaScript", "TypeScript", "Go", "Rust"],
        },
        {
            category: "Backend & Infrastructure",
            skills: ["Spring Boot", "Node.js", "Microservices", "REST APIs", "PostgreSQL", "Docker", "CI/CD"],
        },
        {
            category: "Frontend",
            skills: ["React", "Vue.js"],
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
