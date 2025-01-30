import styled from 'styled-components';
import CyberCard from '../components/CyberCard';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Section = styled.section`
  position: relative;
  padding: 6rem 1rem 0rem;
  background: transparent;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem 0rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
  align-items: flex-start;

  @media (min-width: 1024px) {
    gap: 2.5rem;
    padding: 2rem;
  }
`;

const CardContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "0px 0px -100px 0px" }
}))`
  position: relative;
  flex: 1 1 300px;
  max-width: 100%;
  display: flex;
  max-height: ${({ $expanded }) => $expanded ? '1000px' : '200px'};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 8px;
`;

const StyledCyberCard = styled(CyberCard)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  background: rgba(10, 25, 47, 0.85) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(46, 213, 255, 0.15);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 40px ${({ $glowColor }) => $glowColor}80;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ $glowColor }) => $glowColor} 0%, // Fixed
      transparent 50%,
      ${({ $glowColor }) => $glowColor} 100% // Fixed
    );
    opacity: 0.1;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid ${({ $glowColor }) => $glowColor}30; // Fixed
    transition: transform 0.3s ease;
    flex-shrink: 0;
    
    @media (min-width: 768px) {
      height: 140px;
    }
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ $glowColor }) => $glowColor}; // Fixed
    font-family: 'Space Mono', monospace;
    flex-shrink: 0;
    
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => $expanded ? 'unset' : '3'};
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0.5rem 0;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    flex-grow: 1;
  }

  div {
    opacity: ${({ $expanded }) => $expanded ? 1 : 0};
    max-height: ${({ $expanded }) => $expanded ? '500px' : '0'};
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
    overflow: hidden;
    flex-shrink: 0;

    span {
      background: linear-gradient(45deg, rgba(46, 213, 255, 0.15), rgba(100, 255, 218, 0.15));
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.7rem;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(46, 213, 255, 0.1);
      color: #64ffda;
      font-family: 'Space Mono', monospace;
      
      @media (min-width: 768px) {
        font-size: 0.75rem;
      }
    }
  }
`;

const projects = [
  {
    id: 1,
    title: 'Neural Excel Optimizer',
    description: 'Deep learning-powered spreadsheet analysis with predictive modeling and automated insights generation using TensorFlow integration...',
    imgLink: '/ai-excel.jpg',
    glowColor: '#2ed5ff'
  },
  {
    id: 2,
    title: 'Cognitive Doc Security',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: '/ai-docs.jpg',
    glowColor: '#64ffda'
  },
  {
    id: 3,
    title: 'Smart Presentation AI',
    description: 'Generative AI assistant for automated slide creation with style transfer capabilities and real-time content suggestions powered by GPT-4...',
    imgLink: '/ai-slides.jpg',
    glowColor: '#00ff88'
  },
  {
    id: 4,
    title: 'Neural Excel Optimizer',
    description: 'Deep learning-powered spreadsheet analysis with predictive modeling and automated insights generation using TensorFlow integration...',
    imgLink: '/ai-excel.jpg',
    glowColor: '#ffd700'
  },
  {
    id: 5,
    title: 'Cognitive Doc Security',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: '/ai-docs.jpg',
    glowColor: '#ff7d45'
  },
  {
    id: 6,
    title: 'Smart Presentation AI',
    description: 'Generative AI assistant for automated slide creation with style transfer capabilities and real-time content suggestions powered by GPT-4...',
    imgLink: '/ai-slides.jpg',
    glowColor: '#ff7dff'
  },
];


const Header = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  
  &::after {
    position: absolute;
    right: -10px;
    top: -15px;
    font-size: 1.5rem;
    filter: drop-shadow(0 0 10px #64ffda);
  }

  span {
    background: linear-gradient(45deg, #2ed5ff, #64ffda);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(46, 213, 255, 0.5);
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;




export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardClick = (index) => {
    setExpandedIndex(prev => prev === index ? -1 : index);
  };

  return (
    <Section id="projects">
      
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>AI PROJECTS</span>
      </Header>

      <Grid>
        {projects.map((project, index) => (
          <CardContainer
            key={project.id}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onClick={() => handleCardClick(index)}
            layout
            $expanded={expandedIndex === index}
          >
            <StyledCyberCard 
              title={project.title}
              glowColor={project.glowColor}
              $expanded={expandedIndex === index}
            >
              <img 
                src={project.imgLink} 
                alt={project.title}
                loading="lazy"
                onError={(e) => e.target.src = '/ai-fallback.jpg'}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <span key="tensorflow">TensorFlow</span>
                <span key="gpt4">GPT-4</span>
                <span key="blockchain">Blockchain</span>
              </div>
            </StyledCyberCard>
          </CardContainer>
        ))}
      </Grid>
    </Section>
  );
}