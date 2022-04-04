import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Header from './components/layout/Header';

import sr from './assets/scripts/ScrollReveal';

import './App.scss';

function App() {

  useEffect(() => {

    const delaySmallReveal = {
      origin: 'top',
      duration: 2200,
      delay: 200,
      distance: '100px',
      easing: 'ease',
    }
    const delayMediumReveal = {
      origin: 'top',
      duration: 2000,
      delay: 800,
      distance: '50px',
      easing: 'ease',
    }
    const delayBigReveal = {
      origin: 'top',
      duration: 2000,
      delay: 1100,
      distance: '50px',
      easing: 'ease',
    }

    sr.reveal('.delaySmallReveal', delaySmallReveal)
    sr.reveal('.delayMediumReveal', delayMediumReveal)
    sr.reveal('.delayBigReveal', delayBigReveal)
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projetos />} />
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>

      <footer></footer>
    </Router>
  );
}

export default App;
