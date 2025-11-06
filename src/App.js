import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import ScrollToTop from './components/ScrollToTop';
import SkipLink from './components/SkipLink';
import AnimatedSection from './components/AnimatedSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <SkipLink />
      <Header></Header>
      <main id="main-content">
        <AnimatedSection animationType="fade-up">
          <About></About>
        </AnimatedSection>
        <AnimatedSection animationType="fade-up" delay={100}>
          <Experience></Experience>
        </AnimatedSection>
        <AnimatedSection animationType="fade-up" delay={200}>
          <Skills></Skills>
        </AnimatedSection>
        <AnimatedSection animationType="fade-up" delay={100}>
          <Education />
        </AnimatedSection>
        <Languages />
        <AnimatedSection animationType="fade-up" delay={100}>
          <Certificates />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
