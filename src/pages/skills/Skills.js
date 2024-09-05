import React from "react";
import './Skills.css';
import { useState } from 'react';


function VertLine(){
    return <div className="vert-line"></div>
}

function Skills() {

return (
    <div className="skills-container">
        <section id="skills">
            <h1 className="skills-title">Skills</h1>
            <h2>Languages</h2>
            <div className="skills-content">
                <VertLine />
                <p>HTML</p>
                <VertLine />
                <p>CSS</p>
                <VertLine />
                <p>JavaScript</p>
                <VertLine />
                <p>Python</p>
                <VertLine />
                <p>Java</p>
                <VertLine />
                <p>C++</p>
                <VertLine />
                <p>PHP</p>
                <VertLine />
                <p>Ruby</p>
                <VertLine />
            </div>
            <h2>Frameworks</h2>
            <div className="skills-content">
                <VertLine />
                <p>React</p>
                <VertLine />
                <p>Node.js</p>
                <VertLine />
                <p>Express</p>
                <VertLine />
                <p>Django</p>
                <VertLine />
                <p>Laravel</p>
                <VertLine />
            </div>
        </section>
    </div>
);

}

export default Skills;