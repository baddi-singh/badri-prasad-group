const Leadership = () => {
  return (
    <section id="about" className="container animate-up">
      <span className="section-subtitle">Leadership & Governance</span>
      <h2 className="section-title">The Visionary Force.</h2>
      <div className="about-grid" style={{ marginTop: '3rem' }}>
          <div className="leadership-image-wrapper">
              <img src="/ceo-portrait.png" alt="CEO Portrait" className="leadership-img" />
          </div>
          <div>
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px' }}>Badri Prasad</h3>
              <p style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Founder & Chairman</p>
              <p className="section-desc">
                Starting from a deep-rooted expertise in Software Quality Assurance, Mr. Prasad built this conglomerate on one unshakeable principle: <strong>"If the process is flawless, the scale is infinite."</strong>
              </p>
              <div className="quote-box">"We engineer ecosystems that are resilient, transparent, and built to outlast market cycles. Trust is our ultimate currency."</div>
          </div>
      </div>
    </section>
  );
};

export default Leadership;