import React from 'react';
import './FloatingBar.css';
import { useNavigate } from 'react-router-dom';

function FloatingBar() {
    const navigate = useNavigate();

    // Function to handle the navigation and scrolling
    const handleClick = (sectionName, targetId) => {
        //navigate(sectionName); // Navigate to the specific page

        // Wait a bit to ensure the navigation is completed
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {

            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Adjust the delay as needed
    };

    return (
        <div className="floating-bar">
            <nav>
                <a
                    onClick={() => handleClick("/home", "About")}
                    
                >
                    About
                </a>
                <a
                    onClick={() => handleClick("/projects", "experience")}
                    
                >
                   Experience
                </a>
                <a
                    onClick={() => handleClick("/skills", "skills")}
                  
                >
                    Skills
                </a>
                <a
                    onClick={() => handleClick("/home", "projects")}
                    
                >
                    Projects
                </a>
            </nav>
        </div>
    );
}

export default FloatingBar;
