// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Ecosystem = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         // 🔥 FIX 1: Hardcoded URL hatakar Environment Variable lagaya
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
        
//         // 🔥 FIX 2: res.data.data ensure kar raha hai ki hum array hi set karein
//         if (res.data && res.data.success) {
//           setCompanies(res.data.data);
//         }
//       } catch (err) {
//         console.error("Failed to load ecosystem", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // Click logic for child websites
//   const handleCardClick = (url) => {
//     if(url && url.trim() !== '') {
//       window.open(url, '_blank');
//     } else {
//       alert('Website for this venture is currently under development!');
//     }
//   };

//   return (
//     <section id="ecosystem" className="container animate-up" style={{ padding: '100px 5%' }}>
      
//       {/* Header Section */}
//       <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//         <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//           Our Subsidiaries
//         </span>
//         <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '10px', color: '#fff' }}>
//           The Badri <span style={{ color: '#D4AF37' }}>Ecosystem</span>
//         </h2>
//       </div>

//       {loading ? (
//         <div style={{ textAlign: 'center', color: '#D4AF37', fontWeight: 'bold' }}>Loading Ecosystem Data...</div>
//       ) : (
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '0 20px' }}>
//           {/* 🔥 FIX 3: Optional Chaining (?) lagaya hai taaki undefined data par crash na ho */}
//           {companies && companies.length > 0 ? (
//             companies.map((company, i) => (
//               <div 
//                 key={company._id || i} 
//                 onClick={() => handleCardClick(company.websiteUrl)} 
//                 style={{
//                   background: 'linear-gradient(145deg, #111, #020202)',
//                   border: '1px solid #222',
//                   borderRadius: '8px',
//                   padding: '40px 30px',
//                   textAlign: 'center',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
//                   transition: 'all 0.4s ease',
//                   cursor: 'pointer'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-10px)';
//                   e.currentTarget.style.borderColor = '#D4AF37';
//                   e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.borderColor = '#222';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
//                 }}
//               >
//                 {/* Background Faint Number */}
//                 <span style={{
//                   position: 'absolute',
//                   top: '-10px',
//                   right: '10px',
//                   fontSize: '80px',
//                   fontWeight: 'bold',
//                   color: 'rgba(255, 255, 255, 0.03)',
//                   pointerEvents: 'none'
//                 }}>
//                   {(i + 1).toString().padStart(2, '0')}
//                 </span>

//                 <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', position: 'relative', zIndex: 1 }}>
//                   {company.name}
//                 </h3>
                
//                 <span style={{
//                   display: 'inline-block',
//                   color: '#D4AF37',
//                   background: 'rgba(212, 175, 55, 0.1)',
//                   padding: '5px 12px',
//                   borderRadius: '20px',
//                   fontSize: '10px',
//                   letterSpacing: '1px',
//                   fontWeight: 'bold',
//                   textTransform: 'uppercase',
//                   position: 'relative',
//                   zIndex: 1
//                 }}>
//                   {company.vertical}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div style={{ textAlign: 'center', color: '#888', gridColumn: '1/-1' }}>
//               No companies found in the ecosystem.
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Ecosystem;



import React from 'react';
import { useCompanies } from '../context/CompanyContext'; // 🔥 IMPORTED

const Ecosystem = () => {
  const { companies, loading } = useCompanies(); // 🔥 GLOBAL DATA LAYA

  const handleCardClick = (url) => {
    if(url && url.trim() !== '') window.open(url, '_blank');
    else alert('Website for this venture is currently under development!');
  };

  return (
    <section id="ecosystem" className="container animate-up" style={{ padding: '100px 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Our Subsidiaries</span>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '10px', color: '#fff' }}>The Badri <span style={{ color: '#D4AF37' }}>Ecosystem</span></h2>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#D4AF37', fontWeight: 'bold' }}>Loading Ecosystem Data...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '0 20px' }}>
          {companies && companies.length > 0 ? (
            companies.map((company, i) => (
              <div 
                key={company._id || i} 
                onClick={() => handleCardClick(company.websiteUrl)} 
                style={{ background: 'linear-gradient(145deg, #111, #020202)', border: '1px solid #222', borderRadius: '8px', padding: '40px 30px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', transition: 'all 0.4s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'; }}
              >
                <span style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '80px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none' }}>
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', position: 'relative', zIndex: 1 }}>{company.name}</h3>
                <span style={{ display: 'inline-block', color: '#D4AF37', background: 'rgba(212, 175, 55, 0.1)', padding: '5px 12px', borderRadius: '20px', fontSize: '10px', letterSpacing: '1px', fontWeight: 'bold', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>{company.vertical}</span>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#888', gridColumn: '1/-1' }}>No companies found.</div>
          )}
        </div>
      )}
    </section>
  );
};
export default Ecosystem;