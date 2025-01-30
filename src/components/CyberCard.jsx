// components/CyberCard.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
  background: rgba(10, 15, 30, 0.9);
  border: 2px solid ${({ $glowColor }) => $glowColor};
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${({ $glowColor }) => $glowColor}, 
      transparent 50%);
    z-index: -1;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 40px ${({ $glowColor }) => `${$glowColor}33`};
    
    &::before {
      opacity: 0.6;
    }
  }
`;

const Title = styled.h3`
  color: ${({ $glowColor }) => $glowColor};
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 15px ${({ $glowColor }) => `${$glowColor}80`};
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 80px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  background: rgba(0, 40, 80, 0.3);
  color: ${({ theme }) => theme.colors.neonBlue};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.neonBlue};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.neonBlue};
    color: #000;
    transform: scale(1.05);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.neonBlue};
  }
`;

export default function CyberCard({ title, glowColor, children }) {
  const content = React.Children.toArray(children);
  const description = content.find(child => child.type === 'p');
  const techItems = content.find(child => child.type === 'div');

  return (
    <CardWrapper 
      $glowColor={glowColor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Title $glowColor={glowColor}>{title}</Title>
      {description && <Description>{description.props.children}</Description>}
      {techItems && (
        <TechStack>
          {React.Children.map(techItems.props.children, (tech, index) => (
            <TechTag key={tech.key || `tech-${index}`}>
              {tech.props.children}
            </TechTag>
          ))}
        </TechStack>
      )}
    </CardWrapper>
  );
}