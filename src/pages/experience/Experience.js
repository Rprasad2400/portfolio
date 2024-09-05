import React from 'react';
import classNames from './Experience.module.css';  
import './Experience.css';

function ExperienceCard({ date, title, items }) { // Destructure the props
    return (
        <div className={classNames.experienceCard}>
            <hr></hr>
            <div className={classNames.experienceDate}>
                <p>{date}</p>
            </div>
            
            <div className={classNames.experienceDescription}>
                <br />

               <p className={classNames.exprTitle}>{title}</p>
               <hr/>
                <ul className={classNames.exprContent}> {/* Removed the <p> wrapping <ul> */}
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Experience() {
    const experience = [
        {
            date: '2022-2023',
            title: 'Undergraduate Research Assistant',
            items: [
                'Performed sentiment analysis on ancient texts to discover more about the ancient world',
                'Worked on scraping and preprocessing text data to remove irregularities and analyze sentiment using Pandas, XML and spacy',
                'Collaborated with teammates, focusing on analyzing texts and refining the model for sentiment analysis within ancient texts.'
            ],
        },
        {
            date: '2023-2024',
            title: 'AI University Scholar',
            items: [
                'Selected through a competitive process of 200 students to participate in the program.',
                'Led a full research project on relationships in classical texts under professor guidance.',
                'Conducted rigorous research applying NLP (Natural Language Processing) techniques to classical texts, uncovering relationships in ancient literature'
            ],
        },
        {
            date: '2023-Present',
            title: 'Teacher Assistant',
            items: [
                'Led study sessions and provided one-on-one support to help students understand key Operating Systems concepts like process scheduling and memory management.',
                'Developed additional resources and review sessions to clarify difficult topics and improve student performance.',
                'Broke down challenging concepts and hosted review sessions together'
            ],
        },
    ];

    return (
        <div className="experience-main-container">
            <h1 className={classNames.exprienceTitle}>Experience</h1>
            {experience.map((exp, index) => (
                <ExperienceCard 
                    key={index} 
                    date={exp.date} 
                    title={exp.title} 
                    items={exp.items} // Passing the items array
                />
            ))}
        </div>
    );
}

export default Experience;
