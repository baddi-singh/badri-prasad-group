import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Load Handler & API Fetch
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/leadership`);
        setLeaders(res.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching leadership data:", err);
        setError(true);
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  // Generate name initials (e.g. "Badri Prasad" -> "BP")
  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  };

  // Group active leaders by category
  const boardOfDirectors = leaders.filter(l => l.category === "Board of Directors" && !l.isDeleted);
  const executiveCommittee = leaders.filter(l => l.category === "Executive Committee" && !l.isDeleted);

  if (loading) {
    return (
      <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#050505', color: '#D4AF37', fontWeight: 'bold', letterSpacing: '2px' }}>
        LOADING LEADERSHIP MATRIX...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', background: '#050505', color: '#ff4d4d' }}>
        Unable to load leadership data. Please check connection.
      </div>
    );
  }

  return (
    <section id="leadership" style={{ padding: '80px 5%', background: '#050505', color: '#fff' }}>
      
      {/* =================================================== */}
      {/* 1. BOARD OF DIRECTORS (COMPACT GRID CARDBOARD FORMAT) */}
      {/* =================================================== */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }} className="animate-up">
        <span className="section-subtitle" style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
          Guiding The Vision
        </span>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
          Board of <span style={{ color: '#D4AF37' }}>Directors</span>
        </h2>
        <div style={{ width: '40px', height: '2px', background: '#D4AF37', margin: '15px auto 0' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto 80px' }}>
        {boardOfDirectors.length > 0 ? (
          boardOfDirectors.map((member) => (
            <div
              key={member._id}
              className="animate-up"
              style={{
                background: '#0a0a0a',
                border: '1px solid #222',
                borderRadius: '8px',
                padding: '35px 25px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: '#111',
                    border: '1px solid #D4AF37',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 20px',
                    fontSize: '26px',
                    color: '#D4AF37',
                    fontWeight: 'bold',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.15)'
                  }}
                >
                  {getInitials(member.name)}
                </div>
                
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', color: '#fff' }}>
                  {member.name}
                </h3>
                
                <p style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
                  {member.role}
                </p>
              </div>

              {member.company && (
                <p style={{ color: '#888', fontSize: '12px', lineHeight: '1.6', margin: 0, fontStyle: 'italic', borderTop: '1px solid #1a1a1a', paddingTop: '14px' }}>
                  "{member.company}"
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#555', gridColumn: '1 / -1' }}>No Board of Directors added yet.</p>
        )}
      </div>

      {/* =================================================== */}
      {/* 2. EXECUTIVE COMMITTEE (GRID CARDBOARD SECTION)     */}
      {/* =================================================== */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }} className="animate-up">
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
          Executive <span style={{ color: '#D4AF37' }}>Committee</span>
        </h3>
        <div style={{ width: '40px', height: '2px', background: '#D4AF37', margin: '15px auto 0' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {executiveCommittee.length > 0 ? (
          executiveCommittee.map((member) => (
            <div
              key={member._id}
              className="animate-up"
              style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '30px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background: '#111',
                    border: '1px solid #333',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto 20px',
                    fontSize: '24px',
                    color: '#666',
                    fontWeight: 'bold'
                  }}
                >
                  {getInitials(member.name)}
                </div>
                
                <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#fff' }}>
                  {member.name}
                </h4>
                
                <p style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  {member.role}
                </p>
              </div>

              {member.company && (
                <p style={{ color: '#666', fontSize: '11px', margin: 0, borderTop: '1px solid #141414', paddingTop: '10px' }}>
                  {member.company}
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#555', gridColumn: '1 / -1' }}>No Executive Members added yet.</p>
        )}
      </div>

    </section>
  );
};

export default Leadership;




// cardboard in single row
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Leadership = () => {
//   const [leaders, setLeaders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   // 🔥 Load Handler & API Fetch
//   useEffect(() => {
//     const fetchLeaders = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/leadership`);
//         setLeaders(res.data.data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching leadership data:", err);
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchLeaders();
//   }, []);

//   // Naam se "Initials" nikalne ka function (Jaise "Badri Prasad" -> "BP")
//   const getInitials = (name) => {
//     if (!name) return "";
//     const parts = name.split(" ");
//     if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
//     return name.substring(0, 2).toUpperCase();
//   };

//   // 🔥 Data ko do hisso mein baantna
//   const boardOfDirectors = leaders.filter(l => l.category === "Board of Directors" && !l.isDeleted);
//   const executiveCommittee = leaders.filter(l => l.category === "Executive Committee" && !l.isDeleted);

//   if (loading) {
//     return (
//       <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#050505', color: '#D4AF37', fontWeight: 'bold', letterSpacing: '2px' }}>
//         LOADING LEADERSHIP MATRIX...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ textAlign: 'center', padding: '100px 20px', background: '#050505', color: '#ff4d4d' }}>
//         Unable to load leadership data. Please check connection.
//       </div>
//     );
//   }

//   return (
//     <section id="leadership" style={{ padding: '80px 5%', background: '#050505', color: '#fff' }}>
      
//       {/* ============================================== */}
//       {/* 1. BOARD OF DIRECTORS (VIP SECTION - DYNAMIC)    */}
//       {/* ============================================== */}
//       <div style={{ textAlign: 'center', marginBottom: '60px' }} className="animate-up">
//         <span className="section-subtitle" style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
//           Guiding The Vision
//         </span>
//         <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
//           Board of <span style={{ color: '#D4AF37' }}>Directors</span>
//         </h2>
//       </div>

//       {boardOfDirectors.length > 0 ? (
//         boardOfDirectors.map((member) => (
//           <div key={member._id} className="animate-up about-glass-box" style={{ maxWidth: '900px', margin: '0 auto 80px', background: '#111', border: '1px solid #333', borderRadius: '12px', padding: '40px', display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
//             <div style={{ width: '150px', height: '150px', background: '#0a0a0a', border: '1px solid #D4AF37', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '48px', fontWeight: 'bold', color: 'rgba(212, 175, 55, 0.5)', flexShrink: 0, margin: '0 auto' }}>
//               {getInitials(member.name)}
//             </div>
//             <div style={{ flex: 1, textAlign: 'left', minWidth: '300px' }}>
//               <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>{member.name}</h3>
//               <p style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
//                 {member.role}
//               </p>
//               {/* Admin Panel ke 'Company' field ko hum yahan Quote/Bio ki tarah use kar rahe hain */}
//               <p style={{ color: '#aaa', fontStyle: 'italic', lineHeight: '1.8', borderLeft: '2px solid #D4AF37', paddingLeft: '15px' }}>
//                 "{member.company}" 
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p style={{ textAlign: 'center', color: '#555', marginBottom: '80px' }}>No Board of Directors added yet.</p>
//       )}

//       {/* ============================================== */}
//       {/* 2. EXECUTIVE COMMITTEE (GRID SECTION - DYNAMIC)  */}
//       {/* ============================================== */}
//       <div style={{ textAlign: 'center', marginBottom: '50px' }} className="animate-up">
//         <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>
//           Executive <span style={{ color: '#D4AF37' }}>Committee</span>
//         </h3>
//         <div style={{ width: '40px', height: '2px', background: '#D4AF37', margin: '15px auto 0' }}></div>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//         {executiveCommittee.length > 0 ? (
//           executiveCommittee.map((member) => (
//             <div key={member._id} className="animate-up" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '8px', padding: '30px 20px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'default' }}
//                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
//                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              
//               <div style={{ width: '70px', height: '70px', background: '#111', border: '1px solid #333', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', color: '#555', fontWeight: 'bold' }}>
//                 {getInitials(member.name)}
//               </div>
              
//               <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#fff' }}>{member.name}</h4>
//               <p style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
//                 {member.role}
//               </p>
//               <p style={{ color: '#666', fontSize: '11px' }}>{member.company}</p>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', color: '#555', gridColumn: '1 / -1' }}>No Executive Members added yet.</p>
//         )}
//       </div>

//     </section>
//   );
// };

// export default Leadership;