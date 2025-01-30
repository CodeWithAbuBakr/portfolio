import styled from 'styled-components';
import CyberCard from '../components/CyberCard';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Section = styled.section`
  position: relative;
  padding: 8rem 2rem 0rem;
  background: transparent;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const CardContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "0px 0px -100px 0px" }
}))`
  position: relative;
  min-height: 300px;
`;

const StyledCyberCard = styled(CyberCard)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px ${({ glowcolor }) => glowcolor}80;
  }

  &:active {
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
    border: 2px solid ${({ glowcolor }) => glowcolor}50;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => $expanded ? 'unset' : '3'};
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 1rem 0;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }

  div {
    opacity: ${({ $expanded }) => $expanded ? 1 : 0};
    max-height: ${({ $expanded }) => $expanded ? '500px' : '0'};
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    span {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      backdrop-filter: blur(5px);
    }
  }
`;

const Header = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  
  &::after {
    content: '✦';
    position: absolute;
    right: -10px;
    top: -10px;
    color: #2ed5ff;
    font-size: 1.2rem;
    filter: drop-shadow(0 0 5px #2ed5ff);
  }

  span {
    background: linear-gradient(45deg, #2ed5ff, #64ffda);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(46, 213, 255, 0.3);
  }
`;

const projects = [
    {
      title: 'AI Excel Analyzer',
      description: 'Machine learning-powered data processing...',
      imgLink: '/addin/Excel.png', // Keep forward slashes
      tech: ['React', 'Python', 'Azure', 'ML', 'Data Visualization'],
      glowColor: '#00ffff'
    },
    {
      title: 'Smart Doc Manager',
      description: 'Blockchain-based document security system...',
      imgLink: '/addin/Outlook.png',
      tech: ['TypeScript', 'Solidity', 'Azure', 'Blockchain', 'IPFS'],
      glowColor: '#ff00ff'
    },
    {
      title: 'Presentation AI',
      description: 'Intelligent PowerPoint assistant...',
      imgLink: '/addin/Powerpoint.png',
      tech: ['React', 'Node.js', 'OpenAI', 'Azure', 'Design'],
      glowColor: '#00ff00'
    },
  ];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <Section id="projects">
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>PREVIOUS PROJECTS</span>
      </Header>

      <Grid>
        {projects.map((project, index) => (
          <CardContainer
            key={`${project.title}-${index}`}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() => setExpandedIndex(prev => prev === index ? -1 : index)}
            layout
          >
            <StyledCyberCard 
              title={project.title}
              glowColor={project.glowColor}
              $expanded={expandedIndex === index}
            >
              <img 
                src={project.imgLink} 
                alt={project.title} 
                onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = '/addin/fallback.png'; // Create a fallback image
                }}
                />
              <p>{project.description}</p>
              <div>
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </StyledCyberCard>
          </CardContainer>
        ))}
      </Grid>
  
        {/* Animated background elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg, 
              ${projects[0].glowColor}33, 
              ${projects[1].glowColor}33)`,
            opacity: 0.1,
            zIndex: 0,
            pointerEvents: 'none' // Add this line
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </Section>
    );
  }