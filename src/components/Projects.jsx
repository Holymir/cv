// src/components/Projects.jsx

import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaChartLine, FaNewspaper, FaBrain, FaClock, FaWallet, FaLayerGroup, FaFlask, FaLink } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

function Projects() {
    const projects = [
        {
            name: "LiquidArc",
            tagline: "DeFi Analytics, Simplified",
            description: "A DeFi portfolio analytics dashboard that aggregates liquidity positions, yield opportunities, and strategy simulations across multiple chains. Designed for DeFi users who want a clear, non-custodial view of their on-chain portfolio without connecting a wallet to yet another protocol.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "viem", "Solana Web3.js", "Recharts", "Docker"],
            features: [
                "LP position tracking across 5 major chains with real-time pricing",
                "Yield discovery engine covering 20+ DeFi protocols",
                "Built-in strategy simulator for impermanent loss and APY projections",
                "Multi-chain support spanning EVM networks and Solana",
                "Fully non-custodial — read-only address monitoring, no wallet signatures required"
            ],
            links: {
                live: "https://liquidarc.app",
                github: "https://github.com/Holymir/liquid-arc"
            },
            highlights: [
                { icon: FaWallet, text: "Portfolio Tracking" },
                { icon: FaLayerGroup, text: "Multi-Chain Support" },
                { icon: FaFlask, text: "Strategy Simulator" },
                { icon: FaLink, text: "20+ Protocol Integrations" }
            ]
        },
        {
            name: "SentiFi AI",
            tagline: "Cryptocurrency Sentiment Intelligence Platform",
            description: "Full-stack AI-powered platform that aggregates and analyzes cryptocurrency news sentiment in real-time. Leverages OpenAI GPT-5 for intelligent classification, helping traders and investors understand market dynamics through data-driven insights.",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "OpenAI GPT-5", "Tailwind CSS", "Recharts", "Vite"],
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
