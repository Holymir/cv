// src/components/Contacts.js

import React from "react";
import "./Contacts.css";
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub} from "react-icons/fa";

function Contacts() {
    return (
        <section id='contacts' className='contacts'>
            <h2 className='section-title'>Contact Information</h2>
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
        </section>
    );
}

export default Contacts;
