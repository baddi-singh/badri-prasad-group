import React from 'react';

const GlobalMap = () => {
  // Directory Locations & Search Queries
  const locations = [
    { city: "Patna, India", type: "Corporate HQ", status: "Active", query: "Patna, Bihar, India" },
    { city: "Dariyapur, Bihar", type: "Greater Patna Hub", status: "Active", query: "Dariyapur, Bihar, India" },
    { city: "Delhi NCR", type: "Strategic Office", status: "Active", query: "New Delhi, India" },
    { city: "Noida", type: "Tech Operations", status: "Active", query: "Noida, Uttar Pradesh" },
    { city: "Gaya, India", type: "Regional Office", status: "Active", query: "Gaya, Bihar, India" },
    { city: "Chandigarh", type: "Global IT Hub", status: "Active", query: "Chandigarh, India" },
    { city: "Mohali, India", type: "Tech Development", status: "Active", query: "Mohali, Punjab, India" },
    { city: "Lucknow, UP", type: "Regional Branch", status: "Active", query: "Lucknow, Uttar Pradesh" },
    { city: "Pune, India", type: "Financial Operations", status: "Active", query: "Pune, Maharashtra, India" },
    { city: "Bangalore", type: "Innovation Hub", status: "Active", query: "Bengaluru, Karnataka" },
    { city: "Dubai, UAE", type: "International Hub", status: "Upcoming", query: "Dubai, United Arab Emirates" },
    { city: "Sydney, Australia", type: "APAC HQ", status: "Upcoming", query: "Sydney, Australia" },
    { city: "Melbourne, Australia", type: "Victoria Desk", status: "Upcoming", query: "Melbourne, Australia" }
  ];

  // SMART REDIRECT (Apple Maps for iOS/Mac, Google Maps for Android/Windows)
  const openMap = (searchQuery) => {
    const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    const encodedQuery = encodeURIComponent(searchQuery);
    if (isAppleDevice) {
      window.open(`http://maps.apple.com/?q=${encodedQuery}`, '_blank');
    } else {
      window.open(`https://maps.google.com/?q=${encodedQuery}`, '_blank');
    }
  };

  return (
    <section style={{ background: '#050505', padding: '100px 0', borderTop: '1px solid #111' }}>
      
      <style>
        {`
          @keyframes pulse-gold { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
          
          .map-container {
            position: relative; background: #1a1e24; border-radius: 16px; 
            border: 1px solid rgba(255,255,255,0.05); box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
            display: flex; align-items: center; justify-content: center; overflow: hidden;
            height: 520px;
          }
          
          .golden-dot { width: 8px; height: 8px; border-radius: 50%; position: absolute; z-index: 10; pointer-events: none; }
          .dot-ripple { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; animation: pulse-gold 2s infinite; }
          
          /* --- OVERLAP-FREE LABELS --- */
          .map-group { position: absolute; z-index: 20; cursor: pointer; }
          
          .city-label {
            position: absolute; background: rgba(15, 15, 15, 0.95); border: 1px solid #555;
            color: #eee; padding: 6px 12px; font-size: 11px; font-weight: 800;
            border-radius: 6px; box-shadow: 0 5px 15px rgba(0,0,0,0.8);
            text-align: center; line-height: 1.4; letter-spacing: 0.5px;
            transition: all 0.2s ease; white-space: nowrap;
          }
          
          /* Hover State: Label Highlights */
          .map-group:hover { z-index: 50; }
          .map-group:hover .city-label {
            background: #D4AF37; color: #000; border-color: #D4AF37; transform: scale(1.05);
          }
          
          /* Premium Tooltip (View on Map) */
          .map-group::after {
            content: '↗ View on Map'; position: absolute;
            background: #fff; color: #000; font-size: 10px; font-weight: bold;
            padding: 4px 8px; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            opacity: 0; visibility: hidden; transition: all 0.3s ease; white-space: nowrap; pointer-events: none;
          }
          /* Tooltip Positioning */
          .map-group:hover::after { opacity: 1; visibility: visible; }
          .tooltip-top::after { top: -35px; left: 50%; transform: translateX(-50%); }
          .tooltip-bottom::after { bottom: -35px; left: 50%; transform: translateX(-50%); }

          /* Right List Hover */
          .list-item { transition: background 0.2s; cursor: pointer; border-radius: 8px; }
          .list-item:hover { background: rgba(212,175,55,0.05); border-color: #D4AF37 !important; }
          
          .scroll-dir::-webkit-scrollbar { width: 4px; }
          .scroll-dir::-webkit-scrollbar-track { background: #111; border-radius: 10px; }
          .scroll-dir::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        `}
      </style>

      <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>
            Operating <span style={{ color: '#D4AF37' }}>Offices</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: '30px', alignItems: 'stretch' }}>
          
          {/* THE ZERO-OVERLAP MAP AREA */}
          <div className="map-container">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="World Map"
              style={{ width: '110%', height: 'auto', opacity: 0.2, filter: 'invert(1) brightness(0.7)' }}
            />
            {/* India Highlight Glow */}
            <div style={{ position: 'absolute', top: '40%', left: '68%', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

            {/* --- 1. CHANDIGARH & MOHALI (Pushed Far Up-Left) --- */}
            <div className="map-group tooltip-top" style={{ top: '39%', left: '68.5%' }} onClick={() => openMap('Chandigarh, India')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ bottom: '15px', right: '10px' }}>
                Chandigarh<br/>Mohali
              </div>
            </div>

            {/* --- 2. DELHI & NOIDA (Pushed Straight Up) --- */}
            <div className="map-group tooltip-top" style={{ top: '41%', left: '69.5%' }} onClick={() => openMap('New Delhi, India')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ bottom: '20px', left: '-30px' }}>
                Delhi NCR<br/>Noida
              </div>
            </div>

            {/* --- 3. LUCKNOW (Pushed Right) --- */}
            <div className="map-group tooltip-top" style={{ top: '42.5%', left: '70%' }} onClick={() => openMap('Lucknow, UP')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ bottom: '5px', left: '15px' }}>
                Lucknow
              </div>
            </div>

            {/* --- 4. BIHAR HUB (Pushed Far Down-Right into Bay of Bengal) --- */}
            <div className="map-group tooltip-bottom" style={{ top: '43.5%', left: '71%' }} onClick={() => openMap('Patna, Bihar, India')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ top: '15px', left: '10px', borderLeft: '3px solid #00e5ff' }}>
                Patna / Dariyapur <br/> Gaya
              </div>
            </div>

            {/* --- 5. BANGALORE (Pushed Straight Down into Indian Ocean) --- */}
            <div className="map-group tooltip-bottom" style={{ top: '51%', left: '69.5%' }} onClick={() => openMap('Bengaluru, Karnataka')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ top: '20px', left: '-35px' }}>
                Bangalore
              </div>
            </div>

            {/* --- 6. PUNE (Pushed Far Left into Arabian Sea) --- */}
            <div className="map-group tooltip-bottom" style={{ top: '47%', left: '68.5%' }} onClick={() => openMap('Pune, Maharashtra')}>
              <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
              <div className="city-label" style={{ top: '5px', right: '15px' }}>
                Pune, MH
              </div>
            </div>

            {/* --- 7. DUBAI (Safe on Left) --- */}
            <div className="map-group tooltip-top" style={{ top: '44.5%', left: '63%' }} onClick={() => openMap('Dubai, UAE')}>
              <div className="golden-dot" style={{ background: '#00e5ff', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#00e5ff' }}></div></div>
              <div className="city-label" style={{ top: '-12px', right: '15px', borderLeft: '3px solid #00e5ff' }}>
                DUBAI
              </div>
            </div>

            {/* --- 8. AUSTRALIA (Safe on Bottom Right) --- */}
            <div className="map-group tooltip-top" style={{ top: '75%', left: '86%' }} onClick={() => openMap('Sydney, Australia')}>
              <div className="golden-dot" style={{ background: '#00e5ff', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#00e5ff' }}></div></div>
              <div className="city-label" style={{ bottom: '15px', right: '-10px', borderLeft: '3px solid #00e5ff' }}>
                AUSTRALIA
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE DIRECTORY */}
          <div style={{ background: '#0a0a0a', padding: '30px 20px', borderRadius: '16px', border: '1px solid #1a1a1a', height: '520px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', padding: '0 10px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', margin: 0 }}>Unit Directory</h3>
              <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold' }}>13 Offices</span>
            </div>

            <div className="scroll-dir" style={{ overflowY: 'auto', flexGrow: 1, paddingRight: '5px' }}>
              {locations.map((loc, i) => (
                <div 
                  key={i} 
                  className="list-item"
                  onClick={() => openMap(loc.query)}
                  style={{ padding: '12px 10px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  title="Click to view on Map"
                >
                  <div>
                    <h4 style={{ color: '#eee', fontSize: '14px', fontWeight: '600', margin: '0 0 4px 0' }}>{loc.city}</h4>
                    <p style={{ color: '#666', fontSize: '10px', margin: 0, textTransform: 'uppercase' }}>{loc.type}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: loc.status === 'Active' ? '#D4AF37' : '#00e5ff', fontSize: '10px', fontWeight: 'bold' }}>
                      {loc.status.toUpperCase()}
                    </span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: loc.status === 'Active' ? '#D4AF37' : '#00e5ff' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalMap;







// import React from 'react';

// const GlobalMap = () => {
//   // Directory List Data
//   const locations = [
//     { city: "Patna, India", type: "Corporate HQ", status: "Active", query: "Patna, Bihar, India" },
//     { city: "Dariyapur, Bihar", type: "Greater Patna Hub", status: "Active", query: "Dariyapur, Bihar, India" },
//     { city: "Delhi NCR", type: "Strategic Office", status: "Active", query: "New Delhi, India" },
//     { city: "Noida", type: "Tech Operations", status: "Active", query: "Noida, Uttar Pradesh" },
//     { city: "Gaya, India", type: "Regional Office", status: "Active", query: "Gaya, Bihar, India" },
//     { city: "Chandigarh", type: "Global IT Hub", status: "Active", query: "Chandigarh, India" },
//     { city: "Mohali, India", type: "Tech Development", status: "Active", query: "Mohali, Punjab, India" },
//     { city: "Lucknow, UP", type: "Regional Branch", status: "Active", query: "Lucknow, Uttar Pradesh" },
//     { city: "Pune, India", type: "Financial Operations", status: "Active", query: "Pune, Maharashtra, India" },
//     { city: "Bangalore", type: "Innovation Hub", status: "Active", query: "Bengaluru, Karnataka" },
//     { city: "Dubai, UAE", type: "International Hub", status: "Upcoming", query: "Dubai, United Arab Emirates" },
//     { city: "Sydney, Australia", type: "APAC HQ", status: "Upcoming", query: "Sydney, Australia" },
//     { city: "Melbourne, Australia", type: "Victoria Desk", status: "Upcoming", query: "Melbourne, Australia" }
//   ];

//   // SMART DEVICE REDIRECT FUNCTION (Google Maps vs Apple Maps)
//   const openMap = (searchQuery) => {
//     const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
//     const encodedQuery = encodeURIComponent(searchQuery);
//     if (isAppleDevice) {
//       window.open(`http://maps.apple.com/?q=${encodedQuery}`, '_blank');
//     } else {
//       window.open(`http://maps.google.com/?q=${encodedQuery}`, '_blank');
//     }
//   };

//   return (
//     <section style={{ background: '#050505', padding: '100px 0', borderTop: '1px solid #111' }}>
      
//       <style>
//         {`
//           @keyframes pulse-gold { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }
          
//           .map-container {
//             position: relative; background: #1a1e24; border-radius: 16px; 
//             border: 1px solid rgba(255,255,255,0.05); box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
//             display: flex; align-items: center; justify-content: center; overflow: hidden;
//             height: 520px;
//           }
          
//           .golden-dot { width: 8px; height: 8px; border-radius: 50%; position: absolute; z-index: 10; pointer-events: none; }
//           .dot-ripple { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; animation: pulse-gold 2s infinite; }
          
//           /* --- MNC TOOLTIP & HOVER EFFECTS --- */
//           .map-group { position: absolute; z-index: 20; cursor: pointer; }
          
//           .city-label {
//             position: absolute; background: rgba(12, 12, 12, 0.95); border: 1px solid #555;
//             color: #ccc; padding: 6px 12px; font-size: 11px; font-weight: 800;
//             border-radius: 6px; box-shadow: 0 5px 15px rgba(0,0,0,0.8);
//             text-align: center; line-height: 1.5; letter-spacing: 0.5px;
//             transition: all 0.3s ease; white-space: nowrap;
//           }
          
//           /* Hover State: Label turns Gold */
//           .map-group:hover { z-index: 50; }
//           .map-group:hover .city-label {
//             background: #D4AF37; color: #000; border-color: #D4AF37; transform: scale(1.05);
//           }
          
//           /* Tooltip Text (View Map) */
//           .map-group::after {
//             content: '↗ View on Map'; position: absolute; top: -35px; left: 50%;
//             transform: translateX(-50%) translateY(10px); background: #fff; color: #000;
//             font-size: 10px; font-weight: bold; padding: 4px 8px; border-radius: 4px;
//             opacity: 0; visibility: hidden; transition: all 0.3s ease; white-space: nowrap; pointer-events: none;
//             box-shadow: 0 4px 10px rgba(0,0,0,0.3);
//           }
//           .map-group:hover::after { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }

//           /* Right List Hover */
//           .list-item { transition: background 0.2s; cursor: pointer; border-radius: 8px; }
//           .list-item:hover { background: rgba(212,175,55,0.05); border-color: #D4AF37 !important; }
          
//           .scroll-dir::-webkit-scrollbar { width: 4px; }
//           .scroll-dir::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
//         `}
//       </style>

//       <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
        
//         <div style={{ marginBottom: '40px' }}>
//           <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff' }}>
//             Operating <span style={{ color: '#D4AF37' }}>Offices</span>
//           </h2>
//         </div>

//         <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: '30px', alignItems: 'stretch' }}>
          
//           {/* LEFT: THE CLEAR & SPREAD-OUT MAP */}
//           <div className="map-container">
//             <img 
//               src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
//               alt="World Map"
//               style={{ width: '110%', height: 'auto', opacity: 0.2, filter: 'invert(1) brightness(0.7)' }}
//             />
//             {/* Soft highlight glow behind India */}
//             <div style={{ position: 'absolute', top: '40%', left: '68%', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

//             {/* --- 1. CHANDIGARH & MOHALI (Pushed Up-Left) --- */}
//             <div className="map-group" style={{ top: '39%', left: '68.5%' }} onClick={() => openMap('Chandigarh, India')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '-45px', left: '-60px' }}>
//                 Chandigarh / Mohali
//               </div>
//             </div>

//             {/* --- 2. DELHI & NOIDA (Pushed Up-Right into Tibet area) --- */}
//             <div className="map-group" style={{ top: '41%', left: '69.5%' }} onClick={() => openMap('New Delhi, India')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '-40px', left: '15px' }}>
//                 Delhi NCR / Noida
//               </div>
//             </div>

//             {/* --- 3. BIHAR HUB (Pushed Right into Myanmar/Bay of Bengal) --- */}
//             <div className="map-group" style={{ top: '43.5%', left: '71%' }} onClick={() => openMap('Patna, Bihar, India')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '-10px', left: '20px', borderLeft: '3px solid #00e5ff' }}>
//                 Patna / Dariyapur <br/> Gaya
//               </div>
//             </div>

//             {/* --- 4. LUCKNOW (Pushed down slightly) --- */}
//             <div className="map-group" style={{ top: '42.5%', left: '70%' }} onClick={() => openMap('Lucknow, UP')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '15px', left: '-30px' }}>
//                 Lucknow, UP
//               </div>
//             </div>

//             {/* --- 5. PUNE (Pushed Left into Arabian Sea) --- */}
//             <div className="map-group" style={{ top: '47%', left: '68.5%' }} onClick={() => openMap('Pune, Maharashtra')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '5px', left: '-90px' }}>
//                 Pune, MH
//               </div>
//             </div>

//             {/* --- 6. BANGALORE (Pushed straight down into Indian Ocean) --- */}
//             <div className="map-group" style={{ top: '51%', left: '69.5%' }} onClick={() => openMap('Bengaluru, Karnataka')}>
//               <div className="golden-dot" style={{ background: '#D4AF37', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#D4AF37' }}></div></div>
//               <div className="city-label" style={{ top: '15px', left: '-35px' }}>
//                 Bangalore
//               </div>
//             </div>

//             {/* --- 7. DUBAI (Far Left) --- */}
//             <div className="map-group" style={{ top: '44.5%', left: '63%' }} onClick={() => openMap('Dubai, UAE')}>
//               <div className="golden-dot" style={{ background: '#00e5ff', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#00e5ff' }}></div></div>
//               <div className="city-label" style={{ top: '-12px', left: '-70px', borderLeft: '3px solid #00e5ff' }}>
//                 DUBAI
//               </div>
//             </div>

//             {/* --- 8. AUSTRALIA (Bottom Right) --- */}
//             <div className="map-group" style={{ top: '75%', left: '86%' }} onClick={() => openMap('Sydney, Australia')}>
//               <div className="golden-dot" style={{ background: '#00e5ff', left: '-4px', top: '-4px' }}><div className="dot-ripple" style={{ background: '#00e5ff' }}></div></div>
//               <div className="city-label" style={{ top: '-35px', left: '-40px', borderLeft: '3px solid #00e5ff' }}>
//                 AUSTRALIA
//               </div>
//             </div>

//           </div>

//           {/* RIGHT: INTERACTIVE DIRECTORY */}
//           <div style={{ background: '#0a0a0a', padding: '30px 20px', borderRadius: '16px', border: '1px solid #1a1a1a', height: '520px', display: 'flex', flexDirection: 'column' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 10px' }}>
//               <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', margin: 0 }}>Unit Directory</h3>
//               <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 'bold' }}>13 Offices</span>
//             </div>

//             <div className="scroll-dir" style={{ overflowY: 'auto', flexGrow: 1, paddingRight: '5px' }}>
//               {locations.map((loc, i) => (
//                 <div 
//                   key={i} 
//                   className="list-item"
//                   onClick={() => openMap(loc.query)}
//                   style={{ padding: '12px 10px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
//                   title="Click to view on Map"
//                 >
//                   <div>
//                     <h4 style={{ color: '#eee', fontSize: '14px', fontWeight: '600', margin: '0 0 4px 0' }}>{loc.city}</h4>
//                     <p style={{ color: '#666', fontSize: '10px', margin: 0, textTransform: 'uppercase' }}>{loc.type}</p>
//                   </div>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <span style={{ color: loc.status === 'Active' ? '#D4AF37' : '#00e5ff', fontSize: '10px', fontWeight: 'bold' }}>
//                       {loc.status.toUpperCase()}
//                     </span>
//                     <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: loc.status === 'Active' ? '#D4AF37' : '#00e5ff' }}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalMap;
