import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Header from './components/layout/Header';

import './App.scss';

function App() {

  const [isHeaderVisible, setHeaderVisibility] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 70 ? setHeaderVisibility(true) : setHeaderVisibility(false);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <Router>
      <Header headerVisibility = {isHeaderVisible}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projetos />} />
        {/* <Route path="/skills" element={<Habilidades />} /> */}
      </Routes>

      <footer></footer>
    </Router>
  );
}

export default App;
