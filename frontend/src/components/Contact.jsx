import { SUBSIDIARY_NAMES } from '../utils/ecosystem';
import { useState } from 'react';
import axios from 'axios';
import { BADRI_ECOSYSTEM } from '../utils/constants'; // <-- IMPORT KIYA
// import { SUBSIDIARY_NAMES } from '../utils/ecosystem';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vertical: '', message: '' });
  const [status, setStatus] = useState('');

  const { name, email, vertical, message } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Dhyan dein: backend port 5001 par hai
      const res = await axios.post('http://localhost:5001/api/inquiries', formData);
      if (res.data.success) {
        setStatus('✅ Inquiry Submitted Successfully!');
        setFormData({ name: '', email: '', vertical: '', message: '' });
      }
    } catch (err) {
      setStatus(`❌ Submission Failed: ${err.response?.data?.message || err.message}`);
      console.error(err);
    }
  };

  return (
    <section id="contact" className="container animate-up">
      <div className="contact-grid">
          <div>
              <span className="section-subtitle">Initiate Contact</span>
              <h2 className="section-title">Partner With Excellence.</h2>
              <p style={{ color: '#8b9bb4', marginBottom: '20px', lineHeight: '1.6' }}>{status}</p>
          </div>
          <div className="about-glass-box">
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                      <input type="text" name="name" value={name} onChange={onChange} className="form-control" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                      <input type="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                      {/* DYNAMIC DROPDOWN */}
                      <select name="vertical" value={vertical} onChange={onChange} className="form-control" required>
                          <option value="">Select Vertical / Subsidiary...</option>
                          {BADRI_ECOSYSTEM.map((comp, index) => (
                            <option key={index} value={comp}>{comp}</option>
                          ))}
                      </select>
                  </div>
                  <div className="form-group">
                      <textarea name="message" value={message} onChange={onChange} className="form-control" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: '100%' }}>Submit Inquiry</button>
              </form>
          </div>
      </div>
    </section>
  );
};
export default Contact;













// import { useState } from 'react';
// import axios from 'axios';
// import { VENTURES_DATA } from '../data/constants';

// const Contact = () => {
//   // Form State
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     vertical: '',
//     message: ''
//   });

//   const [status, setStatus] = useState(''); // Success/Error message dikhane ke liye

//   const { name, email, vertical, message } = formData;

//   // Input Change Handler
//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   // Form Submit Handler
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     try {
//       // Backend API Call (Port 50001)
//       const res = await axios.post('http://localhost:5001/api/inquiries', formData);
      
//       if (res.data.success) {
//         setStatus('✅ Inquiry Submitted Successfully!');
//         setFormData({ name: '', email: '', vertical: '', message: '' }); // Form clear
//       }
//     } catch (err) {
//       setStatus('❌ Submission Failed. Try again.');
//       console.error(err);
//     }
//   };

//   return (
//     <section id="contact" className="container animate-up">
//       <div className="contact-grid">
//           <div>
//               <span className="section-subtitle">Initiate Contact</span>
//               <h2 className="section-title">Partner With Excellence.</h2>
//               {status && <p style={{ color: '#d4af37', marginBottom: '10px' }}>{status}</p>}
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
//                           <option value="">Select Vertical...</option>
//                           {VENTURES_DATA.map(v => (<option key={v.id} value={v.title}>{v.title}</option>))}
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