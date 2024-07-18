// src/components/Header.js

import React from "react";
import "./Header.css"; // Importing the CSS file for styling

function Header() {
    return (
        <header className={"header"}>
            <div className='container'>
                <h1>Ventsislav Tsochev</h1>
                <p>Blockchain Developer</p>
                <nav>
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
                    <a href='#skills'>Skills</a>
                    <a href='#contacts'>Contacts</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
