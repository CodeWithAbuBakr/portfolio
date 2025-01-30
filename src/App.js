// App.js
import { ThemeProvider } from 'styled-components';
import { cyberTheme } from './styles/theme';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './sections/Footer';
import OfficeSuiteDisplay from './sections/OfficeSuiteDisplay';
import AIBackground from './components/MatrixBackground';
import Navbar from './sections/Navbar';

function App() {
  return (
    <ThemeProvider theme={cyberTheme}>
      <Navbar />
      <AIBackground />
      <Hero />
      <OfficeSuiteDisplay />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;