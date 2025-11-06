import React from "react";
import "./Education.css";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
    const education = [
        {
            degree: "Master's in Cryptoeconomics",
            institution: "University of National and World Economy (UNWE)",
            location: "Sofia, Bulgaria",
            period: "Currently Studying",
            status: "in-progress",
            description: "Advanced studies in cryptocurrency economics, blockchain governance, and decentralized finance systems"
        },
        {
            degree: "Blockchain Dev Camp",
            institution: "SoftUni",
            location: "Sofia, Bulgaria",
            period: "February 2018",
            status: "completed",
            description: "Intensive full-time program focused on blockchain technology, smart contract development, and distributed systems"
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className={`education-card ${edu.status}`}>
                            <div className="education-icon">
                                {edu.status === 'in-progress' ? <FaUniversity /> : <FaGraduationCap />}
                            </div>
                            <div className="education-content">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <div className="education-institution">
                                    <span className="institution-name">{edu.institution}</span>
                                    <span className="institution-location"> • {edu.location}</span>
                                </div>
                                <p className="education-period">
                                    {edu.period}
                                    {edu.status === 'in-progress' && <span className="status-badge">In Progress</span>}
                                </p>
                                <p className="education-description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
