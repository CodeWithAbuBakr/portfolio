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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  position: relative;
  z-index: 1;

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
  min-height: 300px;
`;

const StyledCyberCard = styled(CyberCard)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  background: rgba(10, 25, 47, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(46, 213, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 40px ${({ glowcolor }) => glowcolor}80;
    
    &::before {
      opacity: 0.3;
    }
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
      ${({ glowcolor }) => glowcolor} 0%,
      transparent 50%,
      ${({ glowcolor }) => glowcolor} 100%
    );
    opacity: 0.1;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 1rem;
    border: 1px solid ${({ glowcolor }) => glowcolor}30;
    transition: transform 0.3s ease;
    
    @media (min-width: 768px) {
      height: 180px;
    }
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: ${({ glowcolor }) => glowcolor};
    font-family: 'Space Mono', monospace;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => $expanded ? 'unset' : '3'};
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0.5rem 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.95rem;
  }

  div {
    opacity: ${({ $expanded }) => $expanded ? 1 : 0};
    max-height: ${({ $expanded }) => $expanded ? '500px' : '0'};
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;

    span {
      background: linear-gradient(45deg, rgba(46, 213, 255, 0.15), rgba(100, 255, 218, 0.15));
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.75rem;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(46, 213, 255, 0.1);
      color: #64ffda;
      font-family: 'Space Mono', monospace;
      
      @media (min-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const Header = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  
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

const NeuralBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(
      90deg,
      rgba(46, 213, 255, 0.05) 0px,
      rgba(46, 213, 255, 0.05) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(46, 213, 255, 0.05) 0px,
      rgba(46, 213, 255, 0.05) 1px,
      transparent 1px,
      transparent 60px
    );
`;

const projects = [
  {
    title: 'Neural Excel Optimizer',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: '/ai-excel.jpg',
    tech: ['NLP', 'Solidity', 'BERT', 'IPFS', 'Azure AI'],
    glowColor: '#2ed5ff'
  },
  {
    title: 'Cognitive Doc Security',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: '/ai-docs.jpg',
    tech: ['NLP', 'Solidity', 'BERT', 'IPFS', 'Azure AI'],
    glowColor: '#64ffda'
  },
  {
    title: 'Smart Presentation AI',
    description: 'Generative AI assistant for automated slide creation with style transfer capabilities and real-time content suggestions powered by GPT-4...',
    imgLink: '/ai-slides.jpg',
    tech: ['GPT-4', 'DALL-E', 'React', 'Node.js', 'Azure'],
    glowColor: '#ff7dff'
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <Section id="projects">
      <NeuralBackground />
      
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>AI Innovations</span>
      </Header>

      <Grid>
        {projects.map((project, index) => (
          <CardContainer
            key={project.title}
            transition={{ delay: index * 0.15, duration: 0.6 }}
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
                loading="lazy"
                onError={(e) => e.target.src = '/ai-fallback.jpg'}
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

      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: `radial-gradient(circle at 50% 50%, 
            ${projects[0].glowColor}22, 
            ${projects[1].glowColor}22,
            ${projects[2].glowColor}22)`,
          pointerEvents: 'none'
        }}
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </Section>
  );
}