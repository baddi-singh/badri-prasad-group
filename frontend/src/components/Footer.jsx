// okay code
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   // Automatically scroll to top when clicking a footer link
//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Clean inline styles for hover effects
//   const linkStyle = { color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' };
//   const hoverStyle = (e) => e.target.style.color = '#D4AF37';
//   const unhoverStyle = (e) => e.target.style.color = '#888';

//   return (
//     <footer style={{ background: '#020202', borderTop: '1px solid #111', padding: '60px 5% 20px', color: '#fff' }}>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', maxWidth: '1200px', margin: '0 auto 40px' }}>
        
//         {/* Brand Section */}
//         <div style={{ flex: '1 1 250px' }}>
//           <Link to="/" onClick={handleScrollToTop} style={{ textDecoration: 'none', color: '#fff', fontSize: '24px', fontWeight: '900', letterSpacing: '2px' }}>
//             BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span>
//           </Link>
//           <p style={{ color: '#666', fontSize: '13px', marginTop: '15px', lineHeight: '1.6', maxWidth: '280px' }}>
//             A diversified global corporate enterprise setting the standard in Tech, Transit, Textiles, and Infrastructure.
//           </p>
//           <p style={{ color: '#444', fontSize: '11px', marginTop: '20px' }}>
//             Global Headquarters <br/> Greater Patna, Bihar, India.
//           </p>
//         </div>

//         {/* Corporate Section */}
//         <div style={{ flex: '1 1 150px' }}>
//           <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Corporate</h4>
//           <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <li><Link to="/about" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>About Us</Link></li>
//             <li><Link to="/leadership" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Leadership</Link></li>
//             <li><Link to="/careers" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Careers</Link></li>
//             <li><Link to="/csr" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>CSR Vision 2030</Link></li>
//             <li><Link to="/ventures" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Global Portfolio</Link></li>
//           </ul>
//         </div>

//         {/* Stakeholders Section */}
//         <div style={{ flex: '1 1 150px' }}>
//           <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Stakeholders</h4>
//           <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <li><Link to="/investors" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Investor Portal</Link></li>
//             <li><Link to="/newsroom" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Newsroom & Press</Link></li>
//             <li><Link to="/contact" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Vendor Inquiries</Link></li>
//             <li><Link to="/admin" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Secure HQ Login</Link></li>
//           </ul>
//         </div>

//         {/* Legal & Privacy Section */}
//         <div style={{ flex: '1 1 150px' }}>
//           <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Legal & Privacy</h4>
//           <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <li><Link to="/privacy" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Privacy Policy</Link></li>
//             <li><Link to="/terms" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Terms of Service</Link></li>
//             <li><Link to="/compliance" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Corporate Compliance</Link></li>
//             <li><Link to="/privacy" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Data Breach Policy</Link></li>
//             <li><Link to="/terms" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Payment & Vendor Terms</Link></li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Footer Details */}
//       <div style={{ textAlign: 'center', borderTop: '1px solid #111', paddingTop: '20px', color: '#444', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <div>© 2026 Badri Prasad Group Holdings. Engineered with precision. All Rights Reserved.</div>
//         <div style={{ color: '#333' }}>Confidentiality Notice: This digital infrastructure is protected by advanced cryptographic standards.</div>
//       </div>
//     </footer>
//   );
// };












import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkStyle = { color: '#888', textDecoration: 'none', fontSize: '13px', transition: '0.3s' };
  const hoverStyle = (e) => e.target.style.color = '#D4AF37';
  const unhoverStyle = (e) => e.target.style.color = '#888';

  const socialIconStyle = { color: '#888', fontSize: '18px', transition: '0.3s', textDecoration: 'none', display: 'inline-block' };
  const socialHover = (e) => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-2px)'; };
  const socialUnhover = (e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)'; };

  return (
    <footer style={{ background: '#020202', borderTop: '1px solid #111', padding: '60px 5% 20px', color: '#fff' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', maxWidth: '1200px', margin: '0 auto 40px' }}>
        
        {/* Brand Section */}
        <div style={{ flex: '1 1 250px' }}>
          <Link to="/" onClick={handleScrollToTop} style={{ textDecoration: 'none', color: '#fff', fontSize: '24px', fontWeight: '900', letterSpacing: '2px' }}>
            BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span>
          </Link>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '15px', lineHeight: '1.6', maxWidth: '280px' }}>
            A diversified global enterprise setting the standard in Technology, Logistics, Textiles & Apparel, and Infrastructure.
          </p>
          <p style={{ color: '#444', fontSize: '11px', marginTop: '20px', lineHeight: '1.8' }}>
            <strong style={{ color: '#666' }}>Global Headquarters:</strong><br/>
            Greater Patna, Bihar, India
          </p>
          <p style={{ color: '#444', fontSize: '11px', marginTop: '12px', lineHeight: '1.8' }}>
            <strong style={{ color: '#666' }}>Regional Offices:</strong><br/>
            Delhi NCR | Mohali | Kolkata
          </p>
        </div>

        {/* Corporate Section */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Corporate</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/about" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>About Us</Link></li>
            <li><Link to="/leadership" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Leadership</Link></li>
            <li><Link to="/careers" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Careers</Link></li>
            <li><Link to="/csr" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Sustainability & CSR</Link></li>
            <li><Link to="/ventures" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Global Operations</Link></li>
          </ul>
        </div>

        {/* Stakeholders Section */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Stakeholders</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/investors" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Investor Portal</Link></li>
            <li><Link to="/newsroom" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Newsroom & Press</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Supplier & Vendor Relations</Link></li>
            {/* 🔥 FIX 1: Employee Portal -> Corporate Portal */}
            <li><Link to="/admin" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Corporate Portal</Link></li>
          </ul>
        </div>

        {/* Legal & Privacy Section */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Legal & Privacy</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/privacy" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Terms of Service</Link></li>
            <li><Link to="/privacy" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Cookie Policy</Link></li>
            <li><Link to="/compliance" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Corporate Compliance</Link></li>
            <li><Link to="/privacy" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Data Breach Policy</Link></li>
            {/* 🔥 FIX 2: Payment & Vendor Terms -> Vendor Terms */}
            <li><Link to="/terms" onClick={handleScrollToTop} style={linkStyle} onMouseEnter={hoverStyle} onMouseLeave={unhoverStyle}>Vendor Terms</Link></li>
          </ul>
        </div>

      </div>

      {/* Social Media Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', paddingBottom: '20px', borderTop: '1px solid #111', display: 'flex', justifyContent: 'center', gap: '25px' }}>
        <a href="https://www.linkedin.com/in/badri-prasad-a90508227/" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={socialHover} onMouseLeave={socialUnhover} title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={socialHover} onMouseLeave={socialUnhover} title="Twitter / X">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={socialHover} onMouseLeave={socialUnhover} title="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={socialHover} onMouseLeave={socialUnhover} title="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>

      {/* Bottom Footer Details */}
      <div style={{ textAlign: 'center', borderTop: '1px solid #111', paddingTop: '20px', color: '#444', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>© 2026 Badri Prasad Group Holdings. Designed for Global Excellence. All Rights Reserved.</div>
        <div style={{ color: '#333' }}>Confidentiality Notice: This digital infrastructure is protected by advanced cryptographic standards.</div>
      </div>
    </footer>
  );
};

export default Footer;