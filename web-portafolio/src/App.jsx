import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutMePage from './pages/AboutMePage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <div className='bg-white text-black dark:bg-[#0a192f] dark:text-white'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        {/* Agregar más rutas aquí */}
      </Routes>

      <ScrollToTopButton />
    </Router>
    </div>
  );
}

export default App;
