import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
