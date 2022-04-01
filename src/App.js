import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavItem from './components/NavItem';

import Home from './pages/Home';

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
    <>
      <header>
        <div className='l_logo'>
          Portfólio
        </div>

        <nav>
          <ul>
            <NavItem text="Início" link="/" />
            <NavItem text="Projetos" link="/" />
          </ul>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} /> */}
        </Routes>
      </Router>

      <footer></footer>
    </>
  );
}

export default App;
