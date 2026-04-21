import { Link } from 'react-router-dom';
import { VENTURES_DATA } from '../data/constants';

const Footer = ({ scrollToTop }) => {
  return (
    <footer>
      <div className="container" style={{ padding: '0', maxWidth: '1300px' }}>
          <div className="footer-flex">
              <div className="footer-col" style={{ flex: '2', minWidth: '300px' }}>
                  <Link to="/" onClick={scrollToTop} className="brand-name" style={{ marginBottom: '20px', display: 'inline-block', textDecoration: 'none', color: '#fff' }}>
                      BADRI<span>PRASAD</span>
                  </Link>
                  <p style={{ maxWidth: '300px' }}>A diversified global conglomerate setting the standard in Tech, Transit, Textiles, and Infrastructure.</p>
              </div>
              <div className="footer-col" style={{ flex: '1', minWidth: '150px' }}>
                  <h4>Company</h4>
                  <Link to="/page/leadership">Leadership</Link>
                  <Link to="/page/careers" style={{ color: '#00e5ff' }}>Careers</Link>
                  <Link to="/page/sustainability">CSR Vision 2030</Link>
                  <Link to="/page/press">Press Room</Link>
              </div>
              <div className="footer-col" style={{ flex: '1', minWidth: '150px' }}>
                  <h4>Legal</h4>
                  <Link to="/page/privacy">Privacy Policy</Link>
                  <Link to="/page/terms">Terms of Service</Link>
                  <Link to="/page/compliance">Compliance</Link>
              </div>
          </div>
          <div style={{ textAlign: 'center', color: '#555', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              &copy; 2026 Badri-Prasad Group. Engineered with precision.
          </div>
      </div>
    </footer>
  );
};

export default Footer;