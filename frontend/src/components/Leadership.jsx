import React from 'react';
import { BOARD_OF_DIRECTORS, EXECUTIVE_COMMITTEE } from '../utils/leadershipData';

const Leadership = () => {
  return (
    <section id="leadership" style={{ padding: '100px 5%', background: '#050505', color: '#fff', minHeight: '100vh' }}>
      
      {/* --- Board of Directors Header --- */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }} className="animate-up">
        <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
          Board of <span style={{ color: '#D4AF37' }}>Directors</span>
        </h2>
      </div>

      {/* --- Main Founder Card (Now coming from File) --- */}
      <div className="animate-up" style={{ maxWidth: '1000px', margin: '0 auto 80px', background: '#111', border: '1px solid #333', borderRadius: '12px', padding: '40px', display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ width: '120px', height: '120px', background: '#0a0a0a', border: '1px solid #D4AF37', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '36px', fontWeight: 'bold', color: '#D4AF37', flexShrink: 0, margin: '0 auto' }}>
          {BOARD_OF_DIRECTORS.initial}
        </div>
        <div style={{ flex: 1, textAlign: 'left', minWidth: '300px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '5px' }}>{BOARD_OF_DIRECTORS.name}</h3>
          <p style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            {BOARD_OF_DIRECTORS.designation}
          </p>
          <p style={{ color: '#aaa', fontStyle: 'italic', lineHeight: '1.6', borderLeft: '2px solid #D4AF37', paddingLeft: '15px' }}>
            {BOARD_OF_DIRECTORS.quote}
          </p>
        </div>
      </div>

      {/* --- Executive Committee Header --- */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }} className="animate-up">
        <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Executive <span style={{ color: '#D4AF37' }}>Committee</span>
        </h3>
        <div style={{ width: '40px', height: '2px', background: '#D4AF37', margin: '15px auto 0' }}></div>
      </div>

      {/* --- Dynamic Executive Grid (Now coming from File) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {EXECUTIVE_COMMITTEE.map((member, index) => (
          <div key={index} className="animate-up" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '8px', padding: '30px 20px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'default' }}
               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            
            {/* Profile Avatar */}
            <div style={{ width: '70px', height: '70px', background: '#111', border: '1px solid #333', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', color: '#555', fontWeight: 'bold' }}>
              {member.initial}
            </div>
            
            {/* Info */}
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#fff' }}>{member.name}</h4>
            <p style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
              {member.designation}
            </p>
            <p style={{ color: '#666', fontSize: '11px' }}>{member.company}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Leadership;




//<div className="animate-up about-glass-box" style={{ /* baaki style same */ }}>

