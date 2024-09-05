import React from 'react';
import Card from '../../component/Card/Card'
import './Projects.css';
import { useState } from 'react';
import Modal from '../../component/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import chivalryImage from '../../assets/images/cardImages/Chivalry.png'; 
import caasmImage from '../../assets/images/cardImages/casmm_logo.png';
import tracingImage from '../../assets/images/cardImages/tracing.jpg';
import hellenistic from '../../assets/images/cardImages/hellenistic.jpg';
function Projects() {


    const navigate = useNavigate();

    const onClickCard = () => {
        navigate('/projects/1');
        
    };

    const cards = [
        {
            title: 'Test for Chivalry',

            description: "Created a sentiment analysis tool using Google Cloud API that evaluates email content, providing a comprehensive sentiment score through a user-friendly interface built with JSON and HTML.",
            image: chivalryImage,
            link : 'https://github.com/Rprasad2400/Chivalry',
             },
        {
            title: 'Tracing Race and Inequality with AI',
            image: tracingImage,
            description: 'Developed complex datasets to train sentiment analysis models, focusing on race and inequality in classical texts, contributing to a publication in Digital Scholarship in the Humanities.',
        },
        {
            title: 'Classifying Relationships in Classical Texts',
            image: hellenistic,
            description: ' Implemented spaCy and TensorFlow to build an NLP model that extracts semantic relationships across thousands of classical texts, involving rigorous model training and data analysis.',
        },
        {
            title: 'CASMM',
            image: caasmImage,
            link: 'https://github.com/STEM-C/CaSMM',
            description: ' Led the development of an interactive tool for administering tests and quizzes, enhancing the learning experience by creating a streamlined interface using React, Node.js, and a Strapi backend.',
        },
        {
            title: 'Anti-Procasination App',
            link: 'https://github.com/gabjc/Advanced-To-Do',
            description: 'A web application  and Chrome extensions for students to manage their progress on tasks and assignments, using React, Node.js and Dart to create a user-friendly interface.',
        },
    ];

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="projects-content">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} link= {card.link} title={card.title} description={card.description} onClick={onClickCard}/>
            ))}
            </div>
            
        </div>
       
    );
}

export default Projects;
