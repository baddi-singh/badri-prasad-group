import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompanyProvider } from './context/CompanyContext'; 

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; // 🔥 Naya Scroll Manager

// Pages
import Home from './pages/Home'; 
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; 
import CareersPage from './pages/CareersPage'; 
import LeadershipPage from './pages/LeadershipPage';
import VenturesPage from './pages/VenturesPage';
import NewsroomPage from './pages/NewsroomPage';
import InvestorsPage from './pages/InvestorsPage';
import AdminLogin from './pages/AdminLogin'; 
import AdminDashboard from './pages/AdminDashboard';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <CompanyProvider>
      <Router>
        {/* 🔥 Ye component background mein chup chap apna kaam karega aur har page ko top par layega */}
        <ScrollToTop /> 

        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
          <Navbar /> 
          
          <main className="pt-20">
           <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/ventures" element={<VenturesPage />} /> 
              <Route path="/newsroom" element={<NewsroomPage />} />
              <Route path="/investors" element={<InvestorsPage />} /> 
              <Route path="/page/sustainability" element={<Sustainability />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CompanyProvider>
  );
}

export default App;