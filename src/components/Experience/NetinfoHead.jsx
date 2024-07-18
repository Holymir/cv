// src/components/Experience.js

import React from "react";
import "./Experience.css"; // Importing the CSS file for styling
import nova from "../../assets/nova.webp"; // Example: Import an icon

function NetinfoHead() {
    return (
        <section id='experience' className='experience'>
            <div className='container'>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <h3>Head of Advertising Operations Executive Team - NetInfo</h3>
                        <p>Mar 2016 - Mar 2018</p>
                        <ul>
                            <li>Lead and manage the advertising operations team.</li>
                            <li>Oversee the day-to-day operations of the advertising department.</li>
                            <li>Monitor and analyze advertising campaign performance data. </li>
                            <li>Implement innovative tools and practices to enhance campaign effectiveness and efficiency.</li>
                            <li>Establish and maintain relationships with external vendors, media agencies, and other partners.</li>
                            <li>
                                Collaborate with other departments to ensure a cohesive and integrated approach to the company's overall strategy. This involves
                                working closely with the marketing, sales, product development, and customer service teams.
                            </li>

                            {/* More bullet points */}
                        </ul>
                    </div>
                </div>
                <div className='experience-abstract'>
                    <img src={nova} alt='Blockchain' className='abstract-icon' />
                </div>
            </div>
        </section>
    );
}

export default NetinfoHead;
