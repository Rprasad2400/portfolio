import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Description from './components/Description';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background: #f7fafc;
    overflow-x: hidden;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 4rem;
    color: #1a202c;
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #4a90e2, #63b3ed);
      border-radius: 2px;
    }
  }

  html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }

  section {
    scroll-margin-top: 70px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  main {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>
        <Hero />
        <Description />
        <Education />
       <Experience />
        <Projects />
        
      </main>
    </>
  );
}

export default App;
