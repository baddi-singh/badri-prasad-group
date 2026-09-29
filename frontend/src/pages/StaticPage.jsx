import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StaticPage = ({ title, subtitle, content }) => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505' }}>
      <Navbar />
      
      {/* DEVIL FIX: Added paddingTop: '120px' to prevent the fixed navbar from overlapping the header */}
      <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <section className="container animate-up" style={{ padding: '0 5%', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px', borderBottom: '1px solid #222', paddingBottom: '20px' }}>
            <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {subtitle}
            </span>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0 0 0', letterSpacing: '1px' }}>
              {title}
            </h1>
          </div>

          <div className="static-content" style={{ color: '#ccc', lineHeight: '1.8', fontSize: '15px' }}>
            {/* The content will be injected here */}
            {content}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default StaticPage;