import { useParams, Link } from 'react-router-dom';

const ComingSoon = () => {
  // useParams URL se 'pageName' nikaal lega
  const { pageName } = useParams();
  
  // URL mein jo hyphens hain (e.g., badri-digital), usko space mein convert karna
  const formattedName = pageName.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="coming-soon-container">
      <h1>{formattedName}</h1>
      <p style={{ fontSize: '1.5rem', color: '#8b9bb4' }}>
        Development is in progress. The Ecosystem module is coming soon!
        <br/>Please re-check again
      </p>
      <Link to="/" className="back-btn">← Return to Main Ecosystem</Link>
    </div>
  );
};

export default ComingSoon;