import React from "react";
import "./Certificates.css";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
    const certificates = [
        {
            title: "Blockchain Dev Camp",
            organization: "SoftUni",
            date: "February 2018",
            url: "https://softuni.bg/Certificates/Details/52845/afdffda8",
            highlight: true
        },
        {
            title: "Java Advanced",
            organization: "SoftUni",
            date: "September 2017",
            url: "https://softuni.bg/Certificates/Details/24006/0d1a5d46"
        },
        {
            title: "Software Technologies",
            organization: "SoftUni",
            date: "July 2017",
            url: "https://softuni.bg/Certificates/Details/22713/c35e7d4d"
        },
        {
            title: "Programming Fundamentals - Extended",
            organization: "SoftUni",
            date: "May 2017",
            url: "https://softuni.bg/Certificates/Details/23155/b9067bd4"
        },
        {
            title: "Programming Basics",
            organization: "SoftUni",
            date: "March 2017",
            url: "https://softuni.bg/certificates/details/19484/3625cb68"
        },
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certificate-grid">
                    {certificates.map((certificate, index) => (
                        <a
                            key={index}
                            href={certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`certificate-card ${certificate.highlight ? 'highlight' : ''}`}
                        >
                            <div className="certificate-icon">
                                <FaAward />
                            </div>
                            <div className="certificate-content">
                                <h3 className="certificate-title">{certificate.title}</h3>
                                <p className="certificate-organization">{certificate.organization}</p>
                                <p className="certificate-date">{certificate.date}</p>
                            </div>
                            <div className="certificate-link-icon">
                                <FaExternalLinkAlt />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
