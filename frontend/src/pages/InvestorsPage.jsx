import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // 🔥 Navbar Wapas Add Kar Diya
import Footer from '../components/Footer';

const InvestorsPage = () => {
  const [formData, setFormData] = useState({ firm: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // STATE PREPARED FOR BACKEND
  const [metrics, setMetrics] = useState({ assets: "...", growth: "...", markets: "...", portfolio: "..." });
  const [reports, setReports] = useState([]);

  // FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchInvestorData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/investors`);
        if (res.data && res.data.success && res.data.data) {
          if (res.data.data.metrics) setMetrics(res.data.data.metrics);
          if (res.data.data.reports) setReports(res.data.data.reports);
        }
      } catch (err) { 
        console.error("Investor Data Error:", err); 
      }
    };
    fetchInvestorData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/inquiries`, {
        name: formData.firm, email: formData.email, vertical: 'INVESTOR RELATIONS', message: formData.message
      });
      alert('Proposal Submitted Successfully. Our Strategy Desk will contact you shortly.');
      setFormData({ firm: '', email: '', message: '' });
    } catch (err) {
      console.error("Form Submit Error:", err); // 🔥 FIX: `err` ko yahan print kar diya, warning gayab
      alert('Failed to submit proposal. Please try again.');
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505' }}>
      <Navbar /> {/* 🔥 NAVBAR WAPAS */}
      
      <style>{`
        .metric-card { background: rgba(15,15,15,0.6); border: 1px solid #222; border-top: 2px solid #D4AF37; padding: 40px 20px; text-align: center; border-radius: 8px; transition: all 0.4s ease; }
        .metric-card:hover { transform: translateY(-8px); border-color: #D4AF37; box-shadow: 0 15px 30px rgba(212,175,55,0.08); background: #111; }
        .metric-card.cyan-top { border-top: 2px solid #00e5ff; }
        .metric-card.cyan-top:hover { border-color: #00e5ff; box-shadow: 0 15px 30px rgba(0,229,255,0.08); }
        .report-row { background: #0a0a0a; border: 1px solid #1a1a1a; padding: 25px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; transition: all 0.3s ease; }
        .report-row:hover { background: #111; border-color: #333; transform: translateX(5px); border-left: 3px solid #D4AF37; }
        .vip-input { width: 100%; padding: 15px; background: #0a0a0a; border: 1px solid #333; color: #fff; border-radius: 6px; font-size: 13px; outline: none; transition: 0.3s; margin-bottom: 15px; font-family: inherit; }
        .vip-input:focus { border-color: #D4AF37; background: #111; }
        .vip-btn { width: 100%; padding: 15px; background: #D4AF37; color: #000; font-weight: 900; letter-spacing: 2px; font-size: 12px; border: none; border-radius: 6px; cursor: pointer; transition: 0.3s; }
        .vip-btn:hover:not(:disabled) { background: #e6c245; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(212,175,55,0.3); }
        .vip-btn:disabled { opacity: 0.7; cursor: not-allowed; }
      `}</style>

      {/* 🔥 PADDING AND MARGINS RESTORED */}
      <section className="container animate-up" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#00e5ff', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>Private Access</span>
          <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#fff', margin: '15px 0' }}>Investor <span style={{ color: '#D4AF37' }}>Relations</span></h1>
          <p style={{ color: '#888', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8', fontSize: '15px' }}>
            Empowering global stakeholders with transparency, sustainable growth metrics, and exclusive insights into the expanding Badri Prasad ecosystem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', marginBottom: '80px' }}>
          <div className="metric-card"><h3 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{metrics.assets}</h3><p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold' }}>Assets Under Mgt.</p></div>
          <div className="metric-card cyan-top"><h3 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{metrics.growth}</h3><p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold' }}>YoY Revenue Growth</p></div>
          <div className="metric-card"><h3 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{metrics.markets}</h3><p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold' }}>Global Markets</p></div>
          <div className="metric-card cyan-top"><h3 style={{ fontSize: '42px', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{metrics.portfolio}</h3><p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold' }}>Portfolio Assets</p></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
              Financial <span style={{ color: '#D4AF37', marginLeft: '8px' }}>Disclosures</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {reports.map((report) => (
                <div key={report._id} className="report-row">
                  <div>
                    <h4 style={{ color: '#fff', fontWeight: 'bold', fontSize: '15px', marginBottom: '5px' }}>{report.title}</h4>
                    <span style={{ color: '#666', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
                      FY {report.year} &nbsp;•&nbsp; FILE ({report.fileSize})
                    </span>
                  </div>
                  <a 
                    href={report.fileUrl.startsWith('http') ? report.fileUrl : `${import.meta.env.VITE_API_URL.replace('/api', '')}/${report.fileUrl}`} 
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: '#D4AF37', background: 'transparent', border: '1px solid #D4AF37', padding: '10px 20px', borderRadius: '4px', fontSize: '10px', fontWeight: '900', letterSpacing: '1px', textDecoration: 'none', transition: '0.3s' }}
                  >
                    DOWNLOAD
                  </a>
                </div>
              ))}
              {reports.length === 0 && <p style={{color: '#666'}}>No reports available yet.</p>}
            </div>
          </div>

          <div style={{ background: '#111', border: '1px solid #222', padding: '40px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '10px', color: '#fff' }}>
              Partnership <span style={{ color: '#00e5ff' }}>Inquiries</span>
            </h3>
            <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '30px', lineHeight: '1.6' }}>
              Institutional investors, wealth funds, and venture partners can directly connect with our Corporate Strategy desk here.
            </p>
            
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Firm / Institution Name" required className="vip-input" value={formData.firm} onChange={(e) => setFormData({...formData, firm: e.target.value})} />
              <input type="email" placeholder="Official Email Address" required className="vip-input" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <textarea placeholder="Investment Thesis / Strategic Proposal" required className="vip-input" rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              <button type="submit" className="vip-btn" disabled={loading}>
                {loading ? 'TRANSMITTING...' : 'SUBMIT PROPOSAL'}
              </button>
            </form>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;