import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const EducationSection = styled.section`
  padding: 8rem 2rem;
  background: white;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #3182ce, transparent);
  }
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: 0.3s;
`;

const EducationCard = styled.div`
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(49, 130, 206, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const School = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #2b6cb0, #3182ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.6;
  font-weight: 600;
`;

const Period = styled.p`
  font-size: 1.1rem;
  color: #718096;
  margin-top: 1rem;
  font-weight: 400;
`;

const Location = styled.p`
  font-size: 1.1rem;
  color: #718096;
  font-style: italic;
  margin-top: 0.5rem;
  font-weight: 400;
  
  &::before {
    content: '📍';
    margin-right: 0.5rem;
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <Title>Education</Title>
        <EducationGrid>
          <EducationCard>
            <School>University of Florida</School>
            <Degree>Bachelor of Science in Computer Science</Degree>
            <Degree>Minor in Statistics — GPA: 3.6</Degree>
            <Period>Aug 2021 – May 2025</Period>
            <Location>Gainesville, FL</Location>
          </EducationCard>
          
          <EducationCard>
            <School>Georgia Institute of Technology</School>
            <Degree>Master of Science in Computer Science</Degree>
            <Period>Aug 2025 – May 2027</Period>
            <Location>Atlanta, GA</Location>
          </EducationCard>
        </EducationGrid>
      </Container>
    </EducationSection>
  );
};

export default Education; 