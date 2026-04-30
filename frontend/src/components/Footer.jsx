import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Jab footer se koi naye page par jaye, toh page automatically top par scroll ho jaye
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#020202', borderTop: '1px solid #111', padding: '60px 5% 20px', color: '#fff' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', maxWidth: '1200px', margin: '0 auto 40px' }}>
        
        {/* Brand Section */}
        <div style={{ flex: '1 1 300px' }}>
          <Link to="/" onClick={handleScrollToTop} style={{ textDecoration: 'none', color: '#fff', fontSize: '24px', fontWeight: '900', letterSpacing: '2px' }}>
            BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span>
          </Link>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '15px', lineHeight: '1.6', maxWidth: '280px' }}>
            A diversified global conglomerate setting the standard in Tech, Transit, Textiles, and Infrastructure.
          </p>
        </div>

        {/* Company Section */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>
              <Link to="/about" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/leadership" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/csr" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                CSR Vision 2030
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>
              <Link to="/privacy" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/compliance" onClick={handleScrollToTop} style={{ color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' }} onMouseEnter={(e)=>e.target.style.color='#D4AF37'} onMouseLeave={(e)=>e.target.style.color='#888'}>
                Compliance
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', borderTop: '1px solid #111', paddingTop: '20px', color: '#444', fontSize: '12px' }}>
        © 2026 Badri-Prasad Group. Engineered with precision.
      </div>
    </footer>
  );
};

export default Footer;