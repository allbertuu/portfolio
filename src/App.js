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
  return (
    <Router>
      <Header />

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
