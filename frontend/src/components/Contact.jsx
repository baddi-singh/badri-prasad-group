import { VENTURES_DATA } from '../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="container animate-up">
      <div className="contact-grid">
          <div>
              <span className="section-subtitle">Initiate Contact</span>
              <h2 className="section-title">Partner With Excellence.</h2>
              <p className="section-desc">Whether you are looking for enterprise software validation, corporate fleet tie-ups, or bulk textile manufacturing, our team is ready to scale your vision.</p>
              
              <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ color: '#fff', marginBottom: '5px' }}>Global Headquarters</h4>
                  <p style={{ color: '#8b9bb4', marginBottom: '20px' }}>Near MDC Sector 5, Kishangarh<br/>Chandigarh IT Park Region, India</p>
                  
                  <h4 style={{ color: '#fff', marginBottom: '5px' }}>Direct Inquiry</h4>
                  <p style={{ color: '#8b9bb4' }}>investors@badriprasadgroup.com</p>
              </div>
          </div>

          <div className="about-glass-box">
              <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Full Name / Company Name" required />
                  </div>
                  <div className="form-group">
                      <input type="email" className="form-control" placeholder="Corporate Email Address" required />
                  </div>
                  <div className="form-group">
                      <select className="form-control" style={{ appearance: 'none' }} required>
                          <option value="">Select Vertical of Interest...</option>
                          {VENTURES_DATA.map(v => (
                              <option key={v.id} value={v.id}>{v.title}</option>
                          ))}
                          <option value="careers">Careers / Talent Acquisition</option>
                          <option value="general_invest">General Investment / Partnership</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <textarea className="form-control" placeholder="How can we collaborate?" required></textarea>
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: '100%' }}>Submit Inquiry</button>
              </form>
          </div>
      </div>
    </section>
  );
};

export default Contact;