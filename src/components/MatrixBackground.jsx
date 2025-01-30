import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const glow = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 0.3; }
  100% { opacity: 0.8; }
`;

const fall = keyframes`
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(circle at center, #0a0e1a 0%, #000000 100%);
`;

const Particle = styled.div`
  position: absolute;
  color: ${({ color }) => color};
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  white-space: nowrap;
  animation: ${fall} ${props => props.speed}s linear infinite;
  text-shadow: 0 0 10px currentColor;
  opacity: ${props => props.opacity};

  &::before {
    content: '01';
    animation: ${glow} ${props => props.glowspeed}s infinite;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export default function AIBackground() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const colors = ['#4dc3ff', '#26ffdf', '#7d6cff']; // Move inside useEffect
    const createParticles = () => {
      const screenWidth = window.innerWidth;
      const particleCount = Math.floor(screenWidth / 20);
      
      return Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        left: (i / particleCount) * 100,
        speed: 10 + Math.random() * 20,
        glowspeed: 2 + Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    };

    setParticles(createParticles());
    const handleResize = () => setParticles(createParticles());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // No need to add `colors` since it's defined inside useEffect

  return (
    <Container>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
          {...particle}
        />
      ))}
    </Container>
  );
}
