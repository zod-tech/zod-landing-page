import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Showcase from './pages/Showcase';
import Community from './pages/Community';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<About />} />
          <Route path="/showcase" element={<Blog />} />
          <Route path="/community" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
