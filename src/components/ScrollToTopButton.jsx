import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

// Styled components
const MainButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    rgba(16, 24, 39, 0.9) 0%,
    rgba(10, 25, 47, 0.9) 100%
  );
  color: #2ed5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(46, 213, 255, 0.2);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(46, 213, 255, 0.3);

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, #2ed5ff, #64ffda, #2ed5ff);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .arrow-icon {
    font-size: 1.8em;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 5px #2ed5ff);
  }
`;

const ProgressRing = styled.svg.attrs({
  width: '100%',
  height: '100%',
  viewBox: '0 0 100 100'
})`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);

  .progress-bar {
    fill: none;
    stroke: #2ed5ff;
    stroke-width: 4;  // Increased stroke width
    stroke-linecap: round;  // Rounded line ends
    stroke-dasharray: 283;  // Adjusted for r="45"
    stroke-dashoffset: ${props => 283 - (283 * props.progress) / 100};
    transition: stroke-dashoffset 0.3s ease;
    filter: drop-shadow(0 0 5px #2ed5ff);
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    
    ${MainButton} {
      &:before {
        opacity: 1;
      }
      .arrow-icon {
        transform: translateY(-2px);
      }
    }
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, (scrolled / maxScroll) * 100);
    
    setScrollProgress(progress);
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container>
      {isVisible && (
        <ButtonWrapper onClick={scrollToTop}>
          <MainButton aria-label="Scroll to top">
            <FiArrowUp className="arrow-icon" />
            <ProgressRing progress={scrollProgress}>
              <circle className="progress-bar" cx="50" cy="50" r="45" />
            </ProgressRing>
          </MainButton>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default ScrollToTopButton;