import Header from './components/Header';
import About from './components/About';
import Limechain from './components/Experience/Limechain';
import NetinfoHead from './components/Experience/NetinfoHead';
import Netinfo from './components/Experience/Netinfo';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
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
      <Contacts />
    </div>
  );
}

export default App;
