import { Link } from 'react-router-dom';
import { NEWS_DATA } from '../data/constants';

const Newsroom = () => {
  return (
    <section id="news" className="container animate-up">
        <span className="section-subtitle">Press & Media</span>
        <h2 className="section-title">Latest Dispatches</h2>
        <div className="news-grid">
            {NEWS_DATA.map(news => (
                <div className="news-card" key={news.id}>
                    <span className="news-date">{news.date}</span>
                    <h4 style={{ color: '#fff', lineHeight: '1.5' }}>{news.title}</h4>
                    <Link to="/page/press" style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '0.8rem', marginTop: '15px', display: 'block' }}>Read Release &rarr;</Link>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Newsroom;