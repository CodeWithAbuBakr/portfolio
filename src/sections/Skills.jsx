import styled from 'styled-components';
import { motion } from 'framer-motion';

const colors = ['#2ed5ff', '#64ffda', '#00ff88', '#ffd700', '#ff7d45'];

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

const StyledSkillsContainer = styled.div`
  background: transparent;
  padding: 8rem 1rem 0rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, ${colors[0]}, ${colors[1]});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const SkillBar = styled(motion.div)`
  height: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
`;

const SkillItem = styled(motion.div)`
  position: relative;
  padding: 0.5rem;
  &:hover {
    .glow-effect {
      opacity: 0.5;
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

export default function Skills() {
  return (
    <StyledSkillsContainer id='skills'>
      <Header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>TECHNOLOGIES EXPERTISE</span>
      </Header>
      {skillsData.map((category, catIdx) => (
        <motion.div 
          key={catIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: catIdx * 0.2 }}
          style={{ marginBottom: '3rem' }}
        >
          <CategoryTitle
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ duration: 1.5 }}
          >
            {category.category}
          </CategoryTitle>

          <SkillsGrid>
            {category.items.map((item, idx) => {
              const color = colors[idx % colors.length];
              return (
                <SkillItem 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: catIdx * 0.2 + idx * 0.1 }}
                >
                  <div className="skill-header">
                    <span style={{ color: '#fff' }}>{item.skill}</span>
                    <span style={{ color: color }}>{item.level}%</span>
                  </div>

                  <SkillBar>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${color}dd, ${color}40)`,
                        borderRadius: '5px',
                        boxShadow: `0 0 8px ${color}80`,
                      }}
                    />
                  </SkillBar>

                  <div 
                    className="glow-effect"
                    style={{
                      position: 'absolute',
                      right: '-15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '30px',
                      height: '30px',
                      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                      opacity: '0.3',
                      transition: 'opacity 0.3s ease',
                    }} 
                  />
                </SkillItem>
              );
            })}
          </SkillsGrid>
        </motion.div>
      ))}
    </StyledSkillsContainer>
  );
}