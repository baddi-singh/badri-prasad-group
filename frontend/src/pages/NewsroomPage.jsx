import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const NewsroomPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news');
        
        // FIX: Yahan filter laga diya taaki public ko Trashed news na dikhe
        const activeNewsOnly = res.data.data.filter(news => !news.isDeleted);
        setNewsList(activeNewsOnly);
        
      } catch (err) {
        console.error("Failed to load news", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
            <span style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Media & Press Releases
            </span>
            <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
              The <span style={{ color: '#D4AF37' }}>Newsroom</span>
            </h1>
            <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '15px', lineHeight: '1.6' }}>
              Stay updated with the latest announcements, strategic acquisitions, and global milestones from the Badri Prasad ecosystem.
            </p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', color: '#D4AF37' }}>Fetching Latest News...</div>
          ) : newsList.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#666' }}>No news published yet.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
              {newsList.map((news) => (
                <div key={news._id} className="animate-up" style={{ display: 'flex', flexDirection: 'column' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '20px' }}>
                    <span style={{ color: '#888', fontSize: '11px' }}>{news.date}</span>
                    <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {news.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px' }}>
                    {news.title}
                  </h3>
                  <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                    {news.description}
                  </p>

                  {news.linkUrl ? (
                    <a href={news.linkUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '1px' }} onMouseEnter={(e)=>e.target.style.color='#fff'} onMouseLeave={(e)=>e.target.style.color='#D4AF37'}>
                      READ FULL STORY &rarr;
                    </a>
                  ) : (
                    <span style={{ color: '#444', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
                      STORY DEVELOPING...
                    </span>
                  )}

                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsroomPage;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Footer from '../components/Footer';

// const NewsroomPage = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news');
//         setNewsList(res.data.data);
//       } catch (err) {
//         console.error("Failed to load news", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, []);

//   return (
//     <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <div style={{ flexGrow: 1, paddingTop: '150px', paddingBottom: '100px' }}>
//         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
//           {/* Header */}
//           <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-up">
//             <span style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
//               Media & Press Releases
//             </span>
//             <h1 style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px', marginBottom: '20px' }}>
//               The <span style={{ color: '#D4AF37' }}>Newsroom</span>
//             </h1>
//             <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '15px', lineHeight: '1.6' }}>
//               Stay updated with the latest announcements, strategic acquisitions, and global milestones from the Badri Prasad ecosystem.
//             </p>
//           </div>

//           {/* News Grid */}
//           {loading ? (
//             <div style={{ textAlign: 'center', color: '#D4AF37' }}>Fetching Latest News...</div>
//           ) : newsList.length === 0 ? (
//             <div style={{ textAlign: 'center', color: '#666' }}>No news published yet.</div>
//           ) : (
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
//               {newsList.map((news) => (
//                 <div key={news._id} className="animate-up" style={{ display: 'flex', flexDirection: 'column' }}>
                  
//                   {/* Date & Category Row */}
//                   <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '20px' }}>
//                     <span style={{ color: '#888', fontSize: '11px' }}>{news.date}</span>
//                     <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
//                       {news.category}
//                     </span>
//                   </div>

//                   {/* Title & Description */}
//                   <h3 style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px' }}>
//                     {news.title}
//                   </h3>
//                   <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
//                     {news.description}
//                   </p>

//                   {/* Read More Link */}
//                   {news.linkUrl ? (
//                     <a href={news.linkUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '1px' }} onMouseEnter={(e)=>e.target.style.color='#fff'} onMouseLeave={(e)=>e.target.style.color='#D4AF37'}>
//                       READ FULL STORY &rarr;
//                     </a>
//                   ) : (
//                     <span style={{ color: '#444', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
//                       STORY DEVELOPING...
//                     </span>
//                   )}

//                 </div>
//               ))}
//             </div>
//           )}

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default NewsroomPage;







// import React from 'react';
// import Footer from '../components/Footer';

// const NewsroomPage = () => {
//   // Aapki company ki latest news aur announcements
//   const newsItems = [
//     { id: 1, date: "October 15, 2026", category: "CORPORATE", title: "Badri Prasad Group Announces Record Q3 Revenue", desc: "The conglomerate reports a 45% YoY growth, driven by stellar performances in the Real Estate and Technology sectors." },
//     { id: 2, date: "September 28, 2026", category: "MERGERS & ACQUISITIONS", title: "Badri Smart Integrations Acquires AI Startup 'NeuroSync'", desc: "Strengthening its enterprise automation portfolio with a $120M strategic acquisition to lead the Industry 4.0 revolution." },
//     { id: 3, date: "August 10, 2026", category: "INFRASTRUCTURE", title: "Launch of 'The Gold Crest' - Ultra Luxury Skyline", desc: "Badri Real Estate unveils its flagship $500M residential project in the heart of the financial district." },
//     { id: 4, date: "July 22, 2026", category: "HOSPITALITY", title: "Badri Travels Expands Fleet with Sustainable Jets", desc: "Commitment to green aviation marked by the introduction of 15 new eco-friendly private jets for corporate clients." },
//     { id: 5, date: "June 05, 2026", category: "INVESTMENT", title: "Badri Venture Studio Launches $50M Web3 Fund", desc: "Empowering the next generation of decentralized applications and blockchain infrastructure globally." },
//     { id: 6, date: "May 18, 2026", category: "PHILANTHROPY", title: "Badri Foundation Pledges $10M for Digital Education", desc: "Initiative to bridge the digital divide by providing smart classrooms and tech access to 500+ rural schools." }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-between">
      
//       <section className="container animate-up" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        
//         {/* Page Header */}
//         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//           <span className="section-subtitle">Media & Press Releases</span>
//           <h2 className="section-title">The <span style={{ color: '#D4AF37' }}>Newsroom</span></h2>
//           <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>
//             Stay updated with the latest announcements, strategic acquisitions, and global milestones from the Badri Prasad ecosystem.
//           </p>
//         </div>

//         {/* The News Grid */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
//           {newsItems.map((news) => (
//             <div key={news.id} className="about-glass-box" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
              
//               {/* Date & Category */}
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
//                 <span style={{ color: '#888', fontSize: '12px' }}>{news.date}</span>
//                 <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>{news.category}</span>
//               </div>
              
//               {/* Headline & Desc */}
//               <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '15px', lineHeight: '1.4' }}>
//                 {news.title}
//               </h3>
//               <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1 }}>
//                 {news.desc}
//               </p>
              
//               {/* Fake Read More Button */}
//               <div style={{ marginTop: 'auto' }}>
//                 <button 
//                   style={{ color: '#D4AF37', background: 'none', border: 'none', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', cursor: 'pointer', padding: '0' }}
//                   onMouseEnter={(e) => e.target.style.color = '#fff'} 
//                   onMouseLeave={(e) => e.target.style.color = '#D4AF37'}
//                 >
//                   READ FULL STORY &rarr;
//                 </button>
//               </div>

//             </div>
//           ))}
          
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default NewsroomPage;