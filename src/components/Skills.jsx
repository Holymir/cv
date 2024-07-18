// src/components/Projects.js

import React from "react";
import "./Skills.css"; // Importing the CSS file for styling

function Skills() {
    const skills = [
        {name: "Solidity", level: "95%"},
        {name: "Blockchain Security", level: "95%"},
        {name: "Gas Optimization", level: "95%"},
        {name: "Ethers.js", level: "95%"},
        {name: "Hardhat", level: "95%"},
        {name: "EVM", level: "80%"},
        {name: "JavaScript", level: "80%"},
        {name: "TypeScript", level: "80%"},
        {name: "Layer 2 Solutions", level: "70%"},
        {name: "DeFi Protocols", level: "60%"},
        {name: "NFT", level: "60%"},
        {name: "Foundry", level: "60%"},
        {name: "React", level: "50%"},
        {name: "Vue.js", level: "45%"},
        {name: "Go lang", level: "40%"},
        {name: "Rust", level: "40%"},
    ];

    return (
        <section id='skills' className='skills'>
            <div className='container'>
                <div className='skills-content'>
                    <h3>Technical Skills</h3>
                    <div className='skills-grid'>
                        {skills.map((skill, index) => (
                            <div key={index} className='skill-item'>
                                <span>{skill.name}</span>
                                <div className='progress-bar'>
                                    <div className='progress' style={{width: skill.level}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
