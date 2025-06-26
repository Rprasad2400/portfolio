import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  z-index: 1000;
  transform: translateY(${props => props.show ? '0' : '-100%'});
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #2d3748;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #3182ce;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #2b6cb0;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navigation = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav show={show}>
      <NavContainer>
        <NavLink href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Home</NavLink>
        <NavLink href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</NavLink>
        <NavLink href="#education" onClick={(e) => {
          e.preventDefault();
          scrollToSection('education');
        }}>Education</NavLink>
        <NavLink href="#projects" onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}>Projects</NavLink>
        <NavLink href="#experience" onClick={(e) => {
          e.preventDefault();
          scrollToSection('experience');
        }}>Experience</NavLink>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 