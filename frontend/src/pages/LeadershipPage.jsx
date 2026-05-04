import React from 'react';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';

const LeadershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: '#050505' }}>
      
      {/* Master Component ko yahan call kar liya. No duplicate code! */}
      <div style={{ paddingTop: '20px' }}>
        <Leadership />
      </div>

      <Footer />
    </div>
  );
};

export default LeadershipPage;