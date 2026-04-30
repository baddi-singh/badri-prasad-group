import AboutPage from './pages/AboutPage';
import AdminDashboard from './pages/AdminDashboard';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadershipPage from './pages/LeadershipPage';
import VenturesPage from './pages/VenturesPage';
import NewsroomPage from './pages/NewsroomPage';
import InvestorsPage from './pages/InvestorsPage';

// Navbar import
import Navbar from './components/Navbar';

// Pages import
import Home from './pages/Home'; 
import ContactPage from './pages/ContactPage'; 
import CareersPage from './pages/CareersPage'; 
import AdminLogin from './pages/AdminLogin'; // <-- 1. YAHAN IMPORT KIYA HAI


function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
        {/* Navbar hamesha frame ke top par fix rahega */}
        <Navbar /> 
        
        {/* pt-20 isliye taaki content fixed navbar ke piche na chhupe */}
        <main className="pt-20">

         <Routes>
        
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/ventures" element={<VenturesPage />} /> {/* <-- YAHAN ADD KIYA HAI */}
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/investors" element={<InvestorsPage />} /> {/* <-- VIP RASTA YAHAN HAI */}


            {/* <-- 2. YAHAN ADMIN LOGIN KA RASTA ADD KIYA HAI --> */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default App;



// import AdminLogin from './pages/AdminLogin';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// // Navbar import
// import Navbar from './components/Navbar';

// // Pages import
// import Home from './pages/Home'; 
// import ContactPage from './pages/ContactPage'; 
// import CareersPage from './pages/CareersPage'; // 1. YAHAN IMPORT KIYA HAI

// function App() {
//   return (
//     <Router>
//       <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
//         {/* Navbar hamesha frame ke top par fix rahega */}
//         <Navbar /> 
        
//         {/* pt-20 isliye taaki content fixed navbar ke piche na chhupe */}
//         <main className="pt-20">
//           <Routes>
//             {/* Landing Page */}
//             <Route path="/" element={<Home />} />
            
//             {/* Contact Page */}
//             <Route path="/contact" element={<ContactPage />} />
            
//             {/* 2. YAHAN NAYA RASTA (ROUTE) JODA HAI */}
//             <Route path="/careers" element={<CareersPage />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;