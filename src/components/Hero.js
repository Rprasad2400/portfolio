import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

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

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: #1a202c;
  padding: 2rem;
  margin: 0;
  animation: ${fadeIn} 1s ease-out;
  font-family: 'Inter', sans-serif;
`;

const Name = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #2b6cb0, #3182ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s;
  font-family: 'Inter', sans-serif;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #4a5568;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.6s;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.9s;
`;

const iconHover = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2) ;
  }
  100% {
    transform: scale(1) ;
  }
`;

const IconLink = styled.a`
  color: #2b6cb0;
  font-size: 2.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f8fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  &:hover {
    color: #3182ce;
    animation: ${iconHover} 0.5s ease-in-out;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const arrowDownHover = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ArrowDownContainer = styled.div`

  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

`;


const ArrowDown = styled.a`
  color: #2b6cb0;
  font-size: 2.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${arrowDownHover} 0.5s ease-in-out;
  &:hover {
    color: #3182ce;
    animation: ${arrowDownHover} 0.5s ease-in-out;
    
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Name>Rohan Prasad</Name>
      <Title>Software Engineer & Aspiring ML Researcher</Title>
      <Links>
        <IconLink href="mailto:rohan.prasad00@hotmail.com" aria-label="Email">
          <FaEnvelope />
        </IconLink>
        <IconLink href="https://linkedin.com/in/rohan–prasad" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/Rprasad2400" target="_blank" aria-label="GitHub">
          <FaGithub />
        </IconLink>
      </Links>
      <ArrowDownContainer>
        <ArrowDown href="#about">
          <FaArrowDown />
        </ArrowDown>
      </ArrowDownContainer>
    </HeroContainer>
  );
};

export default Hero; 