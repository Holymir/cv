// src/components/Experience/Experience.jsx

import React from "react";
import "./Experience.css";
import limechainIcon from "../../assets/limechain.png";
import netinfoIcon from "../../assets/netinfo-icon.png";
import nova from "../../assets/nova.webp";

function Experience() {
    const experiences = [
        {
            title: "Blockchain & Java Developer",
            company: "MM Fintech",
            companyDescription: "Financial Technology Solutions",
            period: "Nov 2024 - Present (2 months)",
            icon: null, // Add MM Fintech logo if available
            responsibilities: [
                "Built and optimized backend services using Java Spring Boot framework for high-performance transaction processing",
                "Integrated blockchain technology with traditional financial systems and APIs",
                "Collaborated with product and security teams to ensure compliance with financial regulations",
                "Conducted code reviews and mentored junior developers on blockchain and Java best practices"
            ]
        },
        {
            title: "Blockchain Developer",
            company: "LimeChain",
            companyDescription: "Blockchain Consulting and Development",
            period: "Mar 2018 - Sept 2022 (4 years, 6 months)",
            icon: limechainIcon,
            responsibilities: [
                "Designed and implemented blockchain protocols and smart contract architectures for enterprise clients, ensuring scalability and security",
                "Developed, tested, and deployed 50+ production-ready smart contracts using Solidity, with a focus on gas optimization and security best practices",
                "Implemented advanced cryptographic techniques and security protocols, conducting security audits that prevented potential vulnerabilities worth millions in assets",
                "Led integration of blockchain technology with existing systems and infrastructure for multiple enterprise clients",
                "Collaborated with cross-functional teams including UX/UI designers, project managers, and stakeholders to deliver complex blockchain solutions",
                "Established comprehensive testing frameworks including unit, integration, and performance testing to ensure system stability and scalability"
            ]
        },
        {
            title: "Head of Advertising Operations",
            company: "NetInfo",
            companyDescription: "Bulgaria's Largest Online Media",
            period: "Mar 2016 - Mar 2018 (2 years)",
            icon: nova,
            responsibilities: [
                "Led and mentored a team of 8+ advertising operations executives, improving team efficiency by 40%",
                "Oversaw day-to-day operations managing $2M+ annual advertising revenue",
                "Analyzed campaign performance data and implemented optimization strategies resulting in 25% improvement in campaign ROI",
                "Implemented innovative tools and automation practices that enhanced campaign effectiveness by 30%",
                "Established and maintained strategic relationships with external vendors, media agencies, and key partners",
                "Coordinated cross-departmental collaboration with marketing, sales, and product teams to align on company-wide strategy"
            ]
        },
        {
            title: "Advertising Operations Executive",
            company: "NetInfo",
            companyDescription: "Bulgaria's Largest Online Media",
            period: "Jan 2011 - Mar 2016 (5 years, 2 months)",
            icon: netinfoIcon,
            responsibilities: [
                "Managed end-to-end digital advertising campaigns across multiple platforms including social media, search engines, and programmatic display",
                "Utilized ad serving tools to traffic and optimize campaigns, consistently exceeding KPI targets by 15-20%",
                "Collaborated with sales and creative teams to ensure ad content aligned with client objectives and platform specifications",
                "Generated comprehensive campaign reports and analytics, providing actionable insights that improved client retention by 30%",
                "Served as primary point of contact for 20+ key clients, maintaining 95% client satisfaction rate",
                "Ensured compliance with advertising standards, privacy regulations (GDPR), and platform policies"
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <div className="experience-title-section">
                                    <h3>{exp.title}</h3>
                                    <div className="company-info">
                                        <span className="company-name">{exp.company}</span>
                                        {exp.companyDescription && (
                                            <span className="company-description"> - {exp.companyDescription}</span>
                                        )}
                                    </div>
                                    <p className="period">{exp.period}</p>
                                </div>
                                {exp.icon && (
                                    <div className="experience-icon">
                                        <img src={exp.icon} alt={exp.company} />
                                    </div>
                                )}
                            </div>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
