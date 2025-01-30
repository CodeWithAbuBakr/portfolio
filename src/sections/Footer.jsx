import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr, TbBinary } from "react-icons/tb";

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
  pointer-events: none;
  opacity: 0.3;
  animation: gridMove 40s linear infinite;
  
  @keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
  }
`;

const StyledFooter = styled(motion.footer)`
  position: relative;
  padding: 1rem 2rem;
  background: transparent;
  border-top: 1px solid rgba(46, 213, 255, 0.2);
  margin-top: 5rem;
  overflow: hidden;
  backdrop-filter: blur(12px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 2rem;
  position: relative;
`;

const SocialLink = styled(motion.a)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(16, 24, 39, 0.6);
  border: 1px solid rgba(46, 213, 255, 0.2);
  color: #ccd6f6;
  font-family: 'Space Mono', monospace;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(46, 213, 255, 0.1);
    border-color: #2ed5ff;
    box-shadow: 0 0 30px rgba(46, 213, 255, 0.2);
    transform: translateY(-3px);
    
    svg {
      filter: drop-shadow(0 0 8px currentColor);
    }
  }

  svg {
    font-size: 1.6rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  /* Brand-specific colors */
  &[href*="github"] { color: #2ed5ff; }
  &[href*="linkedin"] { color: #64ffda; }
  &[href*="upwork"] { color: #00ff88; }
  &[href*="fiverr"] { color: #ffd700; }
  &[href*="stackoverflow"] { color: #ff7d45; }
`;

const NeuralPattern = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  pointer-events: none;
`;

const NeuralInterfaceContainer = styled.div`
  text-align: center;
  padding: 0rem 2rem;
  position: relative;
  z-index: 1;
`;
const NeuralInterfaceContent = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(16, 24, 39, 0.8);
  border-radius: 50px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  font-family: 'Space Mono', monospace;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;

  /* Medium screens (tablets) */
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
  }

  /* Small screens (phones) */
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    border-radius: 20px;
    width: 95%;
    margin: 0 auto;
  }
`;

const BinaryIcon = styled(TbBinary)`
  font-size: 2rem;
  color: #64ffda;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-right: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
`;

const ShieldIcon = styled(RiShieldKeyholeFill)`
  font-size: 2rem;
  color: #00ff88;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-left: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;

const InterfaceText = styled.span`
  color: #2ed5ff;
  font-size: 0.9rem;
  letter-spacing: 2px;
  white-space: nowrap;
  
  /* Medium screens */
  @media (max-width: 768px) {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
  
  /* Small screens */
  @media (max-width: 480px) {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    white-space: normal;
    text-align: center;
    display: inline-block;
    line-height: 1.3;
  }

  /* Hide separator on smallest screens */
  @media (max-width: 360px) {
    &::before {
      content: "NEURAL INTERFACE v2.1.5";
      display: block;
    }
    &::after {
      content: "QUANTUM ENCRYPTION ACTIVE";
      display: block;
    }
    span {
      display: none;
    }
  }
`;

// Updated Footer component
export default function Footer() {
  return (
    <StyledFooter
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <GridOverlay />
      <NeuralPattern />
      
      <SocialGrid>
        <SocialLink
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </SocialLink>
        <SocialLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpwork />
          Upwork
        </SocialLink>
        <SocialLink
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandFiverr />
          Fiverr
        </SocialLink>
        <SocialLink
          href="https://stackoverflow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow />
          Stack Overflow
        </SocialLink>
      </SocialGrid>

      <NeuralInterfaceContainer>
        <NeuralInterfaceContent
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <BinaryIcon />
          <InterfaceText>
            NEURAL INTERFACE v2.1.5 | QUANTUM ENCRYPTION ACTIVE
          </InterfaceText>
          <ShieldIcon />
        </NeuralInterfaceContent>
      </NeuralInterfaceContainer>
    </StyledFooter>
  );
}