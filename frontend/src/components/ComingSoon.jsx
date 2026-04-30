import { useParams } from 'react-router-dom';

const ComingSoon = () => {
  const { pageName } = useParams();
  const formattedName = pageName ? pageName.replace(/-/g, ' ').toUpperCase() : "MODULE";

  return (
    <div className="coming-soon-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '20px' }}>{formattedName}</h1>
      <p style={{ fontSize: '1.2rem', color: '#8b9bb4', marginBottom: '30px', maxWidth: '600px', lineHeight: '1.6' }}>
        Development is in progress. The Ecosystem module is coming soon!<br/>Please re-check again.
      </p>
      {/* DIRECT EXTERNAL LINK FIXED */}
      <a href="https://www.badridigitalsolutions.com/" target="_blank" rel="noopener noreferrer" className="btn-gold">
        Return to Badri Digital Solutions
      </a>
    </div>
  );
};
export default ComingSoon;









// import { useParams, Link } from 'react-router-dom';

// const ComingSoon = () => {
//   // useParams URL se 'pageName' nikaal lega
//   const { pageName } = useParams();
  
//   // URL mein jo hyphens hain (e.g., badri-digital), usko space mein convert karna
//   const formattedName = pageName.replace(/-/g, ' ').toUpperCase();

//   return (
//     <div className="coming-soon-container">
//       <h1>{formattedName}</h1>
//       <p style={{ fontSize: '1.5rem', color: '#8b9bb4' }}>
//         Development is in progress. The Ecosystem module is coming soon!
//         <br/>Please re-check again
//       </p>
//       <Link to="/" className="back-btn">← Return to Main Ecosystem</Link>
//     </div>
//   );
// };

// // export default ComingSoon;