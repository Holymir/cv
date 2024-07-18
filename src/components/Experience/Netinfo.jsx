// src/components/Experience.js

import React from "react";
import "./Experience.css"; // Importing the CSS file for styling
import netinfoIcon from "../../assets/netinfo-icon.png"; // Example: Import an icon

function Netinfo() {
    return (
        <section id='experience' className='experience'>
            <div className='container'>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <h3>Advertising Operations Executive - NetInfo</h3>
                        <p>Jan 2011 - Mar 2016</p>
                        <ul>
                            <li>
                                Oversee the setup, execution, and management of digital advertising campaigns. This includes scheduling, targeting, trafficking,
                                and optimization of ads across various digital platforms (like social media, search engines, and websites).
                            </li>
                            <li>
                                Use ad serving tools to traffic (upload and manage) digital ads to the appropriate websites or platforms. Continuously monitor
                                and adjust campaigns for optimal performance based on pre-defined key performance indicators (KPIs).
                            </li>
                            <li>
                                Work closely with sales and creative teams to ensure that the ad content aligns with both the client's objectives and the
                                platform's specifications.
                            </li>
                            <li>
                                Analyze campaign data to assess performance against goals. Generate reports for internal teams and clients to provide insights
                                and recommendations for improvement.
                            </li>
                            <li>
                                Serve as a point of contact for clients regarding their advertising campaigns. Communicate campaign progress, troubleshoot
                                issues, and address any client concerns.
                            </li>
                            <li>
                                Stay updated on the latest trends in digital advertising and advancements in ad technologies. This includes understanding the
                                evolving landscape of programmatic advertising, data privacy regulations, and changes in ad platform algorithms.
                            </li>
                            <li>
                                Ensure that all ads meet quality standards and comply with relevant laws and regulations, including those related to privacy and
                                data protection.
                            </li>
                            <li>
                                Coordinate with other members of the advertising operations team to ensure a seamless workflow and effective campaign
                                management.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='experience-abstract'>
                    <img src={netinfoIcon} alt='Netinfo' className='abstract-icon' />
                </div>
            </div>
        </section>
    );
}

export default Netinfo;
