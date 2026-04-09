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
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const experiences = [
    {
      title: "Fintech & Java Developer",
      company: "MM Fintech",
      companyDescription: "Financial Technology Solutions",
      period: "Nov 2024 - Present (1 year)",
      icon: null, // Add MM Fintech logo if available
      responsibilities: [
        <>Built <strong>Java Spring Boot</strong> microservices for cryptocurrency exchange integrations (<strong>Kraken</strong>, <strong>Binance</strong>), handling high-volume concurrent trading operations with sub-second response times</>,
        <>Developed <strong>Fireblocks</strong> custody and <strong>FBO</strong> integrations with webhook-driven transaction lifecycle tracking, status reconciliation, and secure digital asset transfers across multiple blockchain networks</>,
        <>Designed concurrent API layer for order execution and real-time market data streaming across multiple exchange platforms</>,
        <>Managed database migrations and <strong>PostgreSQL</strong> query optimization for trading pair configurations and transaction records</>,
      ],
    },
    {
      title: "Blockchain Developer",
      company: "LimeChain",
      companyDescription: "Blockchain Consulting and Development",
      period: "Mar 2018 - Sept 2022 (4 years, 6 months)",
      icon: limechainIcon,
      responsibilities: [
        <>Developed and deployed smart contract systems on <strong>Ethereum</strong>, <strong>Polygon</strong>, and <strong>EVM-compatible chains</strong> for enterprise clients with high-security requirements</>,
        <>Built 10+ production smart contracts in <strong>Solidity</strong> with gas optimization techniques, reducing on-chain costs for end users</>,
        <>Performed security audits and implemented cryptographic protocols (<strong>ECDSA</strong>, <strong>Merkle trees</strong>), identifying critical vulnerabilities and protecting <strong>$10M+</strong> in digital assets</>,
        <>Set up testing and deployment infrastructure using <strong>Hardhat</strong> and <strong>Truffle</strong> with <strong>CI/CD</strong> pipelines</>,
      ],
      projects: [
        {
          name: "CUDOS — Cosmos Smart Contracts & Dev Tools",
          tech: "Rust",
          techKey: "rust",
          description: "CosmWasm smart contracts and developer tooling for CUDOS, a custom Cosmos-based blockchain.",
        },
        {
          name: "Merkle Tree Reward Distribution",
          tech: "Go",
          techKey: "go",
          description: "On-chain Merkle tree-based reward token distribution system enabling efficient claim verification for token holders.",
        },
        {
          name: "Ethereum Smart Contract Suite",
          tech: "Node.js · Solidity",
          techKey: "nodejs",
          description: "End-to-end smart contract development across the Ethereum network — deployment scripts, testing, and integrations using Node.js alongside Solidity.",
        },
      ],
    },
    {
      title: "Head of Advertising Operations",
      company: "NetInfo",
      companyDescription: "Bulgaria's Largest Online Media",
      period: "Mar 2016 - Mar 2018 (2 years)",
      icon: nova,
      responsibilities: [
        <>Led a team of <strong>8+ specialists</strong>, implementing process optimization and training programs that increased productivity by 40%</>,
        <>Directed <strong>$2M+</strong> annual advertising revenue across programmatic, display, and video campaigns, exceeding quarterly targets by 15–20%</>,
        <>Drove data-driven campaign optimization using <strong>Google Analytics</strong> and <strong>Adobe Analytics</strong>, improving ROI by 25% and conversion rates by 30%</>,
        <>Built automation solutions that streamlined ad trafficking, reducing manual tasks by 50%</>,
        <>Managed strategic partnerships with advertising networks, <strong>DSPs</strong>, and media agencies, expanding revenue channels</>,
      ],
    },
    {
      title: "Advertising Operations Executive",
      company: "NetInfo",
      companyDescription: "Bulgaria's Largest Online Media",
      period: "Jan 2011 - Mar 2016 (5 years, 2 months)",
      icon: netinfoIcon,
      responsibilities: [
        <>Executed full-cycle digital advertising campaigns across <strong>Google Ads</strong>, <strong>Facebook Ads</strong>, and programmatic platforms, managing <strong>$500K+</strong> in annual ad spend</>,
        <>Optimized campaign performance using <strong>DFP (DoubleClick for Publishers)</strong> and <strong>AdWords</strong>, exceeding KPI benchmarks by 15–20% and reducing CPA by 25%</>,
        <>Partnered with sales, creative, and technical teams to develop high-converting ad creatives, improving CTR by 35%</>,
        <>Managed portfolio of <strong>20+ enterprise clients</strong> as primary technical contact, improving client retention from 70% to 95%</>,
        <>Ensured <strong>GDPR</strong> and <strong>IAB</strong> compliance across all campaigns and platform-specific policies</>,
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <div
                key={index}
                className={`experience-item ${isExpanded ? "expanded" : "collapsed"}`}
              >
                <div
                  className="experience-header"
                  onClick={() => toggleExpand(index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === "Enter" && toggleExpand(index)}
                >
                  <div className="experience-title-section">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      {exp.companyDescription && (
                        <span className="company-description">
                          {" "}
                          - {exp.companyDescription}
                        </span>
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
                <ul
                  className={`responsibilities ${isExpanded ? "show" : "hide"}`}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                {exp.projects && exp.projects.length > 0 && (
                  <div className={`sub-projects ${isExpanded ? "show" : "hide"}`}>
                    <p className="sub-projects-label">Notable Projects</p>
                    <div className="sub-projects-grid">
                      {exp.projects.map((proj, pidx) => (
                        <div key={pidx} className="sub-project-card">
                          <span className={`tech-badge tech-${proj.techKey}`}>{proj.tech}</span>
                          <p className="sub-project-name">{proj.name}</p>
                          <p className="sub-project-desc">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
