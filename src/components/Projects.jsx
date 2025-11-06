// src/components/Projects.jsx

import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaChartLine, FaNewspaper, FaBrain, FaClock } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

function Projects() {
    const projects = [
        {
            name: "SentiFi AI",
            tagline: "Cryptocurrency Sentiment Intelligence Platform",
            description: "Full-stack AI-powered platform that aggregates and analyzes cryptocurrency news sentiment in real-time. Leverages OpenAI GPT-3.5 for intelligent classification, helping traders and investors understand market dynamics through data-driven insights.",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "OpenAI GPT-3.5", "Tailwind CSS", "Recharts", "Vite"],
            features: [
                "Automated hourly news aggregation from CoinDesk, CoinTelegraph, and other major sources",
                "AI-powered sentiment analysis classifying articles as Bullish, Bearish, or Neutral",
                "Interactive dashboard with real-time statistics and trend visualizations",
                "Advanced filtering by sentiment, source, and publication date",
                "Intelligent duplicate detection and persistent data storage"
            ],
            links: {
                live: "https://sentifi.xyz",
                github: "https://github.com/Holymir/crypto-ai-agent"
            },
            highlights: [
                { icon: FaBrain, text: "AI-Powered Analysis" },
                { icon: FaChartLine, text: "Real-Time Analytics" },
                { icon: FaNewspaper, text: "Multi-Source Aggregation" },
                { icon: FaClock, text: "Hourly Updates" }
            ]
        }
    ];

    return (
        <AnimatedSection animationType="fade-up">
            <section id="projects" className="projects">
                <div className="container">
                    <h2 className="section-title">
                        <FaRocket className="title-icon" /> Featured Projects
                    </h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-header">
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-tagline">{project.tagline}</p>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-highlights">
                                    {project.highlights.map((highlight, idx) => {
                                        const Icon = highlight.icon;
                                        return (
                                            <div key={idx} className="highlight-item">
                                                <Icon className="highlight-icon" />
                                                <span>{highlight.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="project-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-tech">
                                    <h4>Technologies:</h4>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-links">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                                        <FaExternalLinkAlt /> Visit Live Site
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                        <FaGithub /> View Source Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}

export default Projects;
