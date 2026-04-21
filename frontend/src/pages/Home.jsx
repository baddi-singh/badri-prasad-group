import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Leadership from '../components/Leadership';
import Ecosystem from '../components/Ecosystem';
import GlobalMap from '../components/GlobalMap';
import CSR from '../components/CSR';
import Newsroom from '../components/Newsroom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => { setTimeout(() => { setLoading(false); }, 2000); }, []);
  
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
        <div className="preloader-brand">BADRI<span>PRASAD</span></div>
      </div>
      
      <div className={`custom-cursor ${isHovering ? 'hovering' : ''}`} style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}></div>

      <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        
        {/* ==========================================
            THE ENTERPRISE MODULAR ARCHITECTURE 
        ========================================== */}
        <Navbar scrollToTop={scrollToTop} />
        <Hero />
        <TrustStrip />
        <Leadership />
        <Ecosystem />
        <GlobalMap />
        <CSR />
        <Newsroom />
        <Contact />
        <Footer scrollToTop={scrollToTop} />
        
      </div>
    </>
  );
};

export default Home;