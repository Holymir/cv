import React from "react";
import "./Certificates.css";

const Certificates = () => {
    const certificates = [
        {title: "Programming Basics", organization: "Softuni", date: "03/2017", url: "https://softuni.bg/certificates/details/19484/3625cb68"},
        {title: "Programming Fundamentals - Extended", organization: "Softuni", date: "05/2017", url: "https://softuni.bg/Certificates/Details/23155/b9067bd4"},
        {title: "Software Technologies", organization: "Softuni", date: "07/2017", url: "https://softuni.bg/Certificates/Details/22713/c35e7d4d"},
        {title: "Java Advanced", organization: "Softuni", date: "09/2017", url: "https://softuni.bg/Certificates/Details/24006/0d1a5d46"},
        {title: "Blockchain Dev Camp", organization: "Softuni", date: "02/2018", url: "https://softuni.bg/Certificates/Details/52845/afdffda8"},
    ];

    return (
        <section id='certificates' className='certificates'>
            <div className='container'>
                <div className='certificate-list'>
                    <h3>Certificates</h3>
                    <div className='certificate-grid'>
                        {certificates.map((certificate, index) => (
                            <div key={index} className='certificate-item'>
                                <strong>
                                    <a href={certificate.url} target='_blank' rel='noopener noreferrer' className='certificate-link'>
                                        {certificate.title}
                                    </a>
                                </strong>
                                <p className='certificate-details'>
                                    {certificate.organization} ({certificate.date})
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
