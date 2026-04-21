import { Link } from 'react-router-dom';
import { VENTURES_DATA } from '../data/constants';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="container animate-up">
      <span className="section-subtitle">Our Subsidiaries</span>
      <h2 className="section-title">The Badri Ecosystem</h2>
      <div className="core-scroll-container" style={{ marginTop: '3rem' }}>
          {VENTURES_DATA.map(venture => (
              <div className="glass-card" key={venture.id}>
                  <span className="section-subtitle" style={{ fontSize: '0.75rem' }}>{venture.category}</span>
                  <h3>{venture.title}</h3>
                  <p>{venture.desc}</p>
                  <Link to={venture.linkUrl} className="explore-link">{venture.linkText} &rarr;</Link>
              </div>
          ))}
      </div>
    </section>
  );
};

export default Ecosystem;