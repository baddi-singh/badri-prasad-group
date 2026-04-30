import React from 'react';

const Hero = () => {
  // Bina URL change kiye smooth scroll karne ka function
  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero animate-up">
      <span className="section-subtitle">Global Quality. Seamless Execution.</span>
      <h1>Architecting The Future <br /> Of Enterprise.</h1>
      <p>A unified conglomerate bridging the gap between Quality Assurance, Seamless Motion, and Omnichannel Excellence.</p>
      <div style={{ marginTop: '40px' }}>
        <button onClick={handleScroll} className="btn-gold" style={{ cursor: 'pointer' }}>
          Explore The Ecosystem
        </button>
      </div>
    </section>
  );
};

export default Hero;






// const Hero = () => {
//   return (
//     <section className="hero animate-up">
//       <span className="section-subtitle">Global Quality. Seamless Execution.</span>
//       <h1>Architecting The Future <br /> Of Enterprise.</h1>
//       <p>A unified conglomerate bridging the gap between Quality Assurance, Seamless Motion, and Omnichannel Excellence.</p>
//       <div style={{ marginTop: '40px' }}>
//           <a href="#ecosystem" className="btn-gold">Explore The Ecosystem</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;