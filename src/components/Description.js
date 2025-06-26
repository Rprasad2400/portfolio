import React, { useEffect, useRef, useState } from 'react';
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

const DescriptionSection = styled.section`
  padding: 8rem 2rem;
  background: #f8fafc;
  color: #1a202c;
  font-family: 'Inter', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: ${props => props.inView ? '0s' : '0.3s'};
`;

const Title = styled.h2`
  color: #1a202c;
  margin-bottom: 3rem;
  font-weight: 700;
  
  &::after {
    background: linear-gradient(90deg, #3182ce, #2b6cb0);
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;

  p {
    margin-bottom: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: #2b6cb0;
  font-weight: 600;
`;

const SkillsSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(49, 130, 206, 0.1);
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsTitle = styled.h4`
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: left;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #3182ce, #2b6cb0);
    border-radius: 1px;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(49, 130, 206, 0.06);
  color: #2d3748;
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid rgba(49, 130, 206, 0.12);
  white-space: nowrap;

  &:hover {
    background: rgba(49, 130, 206, 0.12);
    border-color: rgba(49, 130, 206, 0.2);
    transform: translateY(-1px);
  }
`;

const Description = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'R', 'SQL']
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'SpringBoot', 'TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn']
    },
    tools: {
      title: 'Tools & Technologies',
      skills: ['Docker', 'Git', 'MongoDB', 'PostgreSQL', 'AWS', 'MySQL']
    }
  };

  return (
    <DescriptionSection id="about" ref={sectionRef}>
      <Container inView={isVisible}>
        <Title>About</Title>
        <Content>
          <Text>
            <p>
              I’m a <Highlight> Software Engineer</Highlight> and a aspiring <Highlight>  Machine Learning Researcher</Highlight> whose passionate about applying technology to solve real-world challenges.  </p>
            <p>
              I'm currently pursuing a Master’s in Computer Science at Georgia Tech, where I can combine academic depth with hands-on experience to create practical, impactful solutions. My experiences ranges from developing NLP models for digital humanities to building data processing pipelines for creating AI wildfire prevention systems. 
            </p>
            <p>
             I’m driven by a commitment to constantly improve to greater heights and for building better tools that help solve problems for others.
            </p>
          </Text>
          <SkillsSection>
            {Object.values(skillCategories).map((category) => (
              <SkillCategory key={category.title}>
                <SkillsTitle>{category.title}</SkillsTitle>
                <SkillsGrid>
                  {category.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillsGrid>
              </SkillCategory>
            ))}
          </SkillsSection>
        </Content>
      </Container>
    </DescriptionSection>
  );
};

export default Description; 