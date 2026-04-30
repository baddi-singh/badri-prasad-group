import React from 'react';
import Footer from '../components/Footer';

const LeadershipPage = () => {
  const team = [
    { name: 'Rajat Arora', role: 'Chief Technology Officer', entity: 'Badri Digital Solutions' },
    { name: 'Badri Singh', role: 'Head of Operations', entity: 'Badri Travels' },
    { name: 'Aman Singh (Pujari G)', role: 'Managing Director', entity: 'Badri Real Estate' }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      
      {/* Main Content Area */}
      <section className="container animate-up" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Guiding The Vision</span>
          <h2 className="section-title">Board of <span style={{ color: '#D4AF37' }}>Directors</span></h2>
        </div>

        {/* The CEO Profile */}
        <div className="about-glass-box" style={{ padding: '40px', marginBottom: '60px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Avatar Box */}
          <div style={{ 
            width: '250px', 
            height: '250px', 
            background: '#111', 
            border: '1px solid #D4AF37', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto'
          }}>
            <span style={{ fontSize: '72px', color: 'rgba(212, 175, 55, 0.3)', fontWeight: 'bold' }}>BP</span>
          </div>

          {/* Bio Box */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>Badri Prasad</h2>
            <p style={{ color: '#D4AF37', letterSpacing: '2px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
              Founder & Group CEO
            </p>
            <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '20px' }}>
              "At Badri Prasad Group, our vision is not just to build businesses, but to architect ecosystems that empower communities, drive technological advancement, and create sustainable value across the globe."
            </p>
            <p style={{ color: '#888', lineHeight: '1.6' }}>
              With cross-industry expertise, Badri Prasad has led the conglomerate from a single venture into a multi-vertical powerhouse, setting new benchmarks in Real Estate, Technology, and Travel.
            </p>
          </div>
        </div>

        {/* Core Leadership Team */}
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          Executive <span style={{ color: '#D4AF37' }}>Committee</span>
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {team.map((member, index) => (
            <div key={index} className="about-glass-box" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#222', border: '1px solid #444', margin: '0 auto 20px auto' }}></div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{member.name}</h4>
              <p style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '1px', marginTop: '5px' }}>{member.role}</p>
              <p style={{ color: '#666', fontSize: '12px', marginTop: '10px' }}>{member.entity}</p>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;