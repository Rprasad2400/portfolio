import React from 'react';
import styled, { keyframes } from 'styled-components';
import flash_logo from '../assets/images/real_logo.png';

import knight from '../assets/images/knight.png';
import cars from '../assets/images/cars_logo.png';


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: white;
  color: #1a202c;
  font-family: 'Inter', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #1a202c;
  font-weight: 700;
  
  &::after {
    background: linear-gradient(90deg, #3182ce, #2b6cb0);
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
`;

const ProjectCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  position: relative;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: rgba(49, 130, 206, 0.1);
  color: #2b6cb0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #2b6cb0;
  text-decoration: none;
  font-weight: 500;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3182ce;
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Damaged Car Predictor",
      tech: ["Computer Vision", "KNN", "Data Mining", "Qwen VLM"],
      description: "Developing an in-progress project utilizing the Qwen Vision Language Model (VLM) to analyze Copart vehicle auction data for predictive analytics. Implementing a hybrid KNN-CNN framework for price prediction.",
      image: cars,
      link: "#"
    },
    {
      title: "FlashyFlashcards",
      tech: ["React.js", "Node.js", "MongoDB", "Render"],
      description: "Full-stack application for enhanced studying with features for spaced-repetition algorithms, progress tracking, and push notifications. Launched on Render with 100+ active users.",
      image: flash_logo,
      link: "https://flashcardapp-wlsx.onrender.com/"
    },
    {
      title: "Test for Chivalry",
      tech: ["JavaScript", "Google Cloud API", "CSS", "HTML"],
      description: "1st Place winner among 1000+ participants in Google Cloud Category. Email sentiment analysis tool using JavaScript and RESTful API calls to Google Cloud API.",
      image: knight,
      link: "https://alexfprowe.com/Chivalry/"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Featured Projects</Title>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectTech>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink href={project.link}>View Project</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectList>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 