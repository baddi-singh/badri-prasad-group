import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Newsroom = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 🔥 FIX: Live Database se News fetch kar rahe hain
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/news`);
        
        if (res.data && res.data.success) {
          // Jo news Delete (Trash) nahi hui hain, sirf wahi dikhayenge
          const activeNews = res.data.data.filter(item => !item.isDeleted);
          setNewsList(activeNews);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="news" className="container animate-up">
      <span className="section-subtitle">Press & Media</span>
      <h2 className="section-title">Latest Dispatches</h2>
      
      {loading ? (
        <div style={{ color: '#D4AF37', textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>Loading News...</div>
      ) : newsList.length === 0 ? (
        <div style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>No press releases available at the moment.</div>
      ) : (
        <div className="news-grid">
          {newsList.map(news => (
            <div className="news-card" key={news._id} style={{ background: '#111', padding: '30px', borderRadius: '8px', border: '1px solid #222' }}>
              <span className="news-date" style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold' }}>
                {news.date} | {news.category}
              </span>
              <h4 style={{ color: '#fff', lineHeight: '1.5', marginTop: '10px', fontSize: '18px' }}>{news.title}</h4>
              <p style={{ color: '#aaa', fontSize: '13px', marginTop: '10px', marginBottom: '15px' }}>
                {news.description && news.description.substring(0, 100)}...
              </p>
              
              {/* Agar Custom Link hai to Naye tab mein khulega */}
              {news.linkUrl ? (
                <a href={news.linkUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '12px', marginTop: '15px', display: 'block', fontWeight: 'bold', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='#D4AF37'} onMouseOut={(e)=>e.target.style.color='#8b9bb4'}>
                  READ RELEASE &rarr;
                </a>
              ) : (
                <Link to={`/newsroom/${news._id}`} style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '12px', marginTop: '15px', display: 'block', fontWeight: 'bold', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='#D4AF37'} onMouseOut={(e)=>e.target.style.color='#8b9bb4'}>
                  READ RELEASE &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Newsroom;