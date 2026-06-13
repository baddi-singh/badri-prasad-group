import React, { useState } from 'react';
import axios from 'axios';
import { useCompanies } from '../context/CompanyContext'; // 🔥 GLOBAL DATA IMPORT KIYA

const Careers = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', targetCompany: '', role: '' });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');

  const { companies } = useCompanies(); // 🔥 LIVE DATA FROM ADMIN DASHBOARD

  const { fullName, email, phone, targetCompany, role } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFileChange = (e) => setResume(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting Application...');
    if (!resume) { setStatus('❌ Please upload your resume (PDF only).'); return; }

    const submitData = new FormData();
    submitData.append('fullName', fullName); submitData.append('email', email);
    submitData.append('phone', phone); submitData.append('targetCompany', targetCompany);
    submitData.append('role', role); submitData.append('resume', resume);

    try {
      // 🔥 FIX: Single Quotes (') hata kar Backticks (`) lagaye hain
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/careers`, submitData, { headers: { 'Content-Type': 'multipart/form-data' } });
      
      if (res.data.success) {
        setStatus('✅ Application Submitted Successfully!');
        setFormData({ fullName: '', email: '', phone: '', targetCompany: '', role: '' });
        setResume(null); document.getElementById('resume-upload').value = '';
      }
    } catch (err) {
      setStatus(`❌ Submission Failed: ${err.response?.data?.message || 'Try again.'}`);
    }
  };

  return (
    <section id="careers" className="container animate-up">
      <div className="contact-grid">
          <div>
              <span className="section-subtitle">Join The Vision</span>
              <h2 className="section-title">Build The Future.</h2>
              <p style={{ color: '#aaa', marginBottom: '20px', lineHeight: '1.6' }}>We are always looking for exceptional talent...</p>
              {status && <p style={{ color: '#d4af37', marginBottom: '10px', fontWeight: 'bold' }}>{status}</p>}
          </div>
          <div className="about-glass-box">
              <form onSubmit={onSubmit}>
                  <div className="form-group"><input type="text" name="fullName" value={fullName} onChange={onChange} className="form-control" placeholder="Full Name" required /></div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div className="form-group" style={{ flex: 1 }}><input type="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email Address" required /></div>
                    <div className="form-group" style={{ flex: 1 }}><input type="text" name="phone" value={phone} onChange={onChange} className="form-control" placeholder="Phone Number" required /></div>
                  </div>
                  <div className="form-group">
                      {/* 🔥 DYNAMIC DROPDOWN ADMIN PANEL SE */}
                      <select name="targetCompany" value={targetCompany} onChange={onChange} className="form-control" required>
                          <option value="">Select Vertical / Subsidiary...</option>
                          {companies?.map((comp) => (
                            <option key={comp._id} value={comp.name}>{comp.name}</option>
                          ))}
                      </select>
                  </div>
                  <div className="form-group"><input type="text" name="role" value={role} onChange={onChange} className="form-control" placeholder="Desired Role" required /></div>
                  <div className="form-group" style={{ border: '1px dashed #d4af37', padding: '15px', borderRadius: '5px', textAlign: 'center' }}>
                      <label style={{ color: '#ccc', cursor: 'pointer', display: 'block' }}>
                        {resume ? `📄 ${resume.name}` : '📎 Click to Upload Resume (PDF Only)'}
                        <input type="file" id="resume-upload" name="resume" accept=".pdf" onChange={onFileChange} style={{ display: 'none' }} required />
                      </label>
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '10px' }}>Submit Application</button>
              </form>
          </div>
      </div>
    </section>
  );
};

export default Careers;






// import { useState } from 'react';
// import axios from 'axios';

// const Careers = () => {
//   // Form State
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     targetCompany: '',
//     role: ''
//   });
  
//   const [resume, setResume] = useState(null); // File ke liye alag state
//   const [status, setStatus] = useState('');

//   const { fullName, email, phone, targetCompany, role } = formData;

//   // Backend mein jo exact naam hain, wahi dropdown mein chahiye
//   const companies = [
//     'Badri Digital Solutions',
//     'Badri Smart Integrations', 
//     'Badri Real Estate', 
//     'Badri Venture Studio', 
//     'Badri Travels', 
//     'Social Tailors & Textile',
//     'Social Tailors' 
    
//   ];

//   // Input Handlers
//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
//   // File Handler (Sirf pehli file select karega)
//   const onFileChange = (e) => setResume(e.target.files[0]);

//   // Submit Handler
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Submitting Application...');

//     if (!resume) {
//       setStatus('❌ Please upload your resume (PDF only).');
//       return;
//     }

//     // Resume bhejne ke liye 'FormData' object zaroori hai (JSON nahi chalega)
//     const submitData = new FormData();
//     submitData.append('fullName', fullName);
//     submitData.append('email', email);
//     submitData.append('phone', phone);
//     submitData.append('targetCompany', targetCompany);
//     submitData.append('role', role);
//     submitData.append('resume', resume); // File attach kar di

//     try {
//       const res = await axios.post('${import.meta.env.VITE_API_URL}/api/careers/apply', submitData, {
//         headers: {
//           'Content-Type': 'multipart/form-data' // Ye browser ko batata hai ki file ja rahi hai
//         }
//       });
      
//       if (res.data.success) {
//         setStatus('✅ Application Submitted Successfully!');
//         // Clear form
//         setFormData({ fullName: '', email: '', phone: '', targetCompany: '', role: '' });
//         setResume(null);
//         document.getElementById('resume-upload').value = ''; // Input clear karna
//       }
//     } catch (err) {
//       setStatus(`❌ Submission Failed: ${err.response?.data?.message || 'Try again.'}`);
//       console.error(err);
//     }
//   };

//   return (
//     <section id="careers" className="container animate-up">
//       <div className="contact-grid">
//           <div>
//               <span className="section-subtitle">Join The Vision</span>
//               <h2 className="section-title">Build The Future.</h2>
//               <p style={{ color: '#aaa', marginBottom: '20px', lineHeight: '1.6' }}>
//                 We are always looking for exceptional talent to join our ecosystem. Select a vertical and upload your portfolio or resume to initiate the process.
//               </p>
//               {status && <p style={{ color: '#d4af37', marginBottom: '10px', fontWeight: 'bold' }}>{status}</p>}
//           </div>

//           <div className="about-glass-box">
//               <form onSubmit={onSubmit}>
//                   <div className="form-group">
//                       <input type="text" name="fullName" value={fullName} onChange={onChange} className="form-control" placeholder="Full Name" required />
//                   </div>
                  
//                   <div style={{ display: 'flex', gap: '15px' }}>
//                     <div className="form-group" style={{ flex: 1 }}>
//                         <input type="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email Address" required />
//                     </div>
//                     <div className="form-group" style={{ flex: 1 }}>
//                         <input type="text" name="phone" value={phone} onChange={onChange} className="form-control" placeholder="Phone Number" required />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                       <select name="targetCompany" value={targetCompany} onChange={onChange} className="form-control" required>
//                           <option value="">Select Vertical / Subsidiary...</option>
//                           {companies.map((comp, index) => (
//                             <option key={index} value={comp}>{comp}</option>
//                           ))}
//                       </select>
//                   </div>

//                   <div className="form-group">
//                       <input type="text" name="role" value={role} onChange={onChange} className="form-control" placeholder="Desired Role (e.g. Senior Backend Engineer)" required />
//                   </div>

//                   {/* File Upload UI */}
//                   <div className="form-group" style={{ border: '1px dashed #d4af37', padding: '15px', borderRadius: '5px', textAlign: 'center' }}>
//                       <label style={{ color: '#ccc', cursor: 'pointer', display: 'block' }}>
//                         {resume ? `📄 ${resume.name}` : '📎 Click to Upload Resume (PDF Only)'}
//                         <input 
//                           type="file" 
//                           id="resume-upload"
//                           name="resume" 
//                           accept=".pdf" 
//                           onChange={onFileChange} 
//                           style={{ display: 'none' }} 
//                           required 
//                         />
//                       </label>
//                   </div>

//                   <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '10px' }}>Submit Application</button>
//               </form>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default Careers;