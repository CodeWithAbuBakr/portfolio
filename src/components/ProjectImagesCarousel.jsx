



const projects = [
  {
    id: 1,
    title: 'Neural Excel Optimizer',
    description: 'Deep learning-powered spreadsheet analysis with predictive modeling and automated insights generation using TensorFlow integration...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#2ed5ff'
  },
  {
    id: 2,
    title: 'Cognitive Doc Security',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#64ffda'
  },
  {
    id: 3,
    title: 'Smart Presentation AI',
    description: 'Generative AI assistant for automated slide creation with style transfer capabilities and real-time content suggestions powered by GPT-4...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#00ff88'
  },
  {
    id: 4,
    title: 'Neural Excel Optimizer',
    description: 'Deep learning-powered spreadsheet analysis with predictive modeling and automated insights generation using TensorFlow integration...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#ffd700'
  },
  {
    id: 5,
    title: 'Cognitive Doc Security',
    description: 'AI-driven document management system with natural language processing and blockchain-based authentication using custom transformer models...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#ff7d45'
  },
  {
    id: 6,
    title: 'Smart Presentation AI',
    description: 'Generative AI assistant for automated slide creation with style transfer capabilities and real-time content suggestions powered by GPT-4...',
    imgLink: [outlook_img_1, outlook_img_2, outlook_img_3, outlook_img_4, outlook_img_5],
    glowColor: '#ff7dff'
  },
];


const StyledCyberCardComponent = ({ project, expandedIndex, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imgLink.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, [project.imgLink.length]);

  return (
    <StyledCyberCard 
      title={project.title}
      glowColor={project.glowColor}
      $expanded={expandedIndex === index}
    >
      <img src={project.imgLink[currentImageIndex]} alt={project.title} />
      <p>{project.description}</p>
      <div>
        <span>TensorFlow</span>
        <span>GPT-4</span>
        <span>Blockchain</span>
      </div>
    </StyledCyberCard>
  );
};

export default StyledCyberCardComponent;