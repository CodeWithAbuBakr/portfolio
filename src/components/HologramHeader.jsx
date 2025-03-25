'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderWrapper = styled(motion.header)`
  text-align: center;
  padding: 4rem;
  background: radial-gradient(circle at center,
    ${({ theme }) => theme.colors.cyberPurple} 0%,
    transparent 70%
  );
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px ${({ theme }) => theme.colors.neonBlue};
`;

export default function HologramHeader() {
  return (
    <HeaderWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title>Office Add-in Developer</Title>
      <p>Building the Future of Productivity</p>
    </HeaderWrapper>
  );
}