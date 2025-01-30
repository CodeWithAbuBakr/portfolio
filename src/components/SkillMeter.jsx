// components/SkillMeter.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MeterContainer = styled.div`
  margin: 1.25rem 0;
  position: relative;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-family: 'Space Mono', monospace;
  align-items: center;
`;

const SkillName = styled.span`
  color: ${props => props.$color || '#64ffda'};
  font-size: 0.95rem;
  text-shadow: 0 0 10px ${props => `${props.$color}30` || 'rgba(100, 255, 218, 0.3)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const SkillLevel = styled.span`
  color: ${props => props.$color || '#00ff88'};
  font-size: 0.95rem;
  text-shadow: 0 0 8px ${props => `${props.$color}30` || 'rgba(0, 255, 136, 0.3)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const MeterBar = styled.div`
  height: 12px;
  background: ${props => `${props.$color}15` || 'rgba(70, 70, 70, 0.1)'};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    inset 0 0 10px ${props => `${props.$color}20` || 'rgba(255, 125, 69, 0.1)'},
    0 2px 4px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      transparent 0%,
      ${props => `${props.$color}30` || 'rgba(255, 215, 0, 0.1)'} 50%,
      transparent 100%
    );
    animation: scan 2.5s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (max-width: 768px) {
    height: 10px;
  }
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props => props.$color || '#2ed5ff'},
    ${props => `${props.$color}cc` || '#00ff88'}
  );
  position: relative;
  width: ${props => props.$width}%;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 3px;
    background: ${props => `${props.$color}cc` || 'rgba(255, 215, 0, 0.8)'};
    box-shadow: 0 0 20px ${props => props.$color || 'rgba(255, 215, 0, 0.5)'};
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 6px;
    box-shadow: 0 0 25px ${props => props.$color || 'rgba(255, 215, 0, 0.8)'};
  }
`;

const Glow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    ${props => `${props.$color}40` || 'rgba(46, 213, 255, 0.2)'},
    transparent
  );
  opacity: 0;
`;

export default function SkillMeter({ skill, level, delay, color = '#2ed5ff' }) {
  return (
    <MeterContainer>
      <SkillLabel>
        <SkillName $color={color}>{skill}</SkillName>
        <SkillLevel $color={color}>{level}%</SkillLevel>
      </SkillLabel>
      <MeterBar $color={color}>
        <Progress
          $width={level}
          $color={color}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
        >
          <Glow
            $color={color}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 0.4, x: '100%' }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: 0.5,
              ease: 'linear'
            }}
          />
        </Progress>
      </MeterBar>
    </MeterContainer>
  );
}