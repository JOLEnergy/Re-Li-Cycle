import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Process/>
      <Contact/>
    </>
  );
}

export default App;
