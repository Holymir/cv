// src/components/About.js

import React from "react";
import "./About.css"; // Importing the CSS file for styling
import profileImage from "../assets/profile.jpg"; // Import your profile image

function About() {
    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className='about-image'>
                    <img src={profileImage} alt='Profile' className='profile-img' />
                </div>
                <div className='about-text'>
                    <h2>Hi, I am Ventsi</h2>
                    <h3>A passionate blockchain developer for the past 6 years</h3>
                    <p className='indent'>
                        I have a background as an Ad Executive in Bulgaria's largest online media, where I later advanced to a Team Leader role.
                    </p>
                    <p>However, I found my true passion in coding while collaborating closely with developers.</p>
                    <p className='indent'>Seeking a fresh challenge, I enrolled in an educational program and began my journey in the technology field.</p>
                    <p>In late 2017, I seized an opportunity to participate in SoftUni's Blockchain Dev Camp, a full-time, one-month educational program.</p>
                    <p>This experience introduced me to cutting-edge blockchain technology, which has since become the focus of my career.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
