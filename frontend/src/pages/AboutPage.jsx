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
              The Foundation of Diversified Excellence
            </span>
            <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
              About The <span style={{ color: '#D4AF37' }}>Group</span>
            </h1>
            <p style={{ color: '#888', maxWidth: '850px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
              Badri Prasad Group is a progressive parent conglomerate built on a foundation of absolute integrity, operational compliance, and specialized execution. We coordinate an integrated multi-sector ecosystem designed to drive value across digital frameworks, smart lifestyle automations, travel logistics, tailored creations, and creative media production.
            </p>
          </div>

          {/* Core Competencies Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '100px' }}>
            {[
              { number: '5', label: 'Core Business Verticals' },
              { number: '100%', label: 'Compliant & Unified Setup' },
              { number: '360°', label: 'Ecosystem Framework' },
              { number: '2026', label: 'Established Foundation' }
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

          {/* Deep Corporate Philosophy: Mission & Vision */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '100px' }}>
            <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Mission</span></h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
                To orchestrate sustainable growth across all specialized subdivisions by deploying cross-functional expertise and strict corporate accountability. We aim to break transactional boundaries by offering single-window transparency, optimized business systems, and unparalleled delivery to our clients, partners, and the end market.
              </p>
            </div>
            
            <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>👁️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Vision</span></h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
                To stand out as a trusted, multi-disciplinary parent group that simplifies micro-operations while scaling diversified business models. We envision a future where technology integrates smoothly into homes and offices, logistics move seamlessly across territories, and commercial services are executed with high professional ethics.
              </p>
            </div>
          </div>

          {/* Deep-Dive Strategic Pillars Section */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Operational Architecture
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginTop: '10px' }}>Our Ecosystem <span style={{ color: '#D4AF37' }}>In Focus</span></h2>
            <p style={{ color: '#888', maxWidth: '700px', margin: '15px auto 0', fontSize: '15px', lineHeight: '1.7' }}>
              The Badri Prasad Group thrives by dividing administrative control into tailored operational units, ensuring every vertical achieves market dominance and maintains peak quality standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '100px' }}>
            {[
              { 
                title: 'Badri Digital Solutions', 
                subtitle: 'Technology, Web & Digital Services',
                desc: 'Accelerating modern engineering cycles through agile web architectures, robust quality assurance automation, and customized software infrastructure to build a secure digital presence.' 
              },
              { 
                title: 'Badri Smart Integrations', 
                subtitle: 'Electronics, Smart Home & Office Automation',
                desc: 'Designing and engineering high-end smart home environments, smart appliance configurations, and efficient technical setups for connected modern workspaces.' 
              },
              { 
                title: 'Badri Tour & Travels', 
                subtitle: 'Transport, Logistics & Tourism Services',
                desc: 'Managing smart route-planning, strategic mobility networks, fleet coordination, and travel logistics solutions customized for enterprise transport needs and tourism.' 
              },
              { 
                title: 'Social Tailor & Textiles', 
                subtitle: 'Custom Tailoring & Textile Solutions',
                desc: 'Revitalizing lifestyle aesthetics with customized apparel tailoring frameworks, sourcing sustainable fabrics, and integrating reliable design workflows.' 
              },
              { 
                title: 'Badri Media', 
                subtitle: 'Media Production & Content Studio',
                desc: 'Architecting digital narratives, professional content planning, high-tier media assets production, and managing creative distribution pipelines for brand positioning.' 
              }
            ].map((pillar, i) => (
              <div key={i} style={{ 
                background: '#0a0a0a', 
                border: '1px solid #1a1a1a', 
                padding: '40px 30px', 
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = '#0f0f0f'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.background = '#0a0a0a'; }}
              >
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Division 0{i + 1}
                  </span>
                  <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginTop: '5px', marginBottom: '5px' }}>{pillar.title}</h4>
                  <p style={{ color: '#D4AF37', fontSize: '12px', fontWeight: '500', marginBottom: '20px', letterSpacing: '0.5px' }}>{pillar.subtitle}</p>
                  <p style={{ color: '#888', lineHeight: '1.7', fontSize: '14px', margin: '0' }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ADVANCED ADVANTAGE SECTION: Corporate Governance & Principles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px', marginBottom: '100px', alignItems: 'center', borderTop: '1px solid #111', paddingTop: '80px' }}>
            <div>
              <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Corporate Governance
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginTop: '10px', lineHeight: '1.3' }}>
                The Values That <span style={{ color: '#D4AF37' }}>Anchor Us</span>
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '15px', lineHeight: '1.6' }}>
                Operational integrity is non-negotiable. We maintain a high regulatory standards standard framework across all operational single-entity divisions.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {[
                { title: 'Absolute Transparency', text: 'Clear reporting, fair operations, and honest communication channels across all strategic initiatives.' },
                { title: 'Regulatory Compliance', text: 'Sticking firmly to state guidelines, documentation, and ethical standards across our infrastructure.' },
                { title: 'Agile Infrastructure', text: 'Utilizing cross-functional strategies to let each business division optimize its runtime productivity.' },
                { title: 'Client-Centric Ethos', text: 'Aligning business workflows to solve complex modern challenges and build lasting relationship capital.' }
              ].map((val, i) => (
                <div key={i} style={{ borderLeft: '2px solid #D4AF37', paddingLeft: '20px' }}>
                  <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{val.title}</h5>
                  <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: '0' }}>{val.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STRATEGIC ADVANCEMENT SECTION: Connecting to Partners/Investors */}
          <div style={{ 
            background: 'linear-gradient(135deg, #0d0d0d 0%, #030303 100%)', 
            border: '1px solid #222', 
            padding: '60px', 
            borderRadius: '20px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: '2' }}>
              <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Future Outlook
              </span>
              <h2 style={{ fontSize: '36px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
                Architecting Long-Term <span style={{ color: '#D4AF37' }}>Value Creation</span>
              </h2>
              <p style={{ color: '#aaa', maxWidth: '750px', margin: '0 auto 40px', fontSize: '15px', lineHeight: '1.8' }}>
                As the Badri Prasad Group expands its operations, our focus remains on scaling structural business models, refining tech integrations, and maximizing efficiency. We build structures prepared to address emerging market complexities with stability.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="/contact" style={{ background: '#D4AF37', color: '#000', padding: '14px 30px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
                   onMouseLeave={(e) => e.currentTarget.style.background = '#D4AF37'}>
                  Connect With Us
                </a>
                <a href="/investors" style={{ border: '1px solid #333', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s' }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4AF37'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                  Investor Relations
                </a>
              </div>
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
//     <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
//       {/* MAIN CONTENT AREA */}
//       <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
//         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
//           {/* Header Section */}
//           <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
//             <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               The Foundation of Diversified Excellence
//             </span>
//             <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
//               About The <span style={{ color: '#D4AF37' }}>Group</span>
//             </h1>
//             <p style={{ color: '#888', maxWidth: '850px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
//               Badri Prasad Group is a progressive parent conglomerate built on a foundation of absolute integrity, operational compliance, and specialized execution. We coordinate an integrated multi-sector ecosystem designed to drive value across digital frameworks, smart lifestyle automations, travel logistics, tailored creations, and creative media production. 
//             </p>
//           </div>

//           {/* Authentic Core Competencies Stats Grid */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '100px' }}>
//             {[
//               { number: '5', label: 'Core Business Verticals' },
//               { number: '100%', label: 'Compliant & Unified Setup' },
//               { number: '360°', label: 'Ecosystem Framework' },
//               { number: '2026', label: 'Established Foundation' }
//             ].map((stat, i) => (
//               <div key={i} style={{ 
//                 background: 'linear-gradient(145deg, #0a0a0a, #020202)', 
//                 border: '1px solid #1a1a1a', 
//                 padding: '40px 20px', 
//                 textAlign: 'center', 
//                 borderRadius: '12px',
//                 transition: 'all 0.3s ease',
//                 cursor: 'default'
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
//               >
//                 <h3 style={{ color: '#D4AF37', fontSize: '40px', fontWeight: '900', marginBottom: '10px' }}>{stat.number}</h3>
//                 <p style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Deep Corporate Philosophy: Mission & Vision */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '100px' }}>
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎯</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Mission</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To orchestrate sustainable growth across all specialized subdivisions by deploying cross-functional expertise and strict corporate accountability. We aim to break transactional boundaries by offering single-window transparency, optimized business systems, and unparalleled delivery to our clients, partners, and the end market.
//               </p>
//             </div>
            
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>👁️</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Vision</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To stand out as a trusted, multi-disciplinary parent group that simplifies micro-operations while scaling diversified business models. We envision a future where technology integrates smoothly into homes and offices, logistics move seamlessly across territories, and commercial services are executed with high professional ethics.
//               </p>
//             </div>
//           </div>

//           {/* Deep-Dive Strategic Pillars Section (Directly from your Ecosystem) */}
//           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//             <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               Operational Architecture
//             </span>
//             <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginTop: '10px' }}>Our Ecosystem <span style={{ color: '#D4AF37' }}>In Focus</span></h2>
//             <p style={{ color: '#888', maxWidth: '700px', margin: '15px auto 0', fontSize: '15px', lineHeight: '1.7' }}>
//               The Badri Prasad Group thrives by dividing administrative control into tailored operational units, ensuring every vertical achieves market dominance and maintains peak quality standard.
//             </p>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '40px' }}>
//             {[
//               { 
//                 title: 'Badri Digital Solutions', 
//                 subtitle: 'Technology, Web & Digital Services',
//                 desc: 'Accelerating modern engineering cycles through agile web architectures, robust quality assurance automation, and customized software infrastructure to build secure digital presence.' 
//               },
//               { 
//                 title: 'Badri Smart Integrations', 
//                 subtitle: 'Electronics, Smart Home & Office Automation',
//                 desc: 'Designing and engineering high-end smart home environments, smart appliance configurations, and efficient technical setups for connected modern workspaces.' 
//               },
//               { 
//                 title: 'Badri Tour & Travels', 
//                 subtitle: 'Transport, Logistics & Tourism Services',
//                 desc: 'Managing smart route-planning, strategic mobility networks, fleet coordination, and travel logistics solutions customized for enterprise transport needs and tourism.' 
//               },
//               { 
//                 title: 'Social Tailor & Textiles', 
//                 subtitle: 'Custom Tailoring & Textile Solutions',
//                 desc: 'Revitalizing lifestyle aesthetics with customized apparel tailoring frameworks, sourcing sustainable fabrics, and integrating reliable design workflows.' 
//               },
//               { 
//                 title: 'Badri Media', 
//                 subtitle: 'Media Production & Content Studio',
//                 desc: 'Architecting digital narratives, professional content planning, high-tier media assets production, and managing creative distribution pipelines for brand positioning.' 
//               }
//             ].map((pillar, i) => (
//               <div key={i} style={{ 
//                 background: '#0a0a0a', 
//                 border: '1px solid #1a1a1a', 
//                 padding: '40px 30px', 
//                 borderRadius: '12px',
//                 transition: 'all 0.3s ease',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between'
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = '#0f0f0f'; }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.background = '#0a0a0a'; }}
//               >
//                 <div>
//                   <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
//                     Division 0{i + 1}
//                   </span>
//                   <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginTop: '5px', marginBottom: '5px' }}>{pillar.title}</h4>
//                   <p style={{ color: '#D4AF37', fontSize: '12px', fontWeight: '500', marginBottom: '20px', letterSpacing: '0.5px' }}>{pillar.subtitle}</p>
//                   <p style={{ color: '#888', lineHeight: '1.7', fontSize: '14px', margin: '0' }}>{pillar.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
      
//       {/* Global Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;








// import React from 'react';
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   return (
//     <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
//       {/* MAIN CONTENT AREA */}
//       <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
//         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
//           {/* Header Section */}
//           <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
//             <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               Empowering Progress, Delivering Excellence
//             </span>
//             <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
//               About The <span style={{ color: '#D4AF37' }}>Group</span>
//             </h1>
//             <p style={{ color: '#888', maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
//               Welcome to Badri Prasad Group, a dynamic, multi-disciplinary conglomerate driven by innovation, integrity, and a commitment to transforming industries. Established with a vision to streamline multi-sector operations under one cohesive umbrella, we operate as a progressive parent organization managing diverse business units.
//             </p>
//           </div>

//           {/* Realistic Professional Stats Grid */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '100px' }}>
//             {[
//               { number: '4+', label: 'Strategic Divisions' },
//               { number: '360°', label: 'Business Solutions' },
//               { number: '100%', label: 'Integrated Excellence' },
//               { number: '2024', label: 'Established' }
//             ].map((stat, i) => (
//               <div key={i} style={{ 
//                 background: 'linear-gradient(145deg, #0a0a0a, #020202)', 
//                 border: '1px solid #1a1a1a', 
//                 padding: '40px 20px', 
//                 textAlign: 'center', 
//                 borderRadius: '12px',
//                 transition: 'all 0.3s ease',
//                 cursor: 'default'
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
//               >
//                 <h3 style={{ color: '#D4AF37', fontSize: '40px', fontWeight: '900', marginBottom: '10px' }}>{stat.number}</h3>
//                 <p style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Mission & Vision Section */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '80px' }}>
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎯</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Mission</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To deliver world-class solutions across all our specialized divisions by maintaining the highest standards of operational excellence, transparency, and technological advancement. We empower businesses and individuals alike to thrive.
//               </p>
//             </div>
            
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>👁️</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Vision</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To be recognized as a trusted, multi-faceted industry leader that fosters innovation, builds scalable business ecosystems, and drives impactful value for our stakeholders, partners, and communities.
//               </p>
//             </div>
//           </div>

//           {/* The Pillars Section (New Addition for MNC feel) */}
//           <div style={{ textAlign: 'center', marginBottom: '50px' }}>
//             <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>The <span style={{ color: '#D4AF37' }}>Pillars</span> of Our Group</h2>
//             <p style={{ color: '#888', maxWidth: '600px', margin: '15px auto 0', fontSize: '15px' }}>Operating through a diversified portfolio of strategic business units dedicated to mastering their domains.</p>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
//             {[
//               { title: 'Digital & Tech Solutions', desc: 'Driving digital transformation through robust QA, software automation, and cutting-edge web development ecosystems.' },
//               { title: 'Strategic Consulting', desc: 'Providing market-ready expertise, operational compliance, and business consultancy to help emerging ventures scale efficiently.' },
//               { title: 'Consumer Ventures', desc: 'Expanding into high-growth sectors aimed at delivering everyday efficiency, reliability, and value to the end consumer.' }
//             ].map((pillar, i) => (
//               <div key={i} style={{ 
//                 background: '#0a0a0a', 
//                 border: '1px solid #1a1a1a', 
//                 padding: '40px 30px', 
//                 borderRadius: '12px',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = '#0f0f0f'; }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.background = '#0a0a0a'; }}
//               >
//                 <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>{pillar.title}</h4>
//                 <p style={{ color: '#888', lineHeight: '1.7', fontSize: '14px' }}>{pillar.desc}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
      
//       {/* Global Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;











// Latest working version   
// import React from 'react';
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   return (
//     <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
//       {/* MAIN CONTENT AREA */}
//       <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
//         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
//           {/* Header Section */}
//           <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
//             <span style={{ color: '#D4AF37', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               Our Heritage & Legacy
//             </span>
//             <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
//               About The <span style={{ color: '#D4AF37' }}>Group</span>
//             </h1>
//             <p style={{ color: '#888', maxWidth: '700px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
//               A unified global conglomerate setting the gold standard in Technology, Infrastructure, Finance, and beyond. We don't just build businesses; we architect ecosystems that drive human progress.
//             </p>
//           </div>


//           {/* Premium Stats Grid */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '100px' }}>
//             {[
//               { number: '12+', label: 'Global Subsidiaries' },
//               { number: '5', label: 'Continents Present' },
//               { number: '10k+', label: 'Brilliant Minds' },
//               { number: '2026', label: 'Established' }
//             ].map((stat, i) => (
//               <div key={i} style={{ 
//                 background: 'linear-gradient(145deg, #0a0a0a, #020202)', 
//                 border: '1px solid #1a1a1a', 
//                 padding: '40px 20px', 
//                 textAlign: 'center', 
//                 borderRadius: '12px',
//                 transition: 'all 0.3s ease',
//                 cursor: 'default'
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
//               >
//                 <h3 style={{ color: '#D4AF37', fontSize: '40px', fontWeight: '900', marginBottom: '10px' }}>{stat.number}</h3>
//                 <p style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Mission & Vision Section */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎯</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Mission</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To empower communities and industries through relentless innovation, seamless execution, and uncompromising quality. We strive to create sustainable value across every sector we touch.
//               </p>
//             </div>
            
//             <div style={{ background: 'linear-gradient(145deg, #111, #050505)', padding: '50px', borderRadius: '16px', border: '1px solid #222' }}>
//               <div style={{ fontSize: '30px', marginBottom: '15px' }}>👁️</div>
//               <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Our <span style={{ color: '#D4AF37' }}>Vision</span></h3>
//               <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
//                 To be the undisputed global leader and the ultimate architect of an interconnected enterprise ecosystem, bridging the gap between human potential and future technologies.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
      
//       {/* Global Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;