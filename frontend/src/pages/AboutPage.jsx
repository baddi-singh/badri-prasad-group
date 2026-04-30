import React from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* MAIN CONTENT AREA */}
      <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
            <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Our Heritage & Legacy
            </span>
            <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
              About The <span style={{ color: '#D4AF37' }}>Group</span>
            </h1>
            <p style={{ color: '#888', maxWidth: '700px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
              A unified global conglomerate setting the gold standard in Technology, Infrastructure, Finance, and beyond. We don't just build businesses; we architect ecosystems that drive human progress.
            </p>
          </div>

          {/* Premium Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '100px' }}>
            {[
              { number: '12+', label: 'Global Subsidiaries' },
              { number: '5', label: 'Continents Present' },
              { number: '10k+', label: 'Brilliant Minds' },
              { number: '2026', label: 'Established' }
            ].map((stat, i) => (
              <div key={i} style={{ 
                background: 'linear-gradient(145deg, #0a0a0a, #020202)', 
                border: '1px solid #1a1a1a', 
                padding: '40px 20px', 
                textAlign: 'center', 
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <h3 style={{ color: '#D4AF37', fontSize: '40px', fontWeight: '900', marginBottom: '10px' }}>{stat.number}</h3>
                <p style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mission & Vision Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Mission</span></h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
                To empower communities and industries through relentless innovation, seamless execution, and uncompromising quality. We strive to create sustainable value across every sector we touch.
              </p>
            </div>
            
            <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>👁️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Vision</span></h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
                To be the undisputed global leader and the ultimate architect of an interconnected enterprise ecosystem, bridging the gap between human potential and future technologies.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;






// import React from 'react';
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505', color: '#fff' }}>
      
//       {/* Main Content Area */}
//       <div className="pt-20 pb-20">
//         <section style={{ padding: '120px 5% 50px' }}>
          
//           {/* Header Section */}
//           <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
//             <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               About The Group
//             </span>
//             <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0', letterSpacing: '1px' }}>
//               A Legacy of <span style={{ color: '#D4AF37' }}>Excellence.</span>
//             </h1>
//             <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 60px' }}>
//               Badri Prasad Group is a diversified global conglomerate driven by the pursuit of absolute quality, seamless execution, and omnichannel excellence. We don't just build companies; we architect enterprise ecosystems that shape the future.
//             </p>
//           </div>

//           {/* Vision & Mission Grid */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto 80px' }}>
//             <div style={{ background: '#0a0a0a', padding: '40px', borderRadius: '8px', border: '1px solid #222', borderTop: '3px solid #D4AF37', transition: '0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Our Vision</h3>
//               <p style={{ color: '#888', lineHeight: '1.6', fontSize: '14px' }}>
//                 To be the global benchmark for innovation, sustainability, and cross-sector excellence, empowering communities and transforming industries through visionary leadership.
//               </p>
//             </div>
            
//             <div style={{ background: '#0a0a0a', padding: '40px', borderRadius: '8px', border: '1px solid #222', borderTop: '3px solid #00e5ff', transition: '0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Our Mission</h3>
//               <p style={{ color: '#888', lineHeight: '1.6', fontSize: '14px' }}>
//                 To engineer sustainable, scalable, and cutting-edge solutions across our diverse portfolio, ensuring long-term value creation for our stakeholders, partners, and society.
//               </p>
//             </div>
//           </div>

//           {/* Global Footprint / Stats */}
//           <div style={{ background: '#111', border: '1px solid #333', borderRadius: '12px', padding: '60px 40px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
//             <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px' }}>Our Global <span style={{ color: '#D4AF37' }}>Footprint</span></h3>
            
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px' }}>
//               <div>
//                 <div style={{ fontSize: '40px', fontWeight: '900', color: '#D4AF37' }}>12+</div>
//                 <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '5px', fontWeight: 'bold' }}>Global Ventures</div>
//               </div>
//               <div style={{ borderLeft: '1px solid #333', paddingLeft: '30px' }}>
//                 <div style={{ fontSize: '40px', fontWeight: '900', color: '#00e5ff' }}>5</div>
//                 <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '5px', fontWeight: 'bold' }}>Core Industries</div>
//               </div>
//               <div style={{ borderLeft: '1px solid #333', paddingLeft: '30px' }}>
//                 <div style={{ fontSize: '40px', fontWeight: '900', color: '#D4AF37' }}>10k+</div>
//                 <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '5px', fontWeight: 'bold' }}>Global Workforce</div>
//               </div>
//             </div>
//           </div>

//         </section>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;