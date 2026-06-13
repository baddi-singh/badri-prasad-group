// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Footer from '../components/Footer';

// const VenturesPage = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         //const res = await axios.get('${import.meta.env.VITE_API_URL}/api/companies');
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//         //const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//         setCompanies(res.data.data);
//       } catch (err) { 
//         console.error("Failed to load ventures", err); 
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // FIX: Naya click logic
//   const handleEntityClick = (url) => {
//     if(url && url.trim() !== '') {
//       window.open(url, '_blank');
//     } else {
//       alert('Detailed website for this entity is currently under development!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <section className="container animate-up" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        
//         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//           <span className="section-subtitle">Our Global Portfolio</span>
//           <h2 className="section-title">The <span style={{ color: '#D4AF37' }}>Ventures</span></h2>
//           <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>
//             A diversified conglomerate driving innovation across distinct sectors. Explore the pillars of the Badri Prasad Group.
//           </p>
//         </div>

//         {companies?.length === 0 ? (
//           <div style={{textAlign: 'center', color: '#D4AF37'}}>Loading Ecosystem Data...</div>
//         ) : (
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
//             {companies?.map((venture, index) => (
//               <div key={index} className="about-glass-box" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
//                   <span style={{ color: '#00e5ff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
//                     {venture.vertical}
//                   </span>
//                   <span style={{ fontSize: '10px', background: venture.status === 'Operational' ? '#111' : '#D4AF37', color: venture.status === 'Operational' ? '#D4AF37' : '#000', padding: '4px 8px', borderRadius: '4px', border: '1px solid #D4AF37', fontWeight: 'bold' }}>
//                     {venture.status}
//                   </span>
//                 </div>
//                 <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>{venture.name}</h3>
//                 <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1 }}>{venture.desc}</p>
                
//                 {/* FIX: Button logic added here */}
//                 <button 
//                   onClick={() => handleEntityClick(venture.websiteUrl)}
//                   style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '12px 20px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}
//                   onMouseEnter={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.color = '#D4AF37'; }}
//                   onMouseLeave={(e) => { e.target.style.borderColor = '#333'; e.target.style.color = '#fff'; }}
//                 >
//                   EXPLORE ENTITY &rarr;
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default VenturesPage;











import React from 'react';
import Footer from '../components/Footer';
import { useCompanies } from '../context/CompanyContext'; // 🔥 IMPORTED

const VenturesPage = () => {
  const { companies, loading } = useCompanies(); // 🔥 GLOBAL DATA

  const handleEntityClick = (url) => {
    if(url && url.trim() !== '') window.open(url, '_blank');
    else alert('Detailed website for this entity is currently under development!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section className="container animate-up" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Our Global Portfolio</span>
          <h2 className="section-title">The <span style={{ color: '#D4AF37' }}>Ventures</span></h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>A diversified conglomerate driving innovation across distinct sectors. Explore the pillars of the Badri Prasad Group.</p>
        </div>

        {loading ? (
          <div style={{textAlign: 'center', color: '#D4AF37'}}>Loading Ventures Data...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {companies?.map((venture, index) => (
              <div key={index} className="about-glass-box" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ color: '#00e5ff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>{venture.vertical}</span>
                  <span style={{ fontSize: '10px', background: venture.status === 'Operational' ? '#111' : '#D4AF37', color: venture.status === 'Operational' ? '#D4AF37' : '#000', padding: '4px 8px', borderRadius: '4px', border: '1px solid #D4AF37', fontWeight: 'bold' }}>{venture.status}</span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>{venture.name}</h3>
                <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1 }}>{venture.desc}</p>
                <button 
                  onClick={() => handleEntityClick(venture.websiteUrl)}
                  style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '12px 20px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = '#333'; e.target.style.color = '#fff'; }}
                >
                  EXPLORE ENTITY &rarr;
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};
export default VenturesPage;