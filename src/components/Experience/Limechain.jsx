// src/components/Experience.js

import React from "react";
import "./Experience.css"; // Importing the CSS file for styling
import limechainIcon from "../../assets/limechain.png"; // Example: Import an icon

function Limechain() {
    return (
        <section id='experience' className='experience'>
            <div className='container'>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <h3>Blockchain Developer - LimeChain - Blockchain Consulting and Development</h3>
                        <p>Mar 2018 - Sept 2022</p>
                        <ul>
                            <li>Design and implement blockchain protocols and systems.</li>
                            <li>Write, test, and deploy smart contracts.</li>
                            <li>
                                Implement advanced cryptographic techniques and security protocols to protect the blockchain network and its transactions from
                                attacks and fraud.
                            </li>
                            <li>Integrate blockchain technology with existing systems and infrastructure.</li>
                            <li>Stay abreast of the latest developments in blockchain technology.</li>
                            <li>
                                Work closely with other team members, including developers, UX/UI designers, project managers, and stakeholders. Communicate
                                complex blockchain concepts and implications to non-technical team members and stakeholders.
                            </li>
                            <li>
                                Conduct thorough testing of blockchain applications, including unit testing, integration testing, and performance testing, to
                                ensure stability, security, and scalability.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='experience-abstract'>
                    <img src={limechainIcon} alt='Blockchain' className='abstract-icon' />
                </div>
            </div>
        </section>
    );
}

export default Limechain;
