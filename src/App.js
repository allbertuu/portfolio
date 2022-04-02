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

    const config = {
      origin: 'right',
      duration: 1500,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal('.box', config);
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
