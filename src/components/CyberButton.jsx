// components/CyberButton.jsx
import styled from 'styled-components';

const CyberButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.neonBlue};
  color: ${({ theme }) => theme.colors.neonBlue};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 243, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export default CyberButton;