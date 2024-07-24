import Header from './components/Header';
import About from './components/About';
import Limechain from './components/Experience/Limechain';
import NetinfoHead from './components/Experience/NetinfoHead';
import Netinfo from './components/Experience/Netinfo';
import Skills from './components/Skills';
import CmdPromptComponent from './components/Footer';
import Certificates from './components/Certificates';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Limechain></Limechain>
      <NetinfoHead></NetinfoHead>
      <Netinfo></Netinfo>
      <Skills></Skills>
      <Certificates />
      <CmdPromptComponent />
    </div>
  );
}

export default App;
