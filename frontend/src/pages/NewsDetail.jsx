import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../utils/apiConfig';

const NewsDetail = () => {
  const { id } = useParams(); 
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // API_BASE_URL environment ke hisaab se localhost:5001 ya live URL apne aap lega
        const apiUrl = `${API_BASE_URL}/api/news/${id}`;

        const res = await fetch(apiUrl);

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned HTML instead of JSON.");
        }

        const data = await res.json();
        
        if (data.success) {
          setNewsItem(data.data);
        } else {
          console.error("Backend error:", data.message);
        }
      } catch (error) {
        console.error("Error fetching news detail:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-[#D4AF37]">Loading Dispatch...</div>;
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl mb-4">News Article Not Found</h2>
        <Link to="/newsroom" className="text-[#D4AF37] underline">&larr; Back to Newsroom</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section className="container mx-auto px-4 animate-up" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/newsroom" 
            style={{ color: '#888', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }} 
            onMouseEnter={(e) => e.target.style.color = '#D4AF37'} 
            onMouseLeave={(e) => e.target.style.color = '#888'}
          >
            &larr; BACK TO NEWSROOM
          </Link>
        </div>

        {/* Header Category & Date */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {newsItem.category}
          </span>
          <span style={{ color: '#666', fontSize: '12px' }}>|</span>
          <span style={{ color: '#aaa', fontSize: '12px' }}>
            {newsItem.date}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', marginBottom: '40px', lineHeight: '1.3' }}>
          {newsItem.title}
        </h1>

        {/* Content Box */}
        <div className="about-glass-box" style={{ padding: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
            {newsItem.description}
          </p>
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default NewsDetail;








// import { API_BASE_URL } from '../utils/apiConfig';
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Footer from '../components/Footer'; 

// const NewsDetail = () => {
//   const { id } = useParams(); 
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         // 🔥 FIX: Localhost ka port 5001 kiya Mac AirPlay conflict se bachne ke liye
//         // Aur production me aapka asli live Render URL set kar diya hai
//         const apiUrl = window.location.hostname === 'localhost' 
//           ? `${API_BASE_URL}/api/news/${id}` 
//           : `https://bpg-backend-production.onrender.com/api/news/${id}`;

//         const res = await fetch(apiUrl);

//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           throw new Error("Server returned HTML instead of JSON.");
//         }

//         const data = await res.json();
        
//         if (data.success) {
//           setNewsItem(data.data);
//         } else {
//           console.error("Backend error:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching news detail:", error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-[#D4AF37]">Loading Dispatch...</div>;
//   }

//   if (!newsItem) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-white">
//         <h2 className="text-2xl mb-4">News Article Not Found</h2>
//         <Link to="/newsroom" className="text-[#D4AF37] underline">&larr; Back to Newsroom</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <section className="container mx-auto px-4 animate-up" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        
//         {/* Back Button */}
//         <div className="mb-8">
//           <Link to="/newsroom" style={{ color: '#888', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#D4AF37'} onMouseLeave={(e) => e.target.style.color = '#888'}>
//             &larr; BACK TO NEWSROOM
//           </Link>
//         </div>

//         {/* Header Category & Date */}
//         <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
//           <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
//             {newsItem.category}
//           </span>
//           <span style={{ color: '#666', fontSize: '12px' }}>|</span>
//           <span style={{ color: '#aaa', fontSize: '12px' }}>
//             {newsItem.date}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', marginBottom: '40px', lineHeight: '1.3' }}>
//           {newsItem.title}
//         </h1>

//         {/* Content Box */}
//         <div className="about-glass-box" style={{ padding: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
//           <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
//             {newsItem.description}
//           </p>
//         </div>

//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default NewsDetail;














//Faltu code below// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Footer from '../components/Footer'; // Apna path check kar lena

// const NewsDetail = () => {
//   const { id } = useParams(); // URL se ID nikalne ke liye
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Backend se specific news fetch karna
//     // Note: Agar aapka API URL alag hai, toh ise change kar lena
//     const fetchNewsDetail = async () => {
//       try {
//         const res = await fetch(`https://www.badriprasadgroup.com/api/news/${id}`); // Update your actual API path here
//         const data = await res.json();
//         if (data.success) {
//           setNewsItem(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching news detail:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-[#D4AF37]">Loading Dispatch...</div>;
//   }

//   if (!newsItem) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-white">
//         <h2 className="text-2xl mb-4">News Article Not Found</h2>
//         <Link to="/newsroom" className="text-[#D4AF37] underline">&larr; Back to Newsroom</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <section className="container mx-auto px-4 animate-up" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        
//         {/* Back Button */}
//         <div className="mb-8">
//           <Link to="/newsroom" style={{ color: '#888', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#D4AF37'} onMouseLeave={(e) => e.target.style.color = '#888'}>
//             &larr; BACK TO NEWSROOM
//           </Link>
//         </div>

//         {/* Header Category & Date */}
//         <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
//           <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
//             {newsItem.category}
//           </span>
//           <span style={{ color: '#666', fontSize: '12px' }}>|</span>
//           <span style={{ color: '#aaa', fontSize: '12px' }}>
//             {newsItem.date}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', marginBottom: '40px', lineHeight: '1.3' }}>
//           {newsItem.title}
//         </h1>

//         {/* Content Box */}
//         <div className="about-glass-box" style={{ padding: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
//           <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
//             {newsItem.description}
//           </p>
//         </div>

//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default NewsDetail;