// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const CompanyContext = createContext();

// export const CompanyProvider = ({ children }) => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔄 Ye function hi magic karega
//   const fetchCompanies = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//       if (res.data && res.data.success) {
//         setCompanies(res.data.data);
//       }
//     } catch (err) {
//       console.error("Global Fetch Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   return (
//     // Hum 'refreshCompanies' ko bhi export kar rahe hain dashboard ke liye
//     <CompanyContext.Provider value={{ companies, loading, refreshCompanies: fetchCompanies }}>
//       {children}
//     </CompanyContext.Provider>
//   );
// };

// export const useCompanies = () => useContext(CompanyContext);













// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const CompanyContext = createContext();

// export const CompanyProvider = ({ children }) => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Ye function backend se data layega
//   const fetchCompanies = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//       if (res.data && res.data.success) {
//         setCompanies(res.data.data);
//       }
//     } catch (err) {
//       console.error("Global Fetch Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Jab website pehli baar khulegi, tab data aayega
//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   return (
//     // Yahan hum companies, loading aur refreshCompanies function sabko baant rahe hain
//     <CompanyContext.Provider value={{ companies, loading, refreshCompanies: fetchCompanies }}>
//       {children}
//     </CompanyContext.Provider>
//   );
// };

// // Isey hum doosre components mein use karenge
// export const useCompanies = () => useContext(CompanyContext);












// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const CompanyContext = createContext();

// export const CompanyProvider = ({ children }) => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCompanies = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//       if (res.data && res.data.success) {
//         setCompanies(res.data.data);
//       }
//     } catch (err) {
//       console.error("Global Fetch Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   return (
//     <CompanyContext.Provider value={{ companies, loading, refreshCompanies: fetchCompanies }}>
//       {children}
//     </CompanyContext.Provider>
//   );
// };

// export const useCompanies = () => useContext(CompanyContext);















// import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
// import axios from 'axios';

// const CompanyContext = createContext();

// export const CompanyProvider = ({ children }) => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCompanies = useCallback(async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
//       if (res.data && res.data.success) {
//         setCompanies(res.data.data);
//       }
//     } catch (err) {
//       console.error("Global Fetch Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchCompanies();
//   }, [fetchCompanies]);

//   return (
//     <CompanyContext.Provider value={{ companies, loading, refreshCompanies: fetchCompanies }}>
//       {children}
//     </CompanyContext.Provider>
//   );
// };

// // Vite Fast Refresh warning hatane ke liye
// // eslint-disable-next-line react-refresh/only-export-components
// export const useCompanies = () => useContext(CompanyContext);















import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // useCallback ensures function reference stays same unless dependencies change
  const fetchCompanies = useCallback(async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
      if (res.data && res.data.success) {
        setCompanies(res.data.data);
      }
    } catch (err) {
      console.error("Global Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // 🔥 Fix for ESLint: react-hooks/set-state-in-effect
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <CompanyContext.Provider value={{ companies, loading, refreshCompanies: fetchCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};

// Fix for Vite Fast Refresh: react-refresh/only-export-components
// eslint-disable-next-line react-refresh/only-export-components
export const useCompanies = () => useContext(CompanyContext);