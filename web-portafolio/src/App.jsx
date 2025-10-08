import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project from './pages/Projects';
import Skills from './pages/Skills';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className='bg-white text-black dark:bg-[#0a192f] dark:text-white'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        {/* Agregar más rutas aquí */}
      </Routes>

      <ScrollToTopButton />
    </Router>
    </div>
  );
}

export default App;
