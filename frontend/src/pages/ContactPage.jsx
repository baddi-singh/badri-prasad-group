import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vertical: '', message: '' });
  const [companies, setCompanies] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/companies');
        setCompanies(res.data.data);
      } catch (err) {
        console.error("Failed to fetch companies", err); 
      }
    };
    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // EXACT BACKEND MATCH: /api/inquiries
      await axios.post('http://localhost:5001/api/inquiries', formData);
      alert('Inquiry Submitted Successfully!');
      setFormData({ name: '', email: '', vertical: '', message: '' });
    } catch (err) {
      console.error("Submit Error:", err); 
      alert('Failed to submit inquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505' }}>
      <div className="pt-10 pb-20">
        <section style={{ padding: '100px 5%', color: '#fff' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Initiate Contact</span>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>Partner With Excellence.</h1>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input 
                type="text" placeholder="Full Name" required
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />
              <input 
                type="email" placeholder="Email" required
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />
              
              <select 
                required value={formData.vertical} onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px', appearance: 'auto' }}
              >
                <option value="">Select Vertical / Subsidiary...</option>
                {companies.map(comp => (
                  <option key={comp._id} value={comp.name}>{comp.name}</option>
                ))}
              </select>

              <textarea 
                placeholder="Message" rows="5" required
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              ></textarea>
              
              <button type="submit" disabled={loading} style={{ background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', padding: '15px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;