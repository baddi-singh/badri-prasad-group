import { Link } from 'react-router-dom';

const CSR = () => {
  return (
    <section className="container animate-up">
        <div className="csr-box">
            <span className="section-subtitle" style={{ color: '#2e8b57' }}>Corporate Social Responsibility</span>
            <h2 className="section-title">Pioneering a Greener Tomorrow.</h2>
            <p className="section-desc" style={{ margin: '0 auto 2rem', color: '#a0bfa0' }}>
                Scale means nothing without sustainability. By 2030, Badri Travels commits to a <strong>100% Electric Vehicle (EV) Fleet</strong>, while Social Tailors is actively implementing Zero-Waste Fabric Recycling protocols across all manufacturing units.
            </p>
            <Link to="/page/sustainability" className="btn-gold" style={{ borderColor: '#2e8b57', color: '#2e8b57' }}>Read Our 2030 Green Vision</Link>
        </div>
    </section>
  );
};

export default CSR;