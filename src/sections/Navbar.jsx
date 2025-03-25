// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(46, 213, 255, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #2ed5ff, #00ff88, #2ed5ff);
    opacity: 0.3;
    animation: borderFlow 6s linear infinite;
  }

  @keyframes borderFlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`;

const Logo = styled(motion.div)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #2ed5ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  position: relative;

  span {
    color: #00ff88;
    filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.3));
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  color: #ccd6f6;
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #2ed5ff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #2ed5ff;
    &::before {
      width: 100%;
    }
  }

  &.active {
    color: #00ff88;
    &::after {
      content: '•';
      position: absolute;
      right: -10px;
      color: #00ff88;
      filter: drop-shadow(0 0 5px #00ff88);
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLine = styled(motion.div)`
  width: 30px;
  height: 2px;
  background: #2ed5ff;
  margin: 6px 0;
  border-radius: 2px;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: rgba(10, 25, 47, 0.98);
  backdrop-filter: blur(15px);
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 1px solid rgba(46, 213, 255, 0.2);
  z-index: 999;
`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>AI</span>Portfolio
        </Logo>

        <NavItems>
          <NavLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </NavLink>
          
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </NavLink>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavItems>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuLine
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}}
          />
          <MenuLine
            animate={isMobileMenuOpen ? { opacity: 0 } : {}}
          />
          <MenuLine
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
          />
        </MobileMenuButton>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <NavLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </MobileMenu>
      )}
    </>
  );
}