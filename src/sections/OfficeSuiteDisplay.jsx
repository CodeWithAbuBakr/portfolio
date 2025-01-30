import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ExcelLogo from './imgs/Excel.png';
import WordLogo from './imgs/Word.png';
import PowerPointLogo from './imgs/Powerpoint.png';
import OutlookLogo from './imgs/Outlook.png';
import GoogleLogo from './imgs/Google.png';
import GoogleDocLogo from './imgs/GoogleDoc.png';
import GoogleSheetsLogo from './imgs/GoogleSheet.png';
import GmailAddon from './imgs/GmailAddon.png';

const neuralPulse = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const dataStream = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const Section = styled.section`
  padding: 8rem 1rem 0rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 30px 30px;
    opacity: 0.5;
    z-index: 0;
  }
`;


const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 0rem 3rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background: transparant;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-size: 20px 20px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;


const AICard = styled.div`
  position: relative;
  background: rgba(18, 18, 36, 0.9);
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid ${props => props.color}33;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px ${props => props.color}33;
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      animation: ${dataStream} 2s linear infinite;
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      ${props => props.color}22 0%, 
      transparent 50%, 
      ${props => props.color}22 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${props => props.color} 50%, 
      transparent 100%
    );
    opacity: 0.5;
  }
`;

const NeuralCore = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      ${props => props.color}22 0%,
      transparent 30%
    );
    animation: ${neuralPulse} 3s infinite;
  }
`;

const AIIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px ${props => props.color});
  position: relative;
  z-index: 1;
  transition: all 0.3s;

  ${AICard}:hover & {
    filter: drop-shadow(0 0 25px ${props => props.color});
  }
`;

const AINode = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(2px);
  animation: ${neuralPulse} 2s infinite;
`;

const AITitle = styled.h3`
  color: ${props => props.color};
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  margin: 0;
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: ${props => props.color};
    margin: 0.5rem auto;
    opacity: 0.5;
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

const OfficeSuiteDisplay = () => {
  const apps = [
    {
      logo: OutlookLogo,
      title: "OUTLOOK ADD-IN",
      color: "#7d6cff",
      nodes: [
        { x: '10%', y: '50%' },
        { x: '90%', y: '50%' },
        { x: '45%', y: '10%' }
      ]
    },
    {
      logo: ExcelLogo,
      title: "EXCEL ADD-IN",
      color: "#26ffdf",
      nodes: [
        { x: '10%', y: '20%' },
        { x: '90%', y: '70%' },
        { x: '30%', y: '85%' }
      ]
    },
    {
      logo: WordLogo,
      title: "WORD ADD-IN",
      color: "#4dc3ff",
      nodes: [
        { x: '15%', y: '75%' },
        { x: '85%', y: '25%' },
        { x: '50%', y: '90%' }
      ]
    },
    {
      logo: PowerPointLogo,
      title: "POWERPOINT ADD-IN",
      color: "#ff64cb",
      nodes: [
        { x: '20%', y: '40%' },
        { x: '80%', y: '60%' },
        { x: '65%', y: '15%' }
      ]
    },
    {
      logo: GoogleLogo,
      title: "GOOGLE ADD-ONS",
      color: "#4dc3ff",
      nodes: [
        { x: '20%', y: '40%' },
        { x: '80%', y: '60%' },
        { x: '65%', y: '15%' }
      ]
    },
    {
      logo: GoogleSheetsLogo,
      title: "GOOGLE SHEETS ADD-ON",
      color: "#26ffdf",
      nodes: [
        { x: '10%', y: '50%' },
        { x: '90%', y: '50%' },
        { x: '45%', y: '10%' }
      ]
    },
    {
      logo: GoogleDocLogo,
      title: "GOOGLE DOCS ADD-ON",
      color: "#7d6cff",
      nodes: [
        { x: '10%', y: '50%' },
        { x: '90%', y: '50%' },
        { x: '45%', y: '10%' }
      ]
    },
    {
      logo: GmailAddon,
      title: "GMAIL ADD-ON",
      color: "#ff64cb",
      nodes: [
        { x: '10%', y: '50%' },
        { x: '90%', y: '50%' },
        { x: '45%', y: '10%' }
      ]
    }
  ];

  return (
    <Section id='types'>
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>ADD-IN TYPES</span>
      </Header>
      <CardGrid>
        {apps.map((app, index) => (
          <AICard key={index} color={app.color}>
            <NeuralCore color={app.color} />
            {app.nodes.map((node, i) => (
              <AINode 
                key={i}
                color={app.color}
                style={{ left: node.x, top: node.y }}
              />
            ))}
            <AIIcon src={app.logo} alt={app.title} color={app.color} />
            <AITitle color={app.color}>{app.title}</AITitle>
          </AICard>
        ))}
      </CardGrid>
    </Section>
  );
};

export default OfficeSuiteDisplay;