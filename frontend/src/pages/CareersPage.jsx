import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const CareersPage = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', targetCompany: '', role: '' });
  const [resume, setResume] = useState(null);
  const [companies, setCompanies] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies');
        setCompanies(res.data.data);
      } catch (err) {
        console.error("Failed to fetch companies", err);
      }
    };
    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return alert("Please upload a PDF resume.");
    
    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append('resume', resume); // PDF Attach ho gayi

    try {
      // BUG FIX: Removed manual 'Content-Type' header. Axios + Browser will handle the boundary automatically.
      await axios.post('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/careers', data);
      
      alert('Application Submitted Successfully!');
      
      // Clear Form & File State
      setFormData({ fullName: '', email: '', phone: '', targetCompany: '', role: '' });
      setResume(null);
      // Clear the actual file input field visually
      const fileInput = document.getElementById('resume-upload-input');
      if (fileInput) fileInput.value = '';

    } catch (err) {
      console.error("Application Error:", err);
      alert(`Failed to submit application: ${err.response?.data?.message || 'Server Error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505' }}>
      <div className="pt-10 pb-20">
        <section style={{ padding: '100px 5%', color: '#fff' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Join The Vision</span>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>Build The Future.</h1>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input 
                type="text" placeholder="Full Name" required
                value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input 
                  type="email" placeholder="Email Address" required
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
                />
                <input 
                  type="tel" placeholder="Phone Number" required
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
                />
              </div>

              <select 
                required value={formData.targetCompany} onChange={(e) => setFormData({...formData, targetCompany: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px', appearance: 'auto' }}
              >
                <option value="">Select Target Company...</option>
                {companies.map(comp => (
                  <option key={comp._id} value={comp.name}>{comp.name}</option>
                ))}
              </select>

              <input 
                type="text" placeholder="Desired Role" required
                value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />

              <div style={{ background: '#111', border: '1px dashed #D4AF37', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                <label style={{ cursor: 'pointer', color: '#D4AF37' }}>
                  📎 Click to Upload Resume (PDF Only)
                  {/* BUG FIX: Added ID so we can clear it properly after submission */}
                  <input id="resume-upload-input" type="file" accept=".pdf" required onChange={(e) => setResume(e.target.files[0])} style={{ display: 'none' }} />
                </label>
                {resume && <div style={{ marginTop: '10px', fontSize: '12px', color: '#00e5ff' }}>{resume.name}</div>}
              </div>
              
              <button type="submit" disabled={loading} style={{ background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', padding: '15px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;