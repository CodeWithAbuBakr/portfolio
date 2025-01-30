// components/SkillMeter.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MeterContainer = styled.div`
  margin: 1.5rem 0;
  position: relative;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-family: 'Space Mono', monospace;
`;

const SkillName = styled.span`
  color: #88f3ff;
  font-size: 0.9rem;
  text-shadow: 0 0 8px rgba(136, 243, 255, 0.2);
`;

const SkillLevel = styled.span`
  color: #00ff88;
  font-size: 0.9rem;
`;

const MeterBar = styled.div`
  height: 10px;
  background: rgba(46, 213, 255, 0.05);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 8px rgba(46, 213, 255, 0.1);

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
      rgba(46, 213, 255, 0.05) 50%,
      transparent 100%
    );
    animation: scan 3s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #2ed5ff, #00ff88);
  position: relative;
  width: ${props => props.$width}%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 4px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
`;

const Glow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(46, 213, 255, 0.2), transparent);
  opacity: 0;
`;

export default function SkillMeter({ skill, level, delay }) {
  return (
    <MeterContainer>
      <SkillLabel>
        <SkillName>{skill}</SkillName>
        <SkillLevel>{level}%</SkillLevel>
      </SkillLabel>
      <MeterBar>
        <Progress
          $width={level}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay }}
        >
          <Glow
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 0.4, x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </Progress>
      </MeterBar>
    </MeterContainer>
  );
}