'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border: 1px solid ${({ $glowColor }) => $glowColor};
    box-shadow: 0 0 25px ${({ $glowColor }) => `${$glowColor}30`};
  }
`;

const Title = styled.h3`
  color: #ccd6f6;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px ${({ $glowColor }) => $glowColor}80;
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  background: rgba(0, 40, 80, 0.3);
  color: ${({ $glowColor }) => $glowColor};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid ${({ $glowColor }) => `${$glowColor}30`};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $glowColor }) => $glowColor};
    color: #000;
    transform: scale(1.05);
    box-shadow: 0 0 15px ${({ $glowColor }) => $glowColor};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

`;

export default function CyberCard({ 
  title, 
  glowColor, 
  image, 
  description, 
  techItems 
}) {
  return (
    <CardWrapper 
      $glowColor={glowColor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

{image && (
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
      )}

      <Title $glowColor={glowColor}>{title}</Title>
      
      {description && (
        <Description>
          {description}
        </Description>
      )}

      {techItems && (
        <TechStack>
          {techItems.map((tech, index) => (
            <TechTag 
              key={`tech-${index}`}
              $glowColor={glowColor}
            >
              {tech}
            </TechTag>
          ))}
        </TechStack>
      )}
    </CardWrapper>
  );
}