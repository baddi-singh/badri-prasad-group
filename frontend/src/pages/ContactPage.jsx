import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Tumhare code ke hisaab se added (agar Navbar needed ho to)
import Footer from '../components/Footer'; 
import { useCompanies } from '../context/CompanyContext'; // 🔥 GLOBAL DATA IMPORT

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vertical: '', message: '' });
  const [loading, setLoading] = useState(false);

  const { companies } = useCompanies(); // 🔥 Fetch Companies dynamically

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/inquiries`, formData);
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
      {/* Agar Navbar component yahan dikhana tha toh zaroor rakhna, warna hta dena. Maine safety ke liye add kar diya hai */}
      <div className="pt-10 pb-20">
        <section style={{ padding: '100px 5%', color: '#fff' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Initiate Contact</span>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>Partner With Excellence.</h1>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input 
                type="text" name="name" placeholder="Full Name" required
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />
              <input 
                type="email" name="email" placeholder="Email" required
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px' }}
              />
              
              <select 
                name="vertical" required value={formData.vertical} onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '6px', appearance: 'auto' }}
              >
                <option value="">Select Vertical / Subsidiary...</option>
                {/* 🔥 DYNAMIC DROPDOWN ADMIN PANEL WALA */}
                {companies?.map(comp => (
                  <option key={comp._id} value={comp.name}>{comp.name}</option>
                ))}
              </select>

              <textarea 
                name="message" placeholder="Message" rows="5" required
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