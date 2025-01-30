// sections/Skills.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillMeter from '../components/SkillMeter';

const Section = styled.section`
  padding: 8rem 1rem 0rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 30px 30px;
    opacity: 0.5;
    z-index: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
`;

const SkillCategory = styled(motion.div)`
  padding: 2rem;
  background: rgba(10, 25, 47, 0.7);
  border: 1px solid rgba(46, 213, 255, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #2ed5ff;
    box-shadow: 0 8px 32px rgba(46, 213, 255, 0.15);
    
    &::after {
      opacity: 0.2;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(46, 213, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
    opacity: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: #ccd6f6;
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #2ed5ff, transparent);
    transition: width 0.3s ease;
  }

  span {
    color: #2ed5ff;
    margin-right: 0.5rem;
  }
`;

const Header = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  
  &::after {
    content: '✦';
    position: absolute;
    right: -10px;
    top: -10px;
    color: #2ed5ff;
    font-size: 1.2rem;
    filter: drop-shadow(0 0 5px #2ed5ff);
  }

  span {
    background: linear-gradient(45deg, #2ed5ff, #64ffda);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(46, 213, 255, 0.3);
  }
`;

const skillsData = [
  // {
  //   category: "Office 365 Add-in Expertise",
  //   items: [
  //     { skill: "Outlook Add-ins", level: 98 },
  //     { skill: "Word Add-ins", level: 95 },
  //     { skill: "Excel Add-ins", level: 96 },
  //     { skill: "PowerPoint Add-ins", level: 94 },
  //     { skill: "Office.js", level: 97 },
  //     { skill: "SharePoint Integration", level: 90 }
  //   ]
  // },
  {
    category: "Frontend Mastery",
    items: [
      { skill: "React/Redux", level: 95 },
      { skill: "Angular", level: 88 },
      { skill: "Vue.js", level: 85 },
      { skill: "JavaScript (ES6+)", level: 98 },
      { skill: "HTML5/CSS3", level: 99 },
      { skill: "Bootstrap 5", level: 97 },
      { skill: "Tailwind CSS", level: 96 },
      { skill: "jQuery", level: 93 }
    ]
  },
  {
    category: "Backend & Databases",
    items: [
      { skill: "Node.js/Express", level: 94 },
      { skill: "Python/Flask/Django", level: 90 },
      { skill: "MongoDB", level: 92 },
      { skill: "MySQL", level: 89 },
      { skill: "RESTful APIs", level: 96 },
      { skill: "GraphQL", level: 88 }
    ]
  },
  {
    category: "Visualization & Tools",
    items: [
      { skill: "Chart.js", level: 91 },
      { skill: "D3.js", level: 85 },
      { skill: "Webpack", level: 90 },
      { skill: "Git/GitHub", level: 97 },
      { skill: "Azure DevOps", level: 88 },
      { skill: "Docker", level: 86 }
    ]
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Technical Expertise</span>
      </Header>

      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory
            key={category.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              <span>▹</span>{category.category}
            </CategoryTitle>
            {category.items.map((item, idx) => (
              <SkillMeter
                key={item.skill}
                skill={item.skill}
                level={item.level}
                delay={index * 0.2 + idx * 0.1}
              />
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Section>
  );
}