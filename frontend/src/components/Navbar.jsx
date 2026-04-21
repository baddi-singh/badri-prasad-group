import { Link } from 'react-router-dom';

const Navbar = ({ scrollToTop }) => {
  return (
    <nav>
      <Link to="/" onClick={scrollToTop} className="brand-name" style={{ textDecoration: 'none', color: '#fff' }}>
          BADRI<span>PRASAD</span>
      </Link>
      <div className="nav-links">
          <a href="#about">Leadership</a>
          <a href="#ecosystem">Ventures</a>
          <a href="#news">Newsroom</a>
          <a href="#contact">Contact</a>
          <Link to="/page/careers" style={{ color: '#00e5ff' }}>Careers</Link>
          <Link to="/page/investors" style={{ color: '#d4af37', fontWeight: 'bold' }}>Investor Portal</Link>
      </div>
    </nav>
  );
};

export default Navbar;