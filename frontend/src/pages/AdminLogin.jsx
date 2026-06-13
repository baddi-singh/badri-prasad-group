// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Backend ko as 'userId' & 'password' bhejna hai kyuki adminRoutes mein wahi expected hai
//       const res = await axios.post('${import.meta.env.VITE_API_URL}/api/admin/login', {
//         userId: email,
//         password: password
//       });

//       if (res.data.success) {
//         localStorage.setItem('adminToken', res.data.token);
//         navigate('/admin/dashboard'); 
//       }
//     } catch (err) {
//       setError('❌ ' + (err.response?.data?.message || 'Authentication Failed. Please verify your credentials.'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="container animate-up" style={{ 
//       minHeight: '100vh', 
//       background: '#050505', 
//       paddingTop: '120px', 
//       paddingBottom: '100px', 
//       display: 'flex', 
//       alignItems: 'center', 
//       justifyContent: 'center' 
//     }}>
      
//       {/* Premium Glass Box */}
//       <div style={{ 
//         maxWidth: '450px', width: '100%', padding: '45px 40px', 
//         background: 'rgba(15, 15, 15, 0.8)', backdropFilter: 'blur(12px)',
//         border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '16px', 
//         boxShadow: '0 20px 50px rgba(0,0,0,0.9)' 
//       }}>
        
//         {/* --- ENTERPRISE HEADER --- */}
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#fff', letterSpacing: '2px', margin: '0 0 8px 0' }}>
//             BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span> GROUP
//           </h2>
//           <div style={{ fontSize: '11px', color: '#D4AF37', letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>
//             Enterprise Access Portal
//           </div>
//           <div style={{ fontSize: '9px', color: '#555', letterSpacing: '1px', marginTop: '8px' }}>
//             AUTHORIZED PERSONNEL ONLY
//           </div>
//         </div>

//         {/* Optimized Error Message Box */}
//         {error && (
//           <div style={{ 
//             background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.5)', 
//             color: '#ff4d4d', padding: '12px', borderRadius: '8px', marginBottom: '25px', 
//             textAlign: 'center', fontSize: '12px', fontWeight: 'bold' 
//           }}>
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
          
//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '10px', letterSpacing: '1.5px', fontWeight: 'bold' }}>
//               CORPORATE ADMIN ID
//             </label>
//             <input 
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ 
//                 width: '100%', padding: '14px 15px', background: '#0a0a0a', 
//                 border: '1px solid #333', borderRadius: '8px', color: '#fff', 
//                 fontSize: '14px', outline: 'none', transition: 'border 0.3s ease',
//                 boxSizing: 'border-box'
//               }}
//               onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
//               onBlur={(e) => e.target.style.borderColor = '#333'}
//               required 
//             />
//           </div>
          
//           <div style={{ marginBottom: '35px' }}>
//             <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '10px', letterSpacing: '1.5px', fontWeight: 'bold' }}>
//               SECURE ACCESS KEY
//             </label>
//             <input 
//               type="password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{ 
//                 width: '100%', padding: '14px 15px', background: '#0a0a0a', 
//                 border: '1px solid #333', borderRadius: '8px', color: '#fff', 
//                 fontSize: '14px', outline: 'none', transition: 'border 0.3s ease',
//                 boxSizing: 'border-box'
//               }}
//               onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
//               onBlur={(e) => e.target.style.borderColor = '#333'}
//               required 
//             />
//           </div>
          
//           <button 
//             type="submit" 
//             style={{ 
//               width: '100%', padding: '15px', background: '#D4AF37', color: '#000', 
//               border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '900', 
//               letterSpacing: '1.5px', cursor: 'pointer', transition: 'all 0.3s ease',
//               boxSizing: 'border-box'
//             }}
//             disabled={loading}
//             onMouseOver={(e) => { 
//               if(!loading){
//                 e.target.style.background = '#e6c245'; 
//                 e.target.style.transform = 'translateY(-2px)'; 
//                 e.target.style.boxShadow = '0 5px 15px rgba(212,175,55,0.4)'; 
//               }
//             }}
//             onMouseOut={(e) => { 
//               if(!loading){
//                 e.target.style.background = '#D4AF37'; 
//                 e.target.style.transform = 'translateY(0)'; 
//                 e.target.style.boxShadow = 'none'; 
//               }
//             }}
//           >
//             {loading ? 'AUTHENTICATING...' : 'SECURE LOGIN'}
//           </button>
//         </form>

//       </div>
//     </section>
//   );
// };

// export default AdminLogin;














































import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 🔥 FIX: Backticks (`) laga diye gaye hain
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, {
        userId: email,
        password: password
      });

      if (res.data.success) {
        localStorage.setItem('adminToken', res.data.token);
        navigate('/admin/dashboard'); 
      }
    } catch (err) {
      setError('❌ ' + (err.response?.data?.message || 'Authentication Failed. Please verify your credentials.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container animate-up" style={{ 
      minHeight: '100vh', 
      background: '#050505', 
      paddingTop: '120px', 
      paddingBottom: '100px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      
      <div style={{ 
        maxWidth: '450px', width: '100%', padding: '45px 40px', 
        background: 'rgba(15, 15, 15, 0.8)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '16px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.9)' 
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#fff', letterSpacing: '2px', margin: '0 0 8px 0' }}>
            BADRI<span style={{ color: '#D4AF37' }}>PRASAD</span> GROUP
          </h2>
          <div style={{ fontSize: '11px', color: '#D4AF37', letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Enterprise Access Portal
          </div>
          <div style={{ fontSize: '9px', color: '#555', letterSpacing: '1px', marginTop: '8px' }}>
            AUTHORIZED PERSONNEL ONLY
          </div>
        </div>

        {error && (
          <div style={{ 
            background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.5)', 
            color: '#ff4d4d', padding: '12px', borderRadius: '8px', marginBottom: '25px', 
            textAlign: 'center', fontSize: '12px', fontWeight: 'bold' 
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '10px', letterSpacing: '1.5px', fontWeight: 'bold' }}>
              CORPORATE ADMIN ID
            </label>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: '100%', padding: '14px 15px', background: '#0a0a0a', 
                border: '1px solid #333', borderRadius: '8px', color: '#fff', 
                fontSize: '14px', outline: 'none', transition: 'border 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              required 
            />
          </div>
          
          <div style={{ marginBottom: '35px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '10px', letterSpacing: '1.5px', fontWeight: 'bold' }}>
              SECURE ACCESS KEY
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', padding: '14px 15px', background: '#0a0a0a', 
                border: '1px solid #333', borderRadius: '8px', color: '#fff', 
                fontSize: '14px', outline: 'none', transition: 'border 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              required 
            />
          </div>
          
          <button 
            type="submit" 
            style={{ 
              width: '100%', padding: '15px', background: '#D4AF37', color: '#000', 
              border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '900', 
              letterSpacing: '1.5px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            disabled={loading}
            onMouseOver={(e) => { 
              if(!loading){
                e.target.style.background = '#e6c245'; 
                e.target.style.transform = 'translateY(-2px)'; 
                e.target.style.boxShadow = '0 5px 15px rgba(212,175,55,0.4)'; 
              }
            }}
            onMouseOut={(e) => { 
              if(!loading){
                e.target.style.background = '#D4AF37'; 
                e.target.style.transform = 'translateY(0)'; 
                e.target.style.boxShadow = 'none'; 
              }
            }}
          >
            {loading ? 'AUTHENTICATING...' : 'SECURE LOGIN'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default AdminLogin;