// src/components/Skills.js

import React from "react";
import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            category: "Blockchain & Smart Contracts",
            skills: [
                { name: "Solidity", level: "expert" },
                { name: "Smart Contract Security", level: "expert" },
                { name: "Gas Optimization", level: "expert" },
                { name: "EVM", level: "advanced" },
                { name: "Hardhat", level: "expert" },
                { name: "Foundry", level: "intermediate" },
                { name: "Ethers.js", level: "expert" },
            ]
        },
        {
            category: "Blockchain Ecosystems",
            skills: [
                { name: "DeFi Protocols", level: "intermediate" },
                { name: "Layer 2 Solutions", level: "advanced" },
                { name: "NFT Standards", level: "intermediate" },
            ]
        },
        {
            category: "Programming Languages",
            skills: [
                { name: "JavaScript", level: "advanced" },
                { name: "TypeScript", level: "advanced" },
                { name: "Go", level: "intermediate" },
                { name: "Rust", level: "intermediate" },
            ]
        },
        {
            category: "Frontend Development",
            skills: [
                { name: "React", level: "intermediate" },
                { name: "Vue.js", level: "intermediate" },
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case "expert": return "expert";
            case "advanced": return "advanced";
            case "intermediate": return "intermediate";
            default: return "beginner";
        }
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills & Expertise</h2>
                <div className="skills-categories">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className={`skill-badge ${getLevelColor(skill.level)}`}>
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}</span>
                                    </div>
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
