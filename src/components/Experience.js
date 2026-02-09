import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceSection = styled.section`
  padding: 8rem 2rem;
  background: #f8fafc;
  color: #1a202c;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #1a202c;
  margin-bottom: 3rem;
  
  &::after {
    background: linear-gradient(90deg, #3182ce, #2b6cb0);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Role = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #2b6cb0, #3182ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #718096;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '🗓️';
  }
`;

const Description = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #4a5568;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #3182ce;
    }
  }
`;


const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const Tag = styled.span`
  background: rgba(49, 130, 206, 0.1);
  color: #2b6cb0;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(49, 130, 206, 0.2);
    transform: translateY(-2px);
  }
`;


const Experience = () => {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Neural Dynamics of Control Laboratory",
      period: "August 2025 – Present",
      achievements: [
        "Engineered end-to-end data ETL pipeline for large-scale EEG and survey datasets",
        "Designed validation systems for data integrity and consistency across multiple sources",
        "Implemented rigorous data workflows to support streamlining research workflows"
      ],
      tags: ["Machine Learning", "Data Engineering", "Research"]
    },
    {
      role: "Software Engineer Intern",
      company: "ATC Co",
      period: "May 2025 – August 2025",
      achievements: [
        "Developed full-stack client dashboard for centralizing product tracking",
        "Helped improve backend performance and improved UI responsiveness",
      ],
      tags: ["Full-Stack Development", "Startup", "Databases"]
    },
    {
      role: "Research Assistant",
      company: "University of Florida",
      period: "August 2022 – December 2023",
      achievements: [
        "Built data-processing pipeline for 10,000+ complex sentences",
        "Improved sentiment analysis accuracy by 14%",
        "Co-authored paper in Oxford Digital Scholarship"
      ],
      tags: ["Natural Language Processing", "Data Science"]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <Title>Experience</Title>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index}>
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Period>{exp.period}</Period>
              <Description>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </Description>
              <Tags>
                {exp.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 