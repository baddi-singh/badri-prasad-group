import React from 'react';
import Footer from '../components/Footer';

const Sustainability = () => {
  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '100vh' }}>
      <section style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '1000px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        
        {/* Header */}
        <div className="animate-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#2e7d32', letterSpacing: '3px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Our Commitment to Earth
          </span>
          <h1 style={{ fontSize: '56px', fontWeight: '900', marginTop: '10px' }}>
            2030 <span style={{ color: '#4caf50' }}>Green Vision</span>
          </h1>
          <div style={{ width: '60px', height: '4px', background: '#4caf50', margin: '30px auto' }}></div>
        </div>

        {/* Content Section */}
        <div className="animate-up" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '50px', borderRadius: '20px', lineHeight: '1.8' }}>
          <h2 style={{ color: '#4caf50', fontSize: '24px', marginBottom: '20px' }}>Pioneering a Greener Tomorrow</h2>
          <p style={{ color: '#aaa', fontSize: '17px', marginBottom: '30px' }}>
            At Badri Prasad Group, scale means nothing without sustainability. Our 2030 roadmap is not just a plan, it's a pledge to the future generations. We are integrating eco-conscious protocols across every subsidiary, from logistics to manufacturing.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {/* Pillar 1 */}
            <div style={{ padding: '25px', background: '#111', borderRadius: '12px', borderLeft: '4px solid #4caf50' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>EV Fleet Transition</h4>
              <p style={{ color: '#777', fontSize: '14px' }}>By 2030, Badri Travels commits to a 100% Electric Vehicle (EV) fleet, reducing carbon footprint by 40%.</p>
            </div>
            
            {/* Pillar 2 */}
            <div style={{ padding: '25px', background: '#111', borderRadius: '12px', borderLeft: '4px solid #4caf50' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>Zero-Waste Fabric</h4>
              <p style={{ color: '#777', fontSize: '14px' }}>Social Tailors is implementing recycling protocols to ensure zero fabric waste across manufacturing units.</p>
            </div>

            {/* Pillar 3 */}
            <div style={{ padding: '25px', background: '#111', borderRadius: '12px', borderLeft: '4px solid #4caf50' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>Renewable Energy</h4>
              <p style={{ color: '#777', fontSize: '14px' }}>All corporate offices will transition to 100% solar and wind energy sources within the next decade.</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="/" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
            ← BACK TO ECOSYSTEM
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;