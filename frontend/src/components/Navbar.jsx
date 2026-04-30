import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Current page pata karne ke liye

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <Link to="/" onClick={handleScrollToTop} className="brand-name" style={{ textDecoration: 'none', color: '#fff' }}>
          BADRI<span>PRASAD</span>
      </Link>
      <div className="nav-links">
          
          {/* FIX: Ab ye seedha aapke Leadership page par jayega aur Golden highlight hoga! */}
          <Link 
            to="/leadership" 
            onClick={handleScrollToTop} 
            style={{ color: location.pathname === '/leadership' ? '#D4AF37' : '#fff' }}
          >
            Leadership
          </Link>
          
          <Link to="/ventures" style={{ color: location.pathname === '/ventures' ? '#D4AF37' : '#fff' }}>Ventures</Link>
          <Link to="/newsroom" style={{ color: location.pathname === '/newsroom' ? '#D4AF37' : '#fff' }}>Newsroom</Link>
          <Link to="/contact" style={{ color: location.pathname === '/contact' ? '#D4AF37' : '#fff' }}>CONTACT</Link>
          
          {/* Dynamic Highlights */}
          <Link to="/careers" style={{ color: location.pathname === '/careers' ? '#D4AF37' : '#fff' }}>Careers</Link>
          <Link to="/investors" style={{ color: location.pathname === '/investors' ? '#d4af37' : '#fff', fontWeight: 'bold' }}>Investor Portal</Link>
          
          <Link 
            to="/admin" 
            style={{ 
              color: '#fff', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid #D4AF37', padding: '6px 14px', 
              borderRadius: '6px', fontSize: '11px', fontWeight: '900', letterSpacing: '1px', textDecoration: 'none',
              marginLeft: '15px', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.target.style.background = '#D4AF37'; e.target.style.color = '#000'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(212, 175, 55, 0.1)'; e.target.style.color = '#fff'; }}
          >
            HQ PORTAL <span style={{ marginLeft: '4px' }}>🔒</span>
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;









// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation(); // Current page pata karne ke liye
//   const navigate = useNavigate(); // Dusre page se Home par aane ke liye

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Ye function URL ko clean rakhega aur smooth scroll karega
//   const handleScrollToSection = (e, sectionId) => {
//     e.preventDefault();
//     if (location.pathname !== '/') {
//       // Agar kisi aur page par hain, toh pehle Home par jao, fir thoda ruk kar scroll karo
//       navigate('/');
//       setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 200);
//     } else {
//       // Agar Home page par hi hain, toh seedha scroll karo
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav>
//       <Link to="/" onClick={handleScrollToTop} className="brand-name" style={{ textDecoration: 'none', color: '#fff' }}>
//           BADRI<span>PRASAD</span>
//       </Link>
//       <div className="nav-links">
//           {/* Hash Link Removed: Now using Smart Button for clean URL */}
//           <button 
//             onClick={(e) => handleScrollToSection(e, 'leadership')} 
//             className="nav-item" 
//             style={{ 
//               background: 'none', 
//               border: 'none', 
//               color: '#fff', 
//               fontSize: '13.6px', // Matches standard link size
//               textTransform: 'uppercase', 
//               cursor: 'pointer', 
//               fontFamily: 'inherit', 
//               letterSpacing: '1px',
//               padding: '0', // Reset button padding
//               marginLeft: '3rem' // Matches spacing of other a/Link tags in your CSS
//             }}
//           >
//             Leadership
//           </button>
          
//           <Link to="/ventures" style={{ color: location.pathname === '/ventures' ? '#D4AF37' : '#fff' }}>Ventures</Link>
//           <Link to="/newsroom" style={{ color: location.pathname === '/newsroom' ? '#D4AF37' : '#fff' }}>Newsroom</Link>
//           <Link to="/contact" style={{ color: location.pathname === '/contact' ? '#D4AF37' : '#fff' }}>CONTACT</Link>
          
//           {/* Dynamic Highlights */}
//           <Link to="/careers" style={{ color: location.pathname === '/careers' ? '#D4AF37' : '#fff' }}>Careers</Link>
//           <Link to="/investors" style={{ color: location.pathname === '/investors' ? '#d4af37' : '#fff', fontWeight: 'bold' }}>Investor Portal</Link>
          
//           <Link 
//             to="/admin" 
//             style={{ 
//               color: '#fff', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid #D4AF37', padding: '6px 14px', 
//               borderRadius: '6px', fontSize: '11px', fontWeight: '900', letterSpacing: '1px', textDecoration: 'none',
//               marginLeft: '15px', transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => { e.target.style.background = '#D4AF37'; e.target.style.color = '#000'; }}
//             onMouseLeave={(e) => { e.target.style.background = 'rgba(212, 175, 55, 0.1)'; e.target.style.color = '#fff'; }}
//           >
//             HQ PORTAL <span style={{ marginLeft: '4px' }}>🔒</span>
//           </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;