// sections/Hero.jsx
import styled from 'styled-components';
import CyberButton from '../components/CyberButton';
import { motion } from 'framer-motion';
import ProfileImgUrl from './imgs/mabubakrprofilepic.jpeg';

const HeroWrapper = styled.section`
  padding: 8rem 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  min-height: 100vh;
  flex-wrap: wrap;
  position: relative;
  background: transparent;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-bottom: 3rem;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 3rem;
    gap: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/ai-circuit-pattern.png') repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

const ProfileWrapper = styled.div`
  position: relative;
  flex: 0 0 380px;
  height: 380px;
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 992px) {
    flex: 0 0 330px;
    height: 330px;
  }

  @media (max-width: 768px) {
    flex: 0 0 330px;
    height: 330px;
  }

  @media (max-width: 480px) {
    flex: 0 0 250px;
    height: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    border: 2px solid rgba(0, 212, 255, 0.4);
    border-radius: 50%;
    box-shadow: 
      0 0 40px rgba(0, 212, 255, 0.2),
      inset 0 0 30px rgba(0, 212, 255, 0.1);
    animation: rotate 20s linear infinite;

    @media (max-width: 480px) {
      top: -3%;
      left: -3%;
      width: 106%;
      height: 106%;
    }
  }

  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.neonBlue};
  background: #0a192f;
  box-shadow: 0 0 50px rgba(0, 212, 255, 0.3);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
`;


const AiGlow = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle at center, 
    rgba(0, 212, 255, 0.1) 0%,
    rgba(0, 212, 255, 0.05) 30%,
    transparent 70%);
  pointer-events: none;
`;

const IntroText = styled(motion.div)`
  max-width: 600px;
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #00ffff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 0.80rem;
    }

    @media (max-width: 480px) {
      font-size: 0.80rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroWrapper id='home'>
      <ContentWrapper>
        <IntroText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I Am Office Addin Developer
          </motion.h1>
          
          <p>
            Specializing in AI-powered Office Add-in development with expertise in MERN stack and cloud solutions. Leveraging machine learning and intelligent automation to create next-generation productivity tools for Outlook, Word, Excel, and PowerPoint.
          </p>
          {/* <p>
            Certified in Azure AI and AWS Machine Learning, I bring 3+ years of experience integrating cognitive services, natural language processing, and predictive analytics into enterprise-grade Office solutions.
          </p> */}
          <CyberButton glowColor="#00ff88">EXPLORE SOLUTIONS</CyberButton>
        </IntroText>
      </ContentWrapper>

      <ProfileWrapper>
        <AiGlow />
        <ImageContainer>
          <ProfileImage 
            src={ProfileImgUrl}
            alt="AI Office Add-in Developer"
          />
        </ImageContainer>
      </ProfileWrapper>
    </HeroWrapper>
  );
}