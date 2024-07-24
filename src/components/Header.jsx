// src/components/Header.js

import React from "react";
import "./Header.css"; // Importing the CSS file for styling

import "./Contacts.css";
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub} from "react-icons/fa";

function Header() {
    return (
        <header className={"header"}>
            <div className='container'>
                <h1>Ventsislav Tsochev</h1>
                <p>Blockchain Developer</p>
                <nav>
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
                    <a href='#skills'>Skills & Technologies</a>
                    <a href='#certificates'>Sertificates</a>
                </nav>
            </div>
            <div className='contacts'>
                <div className='contact-list'>
                    <div className='contact-item'>
                        <FaEnvelope />
                        <p>Email: Ven.Tsochev@gmail.com</p>
                    </div>
                    <div className='contact-item'>
                        <FaPhone />
                        <p>Phone: +359 (882) 800-508</p>
                    </div>
                    <div className='contact-item'>
                        <FaMapMarkerAlt />
                        <p>Sofia, Bulgaria</p>
                    </div>
                    <div className='contact-item'>
                        <FaLinkedin />
                        <p>linkedin.com/in/ventsislav-tsochev</p>
                    </div>
                    <div className='contact-item'>
                        <FaGithub />
                        <p>github.com/Holymir</p>
                    </div>
                    {/* Add more contact information as needed */}
                </div>
            </div>
        </header>
    );
}

export default Header;
