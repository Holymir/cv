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
                Fintech & Blockchain Developer with 6+ years in the industry,
                specializing in bridging digital assets with traditional
                financial systems. Currently focused on custodial solutions,
                exchange integrations, and production fintech platform
                development.
              </p>
              <p>
                Background in EVM smart contract development — built a range of
                DeFi and blockchain solutions including token systems, protocol
                integrations, and contract security patterns. Combined with
                hands-on experience leading a team of 10+ in a fast-paced media
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
