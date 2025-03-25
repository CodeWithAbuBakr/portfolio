'use client';

import styled from 'styled-components';
import CyberCard from '../components/CyberCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

//Outlook Addin Images (content enhancer)
import outlook_img_1 from './imgs/outlook addin/11.png';
import outlook_img_2 from './imgs/outlook addin/22.png';
import outlook_img_3 from './imgs/outlook addin/33.png';
import outlook_img_4 from './imgs/outlook addin/44.png';
import outlook_img_5 from './imgs/outlook addin/55.png';

//Word Addin Images (bartliben)
import word_img_1 from './imgs/word addin/1.png';
import word_img_2 from './imgs/word addin/2.png';
import word_img_3 from './imgs/word addin/3.png';
import word_img_4 from './imgs/word addin/4.png';
import word_img_5 from './imgs/word addin/5.png';
import word_img_6 from './imgs/word addin/6.png';
import word_img_7 from './imgs/word addin/7.png';
import word_img_8 from './imgs/word addin/8.png';
import word_img_9 from './imgs/word addin/9.png';
import word_img_10 from './imgs/word addin/10.png';
import word_img_11 from './imgs/word addin/11.png';
import word_img_12 from './imgs/word addin/12.png';
import word_img_13 from './imgs/word addin/13.png';

//Excell Addin Images (integraiton of Ketcher into Excel)
import excell_img_1 from './imgs/Excel addin/1.png';
import excell_img_2 from './imgs/Excel addin/2.png';
import excell_img_3 from './imgs/Excel addin/3.png';
import excell_img_4 from './imgs/Excel addin/4.png';
import excell_img_5 from './imgs/Excel addin/5.png';
import excell_img_6 from './imgs/Excel addin/6.png';
import excell_img_7 from './imgs/Excel addin/7.png';

//Client CRM Dashboard Images 
import clientCRM_img_1 from './imgs/Client CRM/1.png';
import clientCRM_img_2 from './imgs/Client CRM/2.png';
import clientCRM_img_3 from './imgs/Client CRM/3.png';
import clientCRM_img_4 from './imgs/Client CRM/4.png';
import clientCRM_img_5 from './imgs/Client CRM/5.png';
import clientCRM_img_6 from './imgs/Client CRM/6.png';
import clientCRM_img_7 from './imgs/Client CRM/7.png';
import clientCRM_img_8 from './imgs/Client CRM/8.png';
import clientCRM_img_9 from './imgs/Client CRM/9.png';
import clientCRM_img_10 from './imgs/Client CRM/10.png';

//Powerpoint Addin Images ()
import powerpoint_img_1 from './imgs/Powerpoint addin/1.png';
import powerpoint_img_2 from './imgs/Powerpoint addin/2.png';
import powerpoint_img_3 from './imgs/Powerpoint addin/3.png';
import powerpoint_img_4 from './imgs/Powerpoint addin/4.png';
import powerpoint_img_5 from './imgs/Powerpoint addin/5.png';

//Pishing Report Outlook Add-in Images
import pishingReport_img_1 from './imgs/pushing report/p1.png';
import pishingReport_img_2 from './imgs/pushing report/p2.png';
import pishingReport_img_3 from './imgs/pushing report/p3.png';
import pishingReport_img_4 from './imgs/pushing report/p4.png';

const Section = styled.section`
  position: relative;
  padding: 8rem 1rem 0rem;
  background: transparent;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem 0rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
  align-items: flex-start;

  @media (min-width: 1024px) {
    gap: 2.5rem;
    padding: 2rem;
  }
`;

const CardContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "0px 0px -100px 0px" }
}))`
  position: relative;
  flex: 1 1 300px;
  max-width: 100%;
  display: flex;
  max-height: ${({ $expanded }) => $expanded ? '1000px' : '200px'};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 8px;
`;

const StyledCyberCard = styled(CyberCard)`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  background: transparent;
  border: 1px solid rgba(46, 213, 255, 0.15);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 40px ${({ $glowColor }) => $glowColor}80;
  }

  .content-wrapper {
    transition: transform 0.3s ease;
    height: 100%;
    width: 100%;
  }

  &:hover .content-wrapper {
    transform: translateY(-5px); // Move only the content
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ $glowColor }) => $glowColor} 0%, // Fixed
      transparent 50%,
      ${({ $glowColor }) => $glowColor} 100% // Fixed
    );
    opacity: 0.1;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid ${({ $glowColor }) => $glowColor}30; // Fixed
    transition: transform 0.3s ease;
    flex-shrink: 0;
    
    @media (min-width: 768px) {
      height: 140px;
    }
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ $glowColor }) => $glowColor}; // Fixed
    font-family: 'Space Mono', monospace;
    flex-shrink: 0;
    
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => $expanded ? 'unset' : '3'};
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0.5rem 0;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    flex-grow: 1;
    
    }

  div {
    opacity: ${({ $expanded }) => $expanded ? 1 : 0};
    max-height: ${({ $expanded }) => $expanded ? '500px' : '0'};
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
    overflow: hidden;
    flex-shrink: 0;

    span {
      background: linear-gradient(45deg, rgba(46, 213, 255, 0.15), rgba(100, 255, 218, 0.15));
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.7rem;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(46, 213, 255, 0.1);
      color: #64ffda;
      font-family: 'Space Mono', monospace;
      
      @media (min-width: 768px) {
        font-size: 0.75rem;
      }
    }
  }
`;


const Header = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  
  &::after {
    position: absolute;
    right: -10px;
    top: -15px;
    font-size: 1.5rem;
    filter: drop-shadow(0 0 10px #64ffda);
  }

  span {
    background: linear-gradient(45deg, #2ed5ff, #64ffda);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(46, 213, 255, 0.5);
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;


const projects = [
  {
    id: 1,
    title: 'IPRHQ Word Add-in',
    description: 'This Word add-in features login, API-based clause insertion via dropdowns, {{}} search-and-replace, and OpenAI integration for text enhancement, allowing users to refine and insert AI-generated content easily.',
    imgLink: [word_img_1, word_img_2, word_img_3, word_img_4, word_img_5, word_img_6, word_img_7, word_img_8, word_img_9, word_img_10, word_img_11, word_img_12, word_img_13],
    glowColor: '#2ed5ff',
    tech: ['MERN', 'OpenAI', 'Azure AD', 'OAuth2']
  },
  {
    id: 2,
    title: 'Ketcher Excel Add-in',
    description: 'This Excel Add-in integrates Ketcher for drawing and editing chemical structures. Users can extract, modify, and auto-update molecular formulas in Excel. Built with React.js and Office.js, it ensures seamless interaction, ideal for chemists and researchers.',
    imgLink: [excell_img_1, excell_img_2, excell_img_3, excell_img_4, excell_img_5, excell_img_6, excell_img_7],
    glowColor: '#64ffda',
    tech: ['React', 'Office.js', 'Ketcher', 'Azure AD', 'OAuth2']
  },
  {
    id: 3,
    title: 'Client CRM Dashboard',
    description: 'This MERN-based CRM Dashboard integrates Microsoft 365 APIs for client and email management. Features include role-based authentication, SSO, CSV import, email fetching, search, pagination, and secure backend encryption. Manage invites, clients, and workflows efficiently.',
    imgLink: [clientCRM_img_1, clientCRM_img_2, clientCRM_img_3, clientCRM_img_4, clientCRM_img_5, clientCRM_img_6, clientCRM_img_7, clientCRM_img_8, clientCRM_img_9, clientCRM_img_10],
    glowColor: '#00ff88',
    tech: ['MERN', 'Microsoft 365 API', 'OAuth2', 'Azure AD', 'JWT', 'Bcrypt']
  },
  {
    id: 4,
    title: 'Content Enhancer AI',
    description: 'I created an Outlook Enhancer Add-in that improves emails with grammar correction, spelling fixes, and text summarization. It seamlessly integrates with Outlook, ensuring clear, error-free communication while saving time. Perfect for professionals!',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#ffd700',
    tech: ['React', 'Office.js', 'Azure AD', 'OAuth2', 'Grammarly API', 'OpenAI' ]
  },
  {
    id: 5,
    title: 'Design Toolkit',
    description: 'The Interactive Design Toolkit is a PowerPoint add-in for effortless slide customization. It features a shape selector, line adjuster, style customizer, and color picker. Built with React, it ensures real-time updates and smooth interactivity for pro presentations.',
    imgLink: [powerpoint_img_1, powerpoint_img_2, powerpoint_img_3, powerpoint_img_4, powerpoint_img_5],
    glowColor: '#ff7d45',
    tech: ['React', 'Office.js', 'Azure AD', 'OAuth2', 'PPTXGenJS' ]
  },
  {
    id: 6,
    title: 'Phishing Report',
    description: 'Built an Outlook Add-In with React.js, Office.js, and Microsoft Graph API for phishing detection. Integrated SSO with Azure AD, used Google Safe Browsing API to analyze emails, enabled silent token refresh, and provided real-time feedback with a secure backend.',
    imgLink: [pishingReport_img_1, pishingReport_img_2, pishingReport_img_3, pishingReport_img_4],
    glowColor: '#ff7dff',
    tech: ['React', 'Office.js', 'Azure AD', 'OAuth2', 'Microsoft Graph API', 'Google Safe Browsing API' ]
  },
];




// Projects.jsx - Updated Usage
const StyledCyberCardComponent = ({ project, expandedIndex, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % project.imgLink.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.imgLink.length]);

  return (
    <StyledCyberCard 
      title={project.title}
      glowColor={project.glowColor}
      image={project.imgLink[currentImageIndex]}
      description={project.description}
      techItems={project.tech}
      $expanded={expandedIndex === index}
    />
  );
};


export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardClick = (index) => {
    setExpandedIndex(prev => prev === index ? -1 : index);
  };

  return (
    <Section id="projects">
      
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>AI PROJECTS</span>
      </Header>

      <Grid>
        {projects.map((project, index) => (
          <CardContainer
            key={project.id}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onClick={() => handleCardClick(index)}
            layout
            $expanded={expandedIndex === index}
          >
            <StyledCyberCardComponent 
              project={project}
              expandedIndex={expandedIndex}
              index={index} />
          </CardContainer>
        ))}
      </Grid>
    </Section>
  );
}