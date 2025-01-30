import styled from 'styled-components';

const CyberButton = styled.button`
  background: transparent;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #00ff88;
  background: linear-gradient(45deg, #00ff88, #7e3ff2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  /* Border Effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    padding: 2px;
    background: linear-gradient(45deg, #00ff88, #7e3ff2);
    -webkit-mask: 
      linear-gradient(white 0 0) content-box, 
      linear-gradient(white 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    transition: all 0.4s ease;
  }

  &:hover {
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.3);
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
    background: linear-gradient(45deg, #7e3ff2, #00ff88); /* Gradient toggles */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      background: linear-gradient(45deg, #7e3ff2, #00ff88); /* Border gradient toggles */
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    letter-spacing: 0.5px;
  }
`;

export default CyberButton;
