// src/components/Experience/Experience.jsx

import React, { useState } from "react";
import "./Experience.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import limechainIcon from "../../assets/limechain.png";
import netinfoIcon from "../../assets/netinfo-icon.png";
import nova from "../../assets/nova.webp";

function Experience() {
    // State to track which experiences are expanded (default: first one expanded)
    const [expandedItems, setExpandedItems] = useState([0]);

    const toggleExpand = (index) => {
        setExpandedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const experiences = [
        {
            title: "Blockchain & Java Developer",
            company: "MM Fintech",
            companyDescription: "Financial Technology Solutions",
            period: "Nov 2024 - Present (1 year)",
            icon: null, // Add MM Fintech logo if available
            responsibilities: [
                "Architected and optimized microservices-based backend infrastructure using Java Spring Boot, implementing RESTful APIs for high-throughput transaction processing with sub-second response times",
                "Engineered blockchain integration layer bridging traditional financial systems with distributed ledger technology, enabling secure cross-platform asset transfers and real-time settlement",
                "Spearheaded security and compliance initiatives, implementing multi-layered authentication, encryption standards, and regulatory compliance frameworks (MiFID II, PSD2) in collaboration with product and security teams",
                "Led technical mentorship program for junior developers, conducting comprehensive code reviews and establishing team coding standards for blockchain and enterprise Java development"
            ]
        },
        {
            title: "Blockchain Developer",
            company: "LimeChain",
            companyDescription: "Blockchain Consulting and Development",
            period: "Mar 2018 - Sept 2022 (4 years, 6 months)",
            icon: limechainIcon,
            responsibilities: [
                "Architected and deployed enterprise-grade blockchain protocols and smart contract systems on Ethereum, Polygon, and custom EVM-compatible chains, serving Fortune 500 clients with high-security requirements",
                "Engineered and shipped 50+ production smart contracts in Solidity with advanced gas optimization techniques, reducing transaction costs by up to 40% while maintaining security standards",
                "Conducted in-depth security audits and implemented cryptographic protocols (ECDSA, Merkle trees, zero-knowledge proofs) that identified and mitigated vulnerabilities protecting $10M+ in digital assets",
                "Orchestrated seamless blockchain integrations with legacy enterprise systems using Web3.js, Ethers.js, and custom middleware, delivering end-to-end decentralized solutions for 15+ client projects",
                "Drove cross-functional collaboration with product, design, and business stakeholders to translate complex technical requirements into user-centric blockchain applications with 99.9% uptime",
                "Pioneered comprehensive testing infrastructure using Hardhat, Truffle, and custom frameworks, implementing CI/CD pipelines that reduced deployment failures by 85%"
            ]
        },
        {
            title: "Head of Advertising Operations",
            company: "NetInfo",
            companyDescription: "Bulgaria's Largest Online Media",
            period: "Mar 2016 - Mar 2018 (2 years)",
            icon: nova,
            responsibilities: [
                "Managed team of 8+ advertising operations specialists, implementing process optimization and training programs that increased team productivity by 40% and reduced campaign turnaround time by 30%",
                "Directed $2M+ annual advertising revenue operations across programmatic, display, and video campaigns, consistently exceeding quarterly revenue targets by 15-20%",
                "Drove data-driven campaign optimization using advanced analytics platforms (Google Analytics, Adobe Analytics), achieving 25% improvement in ROI and 30% increase in conversion rates",
                "Pioneered automation solutions and workflow tools that streamlined ad trafficking processes, reducing manual tasks by 50% and improving campaign delivery accuracy",
                "Cultivated strategic partnerships with premium advertising networks, DSPs, and media agencies, expanding revenue channels and securing exclusive inventory deals",
                "Orchestrated cross-departmental initiatives aligning operations, sales, and product teams, resulting in 20% faster campaign launches and improved stakeholder satisfaction"
            ]
        },
        {
            title: "Advertising Operations Executive",
            company: "NetInfo",
            companyDescription: "Bulgaria's Largest Online Media",
            period: "Jan 2011 - Mar 2016 (5 years, 2 months)",
            icon: netinfoIcon,
            responsibilities: [
                "Executed full-cycle digital advertising campaigns across Google Ads, Facebook Ads, programmatic platforms, and premium publisher networks, managing $500K+ in annual ad spend",
                "Optimized campaign performance using DFP (DoubleClick for Publishers), AdWords, and proprietary ad servers, consistently exceeding KPI benchmarks by 15-20% and reducing CPA by 25%",
                "Partnered with sales, creative, and technical teams to develop high-converting ad creatives and landing pages, improving CTR by 35% and conversion rates by 28%",
                "Delivered actionable insights through detailed campaign analytics and performance dashboards, driving strategic decisions that improved client retention from 70% to 95%",
                "Managed portfolio of 20+ enterprise clients as primary technical contact, providing consultation on campaign strategy, targeting optimization, and performance improvement",
                "Maintained strict adherence to GDPR, IAB standards, and platform-specific policies, ensuring 100% compliance across all campaigns and preventing potential legal issues"
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => {
                        const isExpanded = expandedItems.includes(index);
                        return (
                            <div key={index} className={`experience-item ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                <div
                                    className="experience-header"
                                    onClick={() => toggleExpand(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === 'Enter' && toggleExpand(index)}
                                >
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
                                    <div className="experience-right">
                                        {exp.icon && (
                                            <div className="experience-icon">
                                                <img src={exp.icon} alt={exp.company} />
                                            </div>
                                        )}
                                        <div className="expand-icon">
                                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>
                                </div>
                                <ul className={`responsibilities ${isExpanded ? 'show' : 'hide'}`}>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;
