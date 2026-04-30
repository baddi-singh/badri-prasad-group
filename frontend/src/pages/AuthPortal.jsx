import React, { useState } from 'react';

const AuthPortal = () => {
  const [role, setRole] = useState('admin'); // 'admin' or 'executive'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan backend API call aayegi (Role ke basis par)
    console.log(`Logging in as ${role} with`, email);
    alert(`Authenticating ${role.toUpperCase()}... Redirecting to Command Center`);
  };

  return (
    <section style={{ 
      minHeight: '100vh', 
      background: '#050505', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)' }}></div>

      <div style={{ 
        background: 'rgba(15, 15, 15, 0.8)', 
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.05)', 
        borderRadius: '24px', 
        padding: '50px 40px', 
        width: '100%', 
        maxWidth: '450px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        zIndex: 10
      }}>
        
        {/* LOGO AREA */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 5px 0' }}>
            BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span>
          </h1>
          <p style={{ color: '#888', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '4px', margin: 0 }}>
            Unified Access Portal
          </p>
        </div>

        {/* ROLE TOGGLE TABS */}
        <div style={{ display: 'flex', background: '#0a0a0a', borderRadius: '8px', padding: '5px', marginBottom: '30px', border: '1px solid #222' }}>
          <button 
            onClick={() => setRole('admin')}
            style={{ 
              flex: 1, padding: '10px 0', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s',
              background: role === 'admin' ? '#D4AF37' : 'transparent', 
              color: role === 'admin' ? '#000' : '#888' 
            }}
          >
            SUPER ADMIN
          </button>
          <button 
            onClick={() => setRole('executive')}
            style={{ 
              flex: 1, padding: '10px 0', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s',
              background: role === 'executive' ? '#222' : 'transparent', 
              color: role === 'executive' ? '#fff' : '#888' 
            }}
          >
            EXECUTIVE
          </button>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#ccc', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '8px' }}>
              {role === 'admin' ? 'MASTER EMAIL' : 'EXECUTIVE ID'}
            </label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: '100%', padding: '15px', background: '#111', border: '1px solid #333', 
                borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none', transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', color: '#ccc', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '8px' }}>
              SECURE KEY
            </label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', padding: '15px', background: '#111', border: '1px solid #333', 
                borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none', transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            style={{ 
              width: '100%', padding: '15px', background: role === 'admin' ? '#D4AF37' : '#fff', 
              color: '#000', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '900', 
              letterSpacing: '1px', cursor: 'pointer', transition: '0.3s'
            }}
          >
            AUTHORIZE ACCESS
          </button>
        </form>

      </div>
    </section>
  );
};

export default AuthPortal;