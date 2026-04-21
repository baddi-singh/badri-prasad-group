// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import ComingSoon from './components/ComingSoon';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Main Website Route */}
//         <Route path="/" element={<Home />} />
        
//         {/* Any other page will go to Coming Soon for now */}
//         <Route path="/page/:pageName" element={<ComingSoon />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComingSoon from './components/ComingSoon';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:pageName" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;