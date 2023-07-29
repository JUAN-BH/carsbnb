import { Route, Routes } from 'react-router-dom';
import Header from './global/Header';
import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Testimonials from './pages/Testimonials';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './global/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
