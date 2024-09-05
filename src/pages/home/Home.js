import React from 'react';
import './Home.css';
import LinkBar from '../../component/linksBar/linkBar';
import NextArrow from '../../component/nextArrow/nextArrow';
function Home() {
    return (
        <div classname="home">

        <div className="content">
            <section id="About">
                <h1>ROHAN PRASAD</h1>
                <h2>Upcoming Full-Stack Engineer</h2>
                <p>
                Hi, I'm Rohan Prasad, a Computer Science student at the University of Florida with a minor in Statistics.
                I'm constantly fascinated in creating tools to help others which has led me to explore everything from interactive classroom tools for students to  machine learning applications in classical studies. 

                </p>
                <p>
                 
                 I'm primarily interested in full-stack development and data science, and I'm always looking for new opportunities to learn and grow. 
                 I have experience with languages such as Python, Java, and JavaScript, and frameworks such as React and Node.js.
                 </p>
                    

                <div className = "auxiliary-content">
                    <LinkBar />
                    <NextArrow />
                </div>

            </section>
        </div>
    </div>
    );
}

export default Home;