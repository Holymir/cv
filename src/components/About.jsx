// src/components/About.js

import React from "react";
import "./About.css";
import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Ven Tsochev" className="profile-img" />
          </div>
          <div className="about-text">
            <div className="about-summary">
              <p className="highlight">
                Web3 & Fintech Developer with 6+ years of specialized experience
                in smart contract development, security auditing, and
                decentralized application architecture.
              </p>
            </div>
            <p>
              My journey into technology began in an unexpected place—working as
              an Advertising Operations Executive at Bulgaria's largest online
              media company. While managing digital campaigns and leading a
              team, I discovered a deep fascination for the technical side of
              things through my daily collaboration with developers.
            </p>
            <p>
              This passion led me to make a bold career transition in 2017. I
              enrolled in intensive programming courses and quickly progressed
              through fundamentals to advanced software development. The turning
              point came when I participated in SoftUni's Blockchain Dev Camp—a
              rigorous, full-time program that introduced me to the
              transformative potential of blockchain technology.
            </p>
            <p>
              Since then, I've dedicated my career to mastering Blockchain and
              Web3 development, with a particular focus on Solidity, smart
              contract security, and gas optimization. I've architected and
              deployed 10+ production-ready smart contracts, conducted security
              audits protecting millions in digital assets, and contributed to
              innovative DeFi protocols and blockchain infrastructures.
            </p>
            <p>
              What drives me is the intersection of technical excellence and
              real-world impact. I'm committed to writing secure, efficient, and
              scalable blockchain solutions that push the boundaries of what's
              possible in decentralized systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
