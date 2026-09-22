// import React, { useState } from 'react';
// import axios from 'axios';
// import { useCompanies } from '../context/CompanyContext'; // 🔥 GLOBAL DATA IMPORT

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', vertical: '', message: '' });
//   const [status, setStatus] = useState('');
  
//   const { companies } = useCompanies(); // 🔥 Fetch Companies from Context

//   const { name, email, vertical, message } = formData;
//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     try {
//       const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/inquiries`, formData);
//       if (res.data.success) {
//         setStatus(' Inquiry Submitted Successfully!');
//         setFormData({ name: '', email: '', vertical: '', message: '' });
//       }
//     } catch (err) {
//       setStatus(` Submission Failed: ${err.response?.data?.message || err.message}`);
//       console.error(err);
//     }
//   };

//   return (
//     <section id="contact" className="container animate-up">
//       <div className="contact-grid">
//           <div>
//               <span className="section-subtitle">Initiate Contact</span>
//               <h2 className="section-title">Partner With Excellence.</h2>
//               <p style={{ color: '#8b9bb4', marginBottom: '20px', lineHeight: '1.6' }}>{status}</p>
//           </div>
//           <div className="about-glass-box">
//               <form onSubmit={onSubmit}>
//                   <div className="form-group">
//                       <input type="text" name="name" value={name} onChange={onChange} className="form-control" placeholder="Full Name" required />
//                   </div>
//                   <div className="form-group">
//                       <input type="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email" required />
//                   </div>
//                   <div className="form-group">
//                       <select name="vertical" value={vertical} onChange={onChange} className="form-control" required>
//                           <option value="">Select Vertical / Subsidiary...</option>
//                           {/*  DYNAMIC DROPDOWN ADMIN PANEL WALA */}
//                           {companies?.map((comp, index) => (
//                             <option key={index} value={comp.name}>{comp.name}</option>
//                           ))}
//                       </select>
//                   </div>
//                   <div className="form-group">
//                       <textarea name="message" value={message} onChange={onChange} className="form-control" placeholder="Your Message" required></textarea>
//                   </div>
//                   <button type="submit" className="btn-gold" style={{ width: '100%' }}>Submit Inquiry</button>
//               </form>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import api from '../api/axios'; // 🔥 DEVIL FIX: Custom Axios instance import kiya
import { useCompanies } from '../context/CompanyContext';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vertical: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 🔥 NEW: Loading state

  const { companies } = useCompanies();

  const { name, email, vertical, message } = formData;
  
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Waking up secure server, please wait...'); // 🔥 UX FIX: Cold start message

    try {
      // 🔥 DEVIL FIX: api instance use kiya, baseURL automatic handle hoga
      const res = await api.post('/api/inquiries', formData);
      
      if (res.data.success) {
        setStatus('✅ Inquiry Submitted Successfully!');
        setFormData({ name: '', email: '', vertical: '', message: '' });
      }
    } catch (err) {
      setStatus(`❌ Submission Failed: ${err.response?.data?.message || err.message}`);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container animate-up">
      <div className="contact-grid">
          <div>
              <span className="section-subtitle">Initiate Contact</span>
              <h2 className="section-title">Partner With Excellence.</h2>
              {/* Status message with color styling based on state */}
              <p style={{ 
                color: status.includes('Failed') ? '#ff4d4d' : status.includes('Successfully') ? '#00e5ff' : '#8b9bb4', 
                marginBottom: '20px', 
                lineHeight: '1.6',
                fontWeight: 'bold'
              }}>
                {status}
              </p>
          </div>
          <div className="about-glass-box">
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                      <input type="text" name="name" value={name} onChange={onChange} className="form-control" placeholder="Full Name" required disabled={isSubmitting} />
                  </div>
                  <div className="form-group">
                      <input type="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email" required disabled={isSubmitting} />
                  </div>
                  <div className="form-group">
                      <select name="vertical" value={vertical} onChange={onChange} className="form-control" required disabled={isSubmitting}>
                          <option value="">Select Vertical / Subsidiary...</option>
                          {companies?.map((comp, index) => (
                            <option key={index} value={comp.name}>{comp.name}</option>
                          ))}
                      </select>
                  </div>
                  <div className="form-group">
                      <textarea name="message" value={message} onChange={onChange} className="form-control" placeholder="Your Message" required disabled={isSubmitting}></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-gold" 
                    style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'Submit Inquiry'}
                  </button>
              </form>
          </div>
      </div>
    </section>
  );
};

export default Contact;