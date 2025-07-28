import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Now from './pages/Now';
import Posts from './pages/Posts';
import Uses from './pages/Uses';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/now" element={<Now />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/uses" element={<Uses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

