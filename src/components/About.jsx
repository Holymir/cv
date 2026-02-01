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
              I started in tech working as an Advertising Operations Executive
              at Bulgaria's largest online media company. While managing
              campaigns and leading a team, I got interested in the technical
              side through working with developers.
            </p>
            <p>
              In 2017, I made the switch to programming. I completed SoftUni's
              Blockchain Dev Camp and got hooked on blockchain technology.
            </p>
            <p>
              Since then, I've focused on Solidity development, smart contract
              security, and building DeFi protocols. I've worked on security
              audits, gas optimization, and integrating blockchain with
              traditional financial systems.
            </p>
            <p>
              Currently, I'm working in fintech, bridging crypto assets with
              traditional finance through exchange integrations and custody
              solutions. I'm driven by building secure, efficient solutions that
              actually work in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
