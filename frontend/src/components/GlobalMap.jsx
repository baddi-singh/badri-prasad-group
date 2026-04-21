import React from 'react';

const GlobalMap = () => {
  return (
    <section className="container animate-up">
        <div style={{ textAlign: 'center' }}>
            <span className="section-subtitle" style={{ color: '#fff' }}>Global Scale</span>
            <h2 className="section-title">Operating Across The Globe</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>From our IT Hub in Chandigarh to key international markets.</p>
        </div>
        
        {/* Wrapper class matches your index.css */}
        <div className="map-container">
            
            {/* THE FOOLPROOF IMAGE: React handles filters better on direct tags */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="Global Map" 
              className="map-image" 
            />

            {/* --- INDIA CLUSTER (World Map Coordinates) --- */}
            <div className="glowing-dot" data-city="CHANDIGARH (HQ)" style={{ top: '39%', left: '69%' }}></div>
            <div className="glowing-dot" data-city="MOHALI" style={{ top: '37%', left: '68%' }}></div>
            <div className="glowing-dot" data-city="DELHI" style={{ top: '41%', left: '69.5%' }}></div>
            <div className="glowing-dot" data-city="UDAIPUR" style={{ top: '43%', left: '68%' }}></div>
            <div className="glowing-dot" data-city="MUMBAI" style={{ top: '46%', left: '68.5%' }}></div>
            <div className="glowing-dot" data-city="PATNA" style={{ top: '42%', left: '71%' }}></div>
            <div className="glowing-dot" data-city="SARAN (BELA)" style={{ top: '41%', left: '71.5%' }}></div>

            {/* --- INTERNATIONAL LOCATIONS --- */}
            <div className="glowing-dot" data-city="MALAYSIA" style={{ top: '56%', left: '77%' }}></div>
            <div className="glowing-dot" data-city="AUSTRALIA" style={{ top: '76%', left: '87%' }}></div>
        </div>
    </section>
  );
};

export default GlobalMap;