// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [activeMainTab, setActiveMainTab] = useState('inquiries'); 
//   const [activeSubTab, setActiveSubTab] = useState('All');
//   const [sortBy, setSortBy] = useState('latest'); 

//   const [inquiries, setInquiries] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [companies, setCompanies] = useState([]);
//   const [newsList, setNewsList] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [refreshTrigger, setRefreshTrigger] = useState(0);

//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null);
  
//   const [companyForm, setCompanyForm] = useState({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
//   const [newsForm, setNewsForm] = useState({ title: '', date: '', category: '', description: '', linkUrl: '' });

//   const parseDate = (dateVal) => {
//     if (!dateVal) return 0;
//     if (typeof dateVal === 'string' && dateVal.includes('/')) return new Date(dateVal.split('/').reverse().join('-')).getTime();
//     return new Date(dateVal).getTime();
//   };
  
//   const cleanName = (name) => name ? name.replace(/-\d+$/, '').trim() : "";

//   const formatDateTimeIST = (dateVal) => {
//     if (!dateVal) return '-';
//     const d = new Date(dateVal);
//     if (isNaN(d.getTime())) return dateVal;
//     return d.toLocaleString('en-IN', {
//       timeZone: 'Asia/Kolkata',
//       day: '2-digit', month: 'short', year: 'numeric',
//       hour: '2-digit', minute: '2-digit', hour12: true
//     });
//   };

//   // Helper function to get config for API calls dynamically
//   const getAuthConfig = () => {
//     return { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } };
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) { navigate('/admin'); return; }

//     const fetchData = async () => {
//       setLoading(true);
//       const config = { headers: { Authorization: `Bearer ${token}` } };
//       let inqData = [], carData = [], compData = [], newsData = [];

//       try {
//         const resInq = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/inquiries', config);
//         inqData = resInq.data.data.map(d => ({ ...d, docType: 'inquiries' }));
//       } catch (err) { console.error("Inquiries fetch error:", err); }

//       try {
//         const resCar = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/careers', config);
//         carData = resCar.data.data.map(d => ({ ...d, docType: 'careers' }));
//       } catch (err) { console.error("Careers fetch error:", err); }

//       try {
//         const resComp = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies', config);
//         compData = resComp.data.data;
//       } catch (err) { console.error("Companies fetch error:", err); }

//       try {
//         const resNews = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news', config);
//         newsData = resNews.data.data.map(d => ({ ...d, docType: 'news' }));
//       } catch (err) { console.error("News fetch error:", err); }

//       setInquiries(inqData); setApplications(carData); setCompanies(compData); setNewsList(newsData);
//       setLoading(false);
//     };
//     fetchData();
//   }, [navigate, refreshTrigger]);

//   const handleAction = async (id, docType, action) => {
//     if (!window.confirm(`Are you sure you want to ${action} this record?`)) return;
//     try {
//       let url = `[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${docType}/${id}`;
//       if (action === 'trash') await axios.patch(`${url}/trash`, {}, getAuthConfig());
//       if (action === 'restore') await axios.patch(`${url}/restore`, {}, getAuthConfig());
//       if (action === 'delete') await axios.delete(url, getAuthConfig());
//       setRefreshTrigger(prev => prev + 1); 
//     } catch (err) { 
//       console.error(err); 
//       alert("Action failed!"); 
//     }
//   };

//   const handleSaveCompany = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies/${editId}`, companyForm, getAuthConfig());
//       else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies`, companyForm, getAuthConfig());
//       setShowForm(false); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
//       setRefreshTrigger(prev => prev + 1);
//     } catch (err) { 
//       console.error(err);
//       alert("Error saving company"); 
//     }
//   };

//   const handleSaveNews = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news/${editId}`, newsForm, getAuthConfig());
//       else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news`, newsForm, getAuthConfig());
//       setShowForm(false); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' });
//       setRefreshTrigger(prev => prev + 1);
//     } catch (err) { 
//       console.error(err);
//       alert("Error saving news"); 
//     }
//   };

//   const deleteRecord = async (id, type) => {
//     if(window.confirm(`Move this ${type} to trash?`)) {
//       try {
//         await axios.patch(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${type}/${id}/trash`, {}, getAuthConfig());
//         setRefreshTrigger(prev => prev + 1);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   const handleLogout = () => { localStorage.removeItem('adminToken'); navigate('/admin'); };

//   const activeInquiries = inquiries.filter(i => !i.isDeleted);
//   const activeCareers = applications.filter(i => !i.isDeleted);
//   const activeNews = newsList.filter(i => !i.isDeleted);
//   const trashedData = [...inquiries.filter(i => i.isDeleted), ...applications.filter(i => i.isDeleted), ...newsList.filter(i => i.isDeleted)];

//   let currentDataset = [];
//   if (activeMainTab === 'inquiries') currentDataset = activeInquiries;
//   else if (activeMainTab === 'careers') currentDataset = activeCareers;
//   else if (activeMainTab === 'trash') currentDataset = trashedData;

//   const dbSubsidiaryNames = companies.map(c => c.name);
//   let filteredData = activeSubTab === 'All' ? currentDataset : currentDataset.filter(i => cleanName(i.vertical || i.targetCompany) === activeSubTab);

//   filteredData.sort((a, b) => {
//     if (sortBy === 'latest') return parseDate(b.createdAt || b.date) - parseDate(a.createdAt || a.date);
//     return parseDate(a.createdAt || a.date) - parseDate(b.createdAt || b.date);
//   });

//   const finalTabsToRender = ['All', ...dbSubsidiaryNames];

//   if (loading) return <div style={{ color: '#D4AF37', textAlign: 'center', paddingTop: '150px', fontSize: '20px', fontWeight: 'bold' }}>LOADING COMMAND CENTER...</div>;

//   return (
//     <section style={{ minHeight: '100vh', background: '#050505', color: '#fff', paddingTop: '100px', paddingBottom: '50px' }}>
//       <style>{`
//         .sub-scroll::-webkit-scrollbar { height: 4px; } 
//         .sub-scroll::-webkit-scrollbar-thumb { background: #D4AF37; } 
//         .truncate-text { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; white-space: normal; word-break: break-word; cursor: pointer; } 
//         .form-input { width: 100%; padding: 10px; background: #1a1a1a; border: 1px solid #333; color: #fff; border-radius: 4px; margin-bottom: 10px; font-family: inherit; }
//         .global-table { table-layout: fixed; width: 100%; min-width: 1100px; }
//         .global-table th { padding: 18px 20px; color: #D4AF37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; background: #0d0d0d; white-space: nowrap; }
//         .global-table td { padding: 18px 20px; font-size: 13px; border-bottom: 1px solid #111; vertical-align: top; overflow: hidden; }
//         .global-table tr:hover { background-color: #111 !important; transition: 0.3s; }
//         .contact-link { text-decoration: none; transition: 0.2s; word-break: break-all; }
//         .contact-link:hover { opacity: 0.8; text-decoration: underline; }
//       `}</style>
      
//       <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
//           <div>
//             <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 5px 0' }}>COMMAND <span style={{ color: '#D4AF37' }}>CENTER</span></h1>
//             <p style={{ color: '#D4AF37', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold', margin: 0 }}>Badri Prasad Group Data Hub</p>
//           </div>
//           <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
//             <button onClick={() => { setActiveMainTab('inquiries'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'inquiries' ? '#D4AF37' : 'transparent', color: activeMainTab === 'inquiries' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>INQUIRIES ({activeInquiries.length})</button>
//             <button onClick={() => { setActiveMainTab('careers'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'careers' ? '#D4AF37' : 'transparent', color: activeMainTab === 'careers' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>APPLICANTS ({activeCareers.length})</button>
//             <button onClick={() => setActiveMainTab('ecosystem')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'ecosystem' ? '#D4AF37' : 'transparent', color: activeMainTab === 'ecosystem' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>ECOSYSTEM MANAGER</button>
//             <button onClick={() => setActiveMainTab('news')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'news' ? '#D4AF37' : 'transparent', color: activeMainTab === 'news' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>NEWS MANAGER</button>
//             <button onClick={() => { setActiveMainTab('trash'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'trash' ? '#ff4d4d' : 'transparent', color: activeMainTab === 'trash' ? '#fff' : '#ff4d4d', border: '1px solid #ff4d4d' }}>TRASH</button>
            
//             {(activeMainTab === 'inquiries' || activeMainTab === 'careers' || activeMainTab === 'trash') && (
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '7px 10px', background: '#111', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '4px', outline: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
//                 <option value="latest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//               </select>
//             )}

//             <button onClick={handleLogout} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37' }}>LOGOUT</button>
//           </div>
//         </div>

//         {activeMainTab === 'ecosystem' ? (
//           <div>
//             <button onClick={() => { setShowForm(!showForm); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
//               {showForm ? 'CLOSE FORM' : '+ ADD NEW COMPANY'}
//             </button>
//             {showForm && (
//               <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
//                  <form onSubmit={handleSaveCompany}>
//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//                        <input placeholder="Company Name" value={companyForm.name} onChange={(e)=>setCompanyForm({...companyForm, name:e.target.value})} className="form-input" required />
//                        <input placeholder="Vertical" value={companyForm.vertical} onChange={(e)=>setCompanyForm({...companyForm, vertical:e.target.value})} className="form-input" required />
//                        <input type="url" placeholder="Website URL" value={companyForm.websiteUrl} onChange={(e)=>setCompanyForm({...companyForm, websiteUrl:e.target.value})} className="form-input" />
//                        <input placeholder="Status" value={companyForm.status} onChange={(e)=>setCompanyForm({...companyForm, status:e.target.value})} className="form-input" required />
//                        <input placeholder="Description" value={companyForm.desc} onChange={(e)=>setCompanyForm({...companyForm, desc:e.target.value})} className="form-input" required style={{ gridColumn: 'span 2' }} />
//                     </div>
//                     <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE COMPANY</button>
//                  </form>
//               </div>
//             )}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//                {companies.map(comp => (
//                  <div key={comp._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
//                     <h3 style={{ color: '#fff', marginBottom: '5px' }}>{comp.name}</h3>
//                     <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold' }}>{comp.vertical}</p>
//                     <div style={{ marginTop: '15px' }}>
//                        <button onClick={() => { setCompanyForm(comp); setEditId(comp._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
//                     </div>
//                  </div>
//                ))}
//             </div>
//           </div>
//         ) : activeMainTab === 'news' ? (
//           <div>
//             <button onClick={() => { setShowForm(!showForm); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
//               {showForm ? 'CLOSE FORM' : '+ ADD PRESS RELEASE'}
//             </button>
//             {showForm && (
//               <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
//                  <form onSubmit={handleSaveNews}>
//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//                        <input placeholder="News Title" value={newsForm.title} onChange={(e)=>setNewsForm({...newsForm, title:e.target.value})} className="form-input" required />
//                        <input placeholder="Date (e.g. Oct 15, 2026)" value={newsForm.date} onChange={(e)=>setNewsForm({...newsForm, date:e.target.value})} className="form-input" required />
//                        <input placeholder="Category (e.g. CORPORATE)" value={newsForm.category} onChange={(e)=>setNewsForm({...newsForm, category:e.target.value})} className="form-input" required />
//                        <input type="url" placeholder="Read More Link (Optional)" value={newsForm.linkUrl} onChange={(e)=>setNewsForm({...newsForm, linkUrl:e.target.value})} className="form-input" />
//                        <textarea placeholder="Description" value={newsForm.description} onChange={(e)=>setNewsForm({...newsForm, description:e.target.value})} className="form-input" required rows="3" style={{ gridColumn: 'span 2' }}></textarea>
//                     </div>
//                     <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE NEWS</button>
//                  </form>
//               </div>
//             )}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//                {activeNews.map(news => (
//                  <div key={news._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
//                     <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold', marginBottom: '5px' }}>{news.date} | {news.category}</p>
//                     <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>{news.title}</h3>
//                     <div style={{ borderTop: '1px solid #222', paddingTop: '15px', marginTop: '15px' }}>
//                        <button onClick={() => { setNewsForm(news); setEditId(news._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
//                        <button onClick={() => deleteRecord(news._id, 'news')} style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>TRASH</button>
//                     </div>
//                  </div>
//                ))}
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="sub-scroll" style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px', whiteSpace: 'nowrap' }}>
//               {finalTabsToRender.map(sub => {
//                 const count = sub === 'All' ? currentDataset.length : currentDataset.filter(item => cleanName(item.vertical || item.targetCompany) === sub).length;
//                 return (
//                   <button key={sub} onClick={() => setActiveSubTab(sub)} style={{ background: activeSubTab === sub ? 'rgba(212,175,55,0.1)' : '#0a0a0a', color: activeSubTab === sub ? '#D4AF37' : '#666', border: `1px solid ${activeSubTab === sub ? '#D4AF37' : '#222'}`, padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
//                     {sub.toUpperCase()} {count > 0 && `(${count})`}
//                   </button>
//                 )
//               })}
//             </div>

//             <div style={{ background: '#0a0a0a', borderRadius: '12px', border: '1px solid #1a1a1a', overflowX: 'auto' }}>
//               <table className="global-table">
//                 <colgroup>
//                   <col style={{ width: '12%' }} />
//                   <col style={{ width: '22%' }} />
//                   <col style={{ width: '16%' }} />
//                   <col style={{ width: '32%' }} />
//                   <col style={{ width: '10%' }} />
//                   <col style={{ width: '8%' }} />
//                 </colgroup>
//                 <thead>
//                   <tr>
//                     <th>Date & Time</th>
//                     <th>Name & Contact</th>
//                     <th>Entity / Type</th>
//                     <th>Role / Message</th>
//                     <th style={{ textAlign: 'center' }}>Attachment</th>
//                     <th style={{ textAlign: 'right' }}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((item, index) => (
//                     <tr key={item._id || index} style={{ opacity: item.isDeleted ? 0.6 : 1 }}>
                      
//                       <td style={{ color: '#888' }}>
//                         {formatDateTimeIST(item.createdAt || item.date)}
//                       </td>

//                       <td style={{ lineHeight: '1.6' }}>
//                         <div className="truncate-text" title={item.name || item.fullName || item.title} style={{ fontWeight: 'bold', color: '#fff', fontSize: '14px', marginBottom: '4px' }}>
//                           {item.name || item.fullName || item.title}
//                         </div>
//                         {item.email && (
//                           <a href={`mailto:${item.email}`} className="contact-link" style={{ color: '#aaa', fontSize: '11px', display: 'block' }}>
//                             ✉️ {item.email}
//                           </a>
//                         )}
//                         {item.phone && (
//                           <a href={`tel:${item.phone}`} className="contact-link" style={{ color: '#00e5ff', fontSize: '11px', display: 'block' }}>
//                             📞 {item.phone}
//                           </a>
//                         )}
//                       </td>
                      
//                       <td style={{ color: '#D4AF37', fontWeight: '600' }}>
//                         {cleanName(item.vertical || item.targetCompany || item.category)}
//                         <div style={{ fontSize: '9px', color: '#666', marginTop: '4px', textTransform: 'uppercase' }}>{item.docType}</div>
//                       </td>

//                       <td style={{ color: '#ccc', lineHeight: '1.4' }}>
//                         {item.role && (
//                           <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '5px', fontSize: '12px' }}>
//                             Role: <span style={{ color: '#D4AF37' }}>{item.role}</span>
//                           </div>
//                         )}
//                         <div className="truncate-text" title={item.message || item.description}>
//                           {item.message || item.description || '-'}
//                         </div>
//                       </td>

//                       <td style={{ textAlign: 'center' }}>
//                         {item.resumePath ? (
//                           <a href={`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/${item.resumePath}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background:'#00e5ff', textDecoration: 'none', fontSize: '10px', fontWeight:'bold', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', whiteSpace: 'nowrap' }}>📄 VIEW PDF</a>
//                         ) : (
//                           <span style={{ color: '#444', fontSize: '11px', fontStyle: 'italic' }}>No File</span>
//                         )}
//                       </td>

//                       <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
//                         {!item.isDeleted ? (
//                           <button onClick={() => handleAction(item._id, item.docType, 'trash')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>🗑️</button>
//                         ) : (
//                           <>
//                             <button onClick={() => handleAction(item._id, item.docType, 'restore')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginRight: '12px', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>♻️</button>
//                             <button onClick={() => handleAction(item._id, item.docType, 'delete')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>❌</button>
//                           </>
//                         )}
//                       </td>

//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredData.length === 0 && <div style={{ padding: '80px', textAlign: 'center', color: '#666', fontSize: '16px' }}>No records found in this section.</div>}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeMainTab, setActiveMainTab] = useState('inquiries'); 
  const [activeSubTab, setActiveSubTab] = useState('All');
  const [sortBy, setSortBy] = useState('latest'); 

  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [newsList, setNewsList] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const [companyForm, setCompanyForm] = useState({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
  const [newsForm, setNewsForm] = useState({ title: '', date: '', category: '', description: '', linkUrl: '' });

  const parseDate = (dateVal) => {
    if (!dateVal) return 0;
    if (typeof dateVal === 'string' && dateVal.includes('/')) return new Date(dateVal.split('/').reverse().join('-')).getTime();
    return new Date(dateVal).getTime();
  };
  
  const cleanName = (name) => name ? name.replace(/-\d+$/, '').trim() : "";

  const formatDateTimeIST = (dateVal) => {
    if (!dateVal) return '-';
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return dateVal;
    return d.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });
  };

  const getAuthConfig = () => {
    return { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } };
  };

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { navigate('/admin'); return; }

    const fetchData = async () => {
      setLoading(true);
      const config = { headers: { Authorization: `Bearer ${token}` } };
      let inqData = [], carData = [], compData = [], newsData = [];

      try {
        const resInq = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/inquiries', config);
        inqData = resInq.data.data.map(d => ({ ...d, docType: 'inquiries' }));
      } catch (err) { console.error("Inquiries fetch error:", err); }

      try {
        const resCar = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/careers', config);
        carData = resCar.data.data.map(d => ({ ...d, docType: 'careers' }));
      } catch (err) { console.error("Careers fetch error:", err); }

      try {
        const resComp = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies', config);
        compData = resComp.data.data;
      } catch (err) { console.error("Companies fetch error:", err); }

      try {
        const resNews = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news', config);
        newsData = resNews.data.data.map(d => ({ ...d, docType: 'news' }));
      } catch (err) { console.error("News fetch error:", err); }

      setInquiries(inqData); setApplications(carData); setCompanies(compData); setNewsList(newsData);
      setLoading(false);
    };
    fetchData();
  }, [navigate, refreshTrigger]);

  const handleAction = async (id, docType, action) => {
    if (!window.confirm(`Are you sure you want to ${action} this record?`)) return;
    try {
      let url = `[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${docType}/${id}`;
      if (action === 'trash') await axios.patch(`${url}/trash`, {}, getAuthConfig());
      if (action === 'restore') await axios.patch(`${url}/restore`, {}, getAuthConfig());
      if (action === 'delete') await axios.delete(url, getAuthConfig());
      setRefreshTrigger(prev => prev + 1); 
    } catch (err) { 
      console.error(err); 
      alert("Action failed!"); 
    }
  };

  const handleSaveCompany = async (e) => {
    e.preventDefault();
    try {
      if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies/${editId}`, companyForm, getAuthConfig());
      else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies`, companyForm, getAuthConfig());
      setShowForm(false); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
      setRefreshTrigger(prev => prev + 1);
    } catch (err) { 
      console.error(err);
      alert("Error saving company"); 
    }
  };

  const handleSaveNews = async (e) => {
    e.preventDefault();
    try {
      if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news/${editId}`, newsForm, getAuthConfig());
      else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news`, newsForm, getAuthConfig());
      setShowForm(false); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' });
      setRefreshTrigger(prev => prev + 1);
    } catch (err) { 
      console.error(err);
      alert("Error saving news"); 
    }
  };

  const deleteRecord = async (id, type) => {
    if(window.confirm(`Move this ${type} to trash?`)) {
      try {
        await axios.patch(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${type}/${id}/trash`, {}, getAuthConfig());
        setRefreshTrigger(prev => prev + 1);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleLogout = () => { localStorage.removeItem('adminToken'); navigate('/admin'); };

  const activeInquiries = inquiries.filter(i => !i.isDeleted);
  const activeCareers = applications.filter(i => !i.isDeleted);
  const activeNews = newsList.filter(i => !i.isDeleted);
  const trashedData = [...inquiries.filter(i => i.isDeleted), ...applications.filter(i => i.isDeleted), ...newsList.filter(i => i.isDeleted)];

  let currentDataset = [];
  if (activeMainTab === 'inquiries') currentDataset = activeInquiries;
  else if (activeMainTab === 'careers') currentDataset = activeCareers;
  else if (activeMainTab === 'trash') currentDataset = trashedData;

  const dbSubsidiaryNames = companies.map(c => c.name);
  let filteredData = activeSubTab === 'All' ? currentDataset : currentDataset.filter(i => cleanName(i.vertical || i.targetCompany) === activeSubTab);

  filteredData.sort((a, b) => {
    if (sortBy === 'latest') return parseDate(b.createdAt || b.date) - parseDate(a.createdAt || a.date);
    return parseDate(a.createdAt || a.date) - parseDate(b.createdAt || b.date);
  });

  const finalTabsToRender = ['All', ...dbSubsidiaryNames];

  if (loading) return <div style={{ color: '#D4AF37', textAlign: 'center', paddingTop: '150px', fontSize: '20px', fontWeight: 'bold' }}>LOADING COMMAND CENTER...</div>;

  return (
    <section style={{ minHeight: '100vh', background: '#050505', color: '#fff', paddingTop: '100px', paddingBottom: '50px' }}>
      <style>{`
        .sub-scroll::-webkit-scrollbar { height: 4px; } 
        .sub-scroll::-webkit-scrollbar-thumb { background: #D4AF37; } 
        .truncate-text { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; white-space: normal; word-break: break-word; cursor: pointer; } 
        .form-input { width: 100%; padding: 10px; background: #1a1a1a; border: 1px solid #333; color: #fff; border-radius: 4px; margin-bottom: 10px; font-family: inherit; }
        .global-table { table-layout: fixed; width: 100%; min-width: 1100px; }
        .global-table th { padding: 18px 20px; color: #D4AF37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; background: #0d0d0d; white-space: nowrap; }
        .global-table td { padding: 18px 20px; font-size: 13px; border-bottom: 1px solid #111; vertical-align: top; overflow: hidden; }
        .global-table tr:hover { background-color: #111 !important; transition: 0.3s; }
        .contact-link { text-decoration: none; transition: 0.2s; word-break: break-all; }
        .contact-link:hover { opacity: 0.8; text-decoration: underline; }
      `}</style>
      
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 5px 0' }}>COMMAND <span style={{ color: '#D4AF37' }}>CENTER</span></h1>
            <p style={{ color: '#D4AF37', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold', margin: 0 }}>Badri Prasad Group Data Hub</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => { setActiveMainTab('inquiries'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'inquiries' ? '#D4AF37' : 'transparent', color: activeMainTab === 'inquiries' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>INQUIRIES ({activeInquiries.length})</button>
            <button onClick={() => { setActiveMainTab('careers'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'careers' ? '#D4AF37' : 'transparent', color: activeMainTab === 'careers' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>APPLICANTS ({activeCareers.length})</button>
            <button onClick={() => setActiveMainTab('ecosystem')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'ecosystem' ? '#D4AF37' : 'transparent', color: activeMainTab === 'ecosystem' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>ECOSYSTEM MANAGER</button>
            <button onClick={() => setActiveMainTab('news')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'news' ? '#D4AF37' : 'transparent', color: activeMainTab === 'news' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>NEWS MANAGER</button>
            <button onClick={() => { setActiveMainTab('trash'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'trash' ? '#ff4d4d' : 'transparent', color: activeMainTab === 'trash' ? '#fff' : '#ff4d4d', border: '1px solid #ff4d4d' }}>TRASH</button>
            
            {(activeMainTab === 'inquiries' || activeMainTab === 'careers' || activeMainTab === 'trash') && (
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '7px 10px', background: '#111', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '4px', outline: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
                <option value="latest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            )}

            <button onClick={handleLogout} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37' }}>LOGOUT</button>
          </div>
        </div>

        {activeMainTab === 'ecosystem' ? (
          <div>
            <button onClick={() => { setShowForm(!showForm); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
              {showForm ? 'CLOSE FORM' : '+ ADD NEW COMPANY'}
            </button>
            {showForm && (
              <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
                 <form onSubmit={handleSaveCompany}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                       <input placeholder="Company Name" value={companyForm.name} onChange={(e)=>setCompanyForm({...companyForm, name:e.target.value})} className="form-input" required />
                       <input placeholder="Vertical" value={companyForm.vertical} onChange={(e)=>setCompanyForm({...companyForm, vertical:e.target.value})} className="form-input" required />
                       <input type="url" placeholder="Website URL" value={companyForm.websiteUrl} onChange={(e)=>setCompanyForm({...companyForm, websiteUrl:e.target.value})} className="form-input" />
                       <input placeholder="Status" value={companyForm.status} onChange={(e)=>setCompanyForm({...companyForm, status:e.target.value})} className="form-input" required />
                       <input placeholder="Description" value={companyForm.desc} onChange={(e)=>setCompanyForm({...companyForm, desc:e.target.value})} className="form-input" required style={{ gridColumn: 'span 2' }} />
                    </div>
                    <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE COMPANY</button>
                 </form>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
               {companies.map(comp => (
                 <div key={comp._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '5px' }}>{comp.name}</h3>
                    <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold' }}>{comp.vertical}</p>
                    
                    {/* ⬇️ MAGIC FIX: DELETE BUTTON WAPAS AA GAYA ⬇️ */}
                    <div style={{ marginTop: '15px' }}>
                       <button onClick={() => { setCompanyForm(comp); setEditId(comp._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
                       <button onClick={() => handleAction(comp._id, 'companies', 'trash')} style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>DELETE</button>
                    </div>

                 </div>
               ))}
            </div>
          </div>
        ) : activeMainTab === 'news' ? (
          <div>
            <button onClick={() => { setShowForm(!showForm); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
              {showForm ? 'CLOSE FORM' : '+ ADD PRESS RELEASE'}
            </button>
            {showForm && (
              <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
                 <form onSubmit={handleSaveNews}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                       <input placeholder="News Title" value={newsForm.title} onChange={(e)=>setNewsForm({...newsForm, title:e.target.value})} className="form-input" required />
                       <input placeholder="Date (e.g. Oct 15, 2026)" value={newsForm.date} onChange={(e)=>setNewsForm({...newsForm, date:e.target.value})} className="form-input" required />
                       <input placeholder="Category (e.g. CORPORATE)" value={newsForm.category} onChange={(e)=>setNewsForm({...newsForm, category:e.target.value})} className="form-input" required />
                       <input type="url" placeholder="Read More Link (Optional)" value={newsForm.linkUrl} onChange={(e)=>setNewsForm({...newsForm, linkUrl:e.target.value})} className="form-input" />
                       <textarea placeholder="Description" value={newsForm.description} onChange={(e)=>setNewsForm({...newsForm, description:e.target.value})} className="form-input" required rows="3" style={{ gridColumn: 'span 2' }}></textarea>
                    </div>
                    <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE NEWS</button>
                 </form>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
               {activeNews.map(news => (
                 <div key={news._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
                    <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold', marginBottom: '5px' }}>{news.date} | {news.category}</p>
                    <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>{news.title}</h3>
                    <div style={{ borderTop: '1px solid #222', paddingTop: '15px', marginTop: '15px' }}>
                       <button onClick={() => { setNewsForm(news); setEditId(news._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
                       <button onClick={() => deleteRecord(news._id, 'news')} style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>TRASH</button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        ) : (
          <>
            <div className="sub-scroll" style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px', whiteSpace: 'nowrap' }}>
              {finalTabsToRender.map(sub => {
                const count = sub === 'All' ? currentDataset.length : currentDataset.filter(item => cleanName(item.vertical || item.targetCompany) === sub).length;
                return (
                  <button key={sub} onClick={() => setActiveSubTab(sub)} style={{ background: activeSubTab === sub ? 'rgba(212,175,55,0.1)' : '#0a0a0a', color: activeSubTab === sub ? '#D4AF37' : '#666', border: `1px solid ${activeSubTab === sub ? '#D4AF37' : '#222'}`, padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
                    {sub.toUpperCase()} {count > 0 && `(${count})`}
                  </button>
                )
              })}
            </div>

            <div style={{ background: '#0a0a0a', borderRadius: '12px', border: '1px solid #1a1a1a', overflowX: 'auto' }}>
              <table className="global-table">
                <colgroup>
                  <col style={{ width: activeMainTab === 'inquiries' ? '15%' : '12%' }} />
                  <col style={{ width: activeMainTab === 'inquiries' ? '25%' : '22%' }} />
                  <col style={{ width: activeMainTab === 'inquiries' ? '20%' : '16%' }} />
                  <col style={{ width: activeMainTab === 'inquiries' ? '32%' : '32%' }} />
                  {activeMainTab !== 'inquiries' && <col style={{ width: '10%' }} />}
                  <col style={{ width: '8%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Name & Contact</th>
                    <th>Entity / Type</th>
                    <th>Role / Message</th>
                    {activeMainTab !== 'inquiries' && <th style={{ textAlign: 'center' }}>Attachment</th>}
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item._id || index} style={{ opacity: item.isDeleted ? 0.6 : 1 }}>
                      
                      <td style={{ color: '#888' }}>
                        {formatDateTimeIST(item.createdAt || item.date)}
                      </td>

                      <td style={{ lineHeight: '1.6' }}>
                        <div className="truncate-text" title={item.name || item.fullName || item.title} style={{ fontWeight: 'bold', color: '#fff', fontSize: '14px', marginBottom: '4px' }}>
                          {item.name || item.fullName || item.title}
                        </div>
                        {item.email && (
                          <a href={`mailto:${item.email}`} className="contact-link" style={{ color: '#aaa', fontSize: '11px', display: 'block' }}>
                            ✉️ {item.email}
                          </a>
                        )}
                        {item.phone && (
                          <a href={`tel:${item.phone}`} className="contact-link" style={{ color: '#00e5ff', fontSize: '11px', display: 'block' }}>
                            📞 {item.phone}
                          </a>
                        )}
                      </td>
                      
                      <td style={{ color: '#D4AF37', fontWeight: '600' }}>
                        {cleanName(item.vertical || item.targetCompany || item.category)}
                        <div style={{ fontSize: '9px', color: '#666', marginTop: '4px', textTransform: 'uppercase' }}>{item.docType}</div>
                      </td>

                      <td style={{ color: '#ccc', lineHeight: '1.4' }}>
                        {item.role && (
                          <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '5px', fontSize: '12px' }}>
                            Role: <span style={{ color: '#D4AF37' }}>{item.role}</span>
                          </div>
                        )}
                        <div className="truncate-text" title={item.message || item.description}>
                          {item.message || item.description || '-'}
                        </div>
                      </td>

                      {activeMainTab !== 'inquiries' && (
                        <td style={{ textAlign: 'center' }}>
                          {item.resumePath ? (
                            <a href={`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/${item.resumePath}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background:'#00e5ff', textDecoration: 'none', fontSize: '10px', fontWeight:'bold', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', whiteSpace: 'nowrap' }}>📄 VIEW PDF</a>
                          ) : (
                            <span style={{ color: '#444', fontSize: '11px', fontStyle: 'italic' }}>No File</span>
                          )}
                        </td>
                      )}

                      <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        {!item.isDeleted ? (
                          <button onClick={() => handleAction(item._id, item.docType, 'trash')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>🗑️</button>
                        ) : (
                          <>
                            <button onClick={() => handleAction(item._id, item.docType, 'restore')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginRight: '12px', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>♻️</button>
                            <button onClick={() => handleAction(item._id, item.docType, 'delete')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>❌</button>
                          </>
                        )}
                      </td>

                    </tr>
                    
                  ))}
                </tbody>
              </table>
              {filteredData.length === 0 && <div style={{ padding: '80px', textAlign: 'center', color: '#666', fontSize: '16px' }}>No records found in this section.</div>}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;





























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [activeMainTab, setActiveMainTab] = useState('inquiries'); 
//   const [activeSubTab, setActiveSubTab] = useState('All');
//   const [sortBy, setSortBy] = useState('latest'); 

//   const [inquiries, setInquiries] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [companies, setCompanies] = useState([]);
//   const [newsList, setNewsList] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [refreshTrigger, setRefreshTrigger] = useState(0);

//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null);
  
//   const [companyForm, setCompanyForm] = useState({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
//   const [newsForm, setNewsForm] = useState({ title: '', date: '', category: '', description: '', linkUrl: '' });

//   const parseDate = (dateVal) => {
//     if (!dateVal) return 0;
//     if (typeof dateVal === 'string' && dateVal.includes('/')) return new Date(dateVal.split('/').reverse().join('-')).getTime();
//     return new Date(dateVal).getTime();
//   };
  
//   const cleanName = (name) => name ? name.replace(/-\d+$/, '').trim() : "";

//   const formatDateTimeIST = (dateVal) => {
//     if (!dateVal) return '-';
//     const d = new Date(dateVal);
//     if (isNaN(d.getTime())) return dateVal;
//     return d.toLocaleString('en-IN', {
//       timeZone: 'Asia/Kolkata',
//       day: '2-digit', month: 'short', year: 'numeric',
//       hour: '2-digit', minute: '2-digit', hour12: true
//     });
//   };

//   const getAuthConfig = () => {
//     return { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } };
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) { navigate('/admin'); return; }

//     const fetchData = async () => {
//       setLoading(true);
//       const config = { headers: { Authorization: `Bearer ${token}` } };
//       let inqData = [], carData = [], compData = [], newsData = [];

//       try {
//         const resInq = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/inquiries', config);
//         inqData = resInq.data.data.map(d => ({ ...d, docType: 'inquiries' }));
//       } catch (err) { console.error("Inquiries fetch error:", err); }

//       try {
//         const resCar = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/careers', config);
//         carData = resCar.data.data.map(d => ({ ...d, docType: 'careers' }));
//       } catch (err) { console.error("Careers fetch error:", err); }

//       try {
//         const resComp = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies', config);
//         compData = resComp.data.data;
//       } catch (err) { console.error("Companies fetch error:", err); }

//       try {
//         const resNews = await axios.get('[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news', config);
//         newsData = resNews.data.data.map(d => ({ ...d, docType: 'news' }));
//       } catch (err) { console.error("News fetch error:", err); }

//       setInquiries(inqData); setApplications(carData); setCompanies(compData); setNewsList(newsData);
//       setLoading(false);
//     };
//     fetchData();
//   }, [navigate, refreshTrigger]);

//   const handleAction = async (id, docType, action) => {
//     if (!window.confirm(`Are you sure you want to ${action} this record?`)) return;
//     try {
//       let url = `[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${docType}/${id}`;
//       if (action === 'trash') await axios.patch(`${url}/trash`, {}, getAuthConfig());
//       if (action === 'restore') await axios.patch(`${url}/restore`, {}, getAuthConfig());
//       if (action === 'delete') await axios.delete(url, getAuthConfig());
//       setRefreshTrigger(prev => prev + 1); 
//     } catch (err) { 
//       console.error(err); 
//       alert("Action failed!"); 
//     }
//   };

//   const handleSaveCompany = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies/${editId}`, companyForm, getAuthConfig());
//       else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/companies`, companyForm, getAuthConfig());
//       setShowForm(false); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] });
//       setRefreshTrigger(prev => prev + 1);
//     } catch (err) { 
//       console.error(err);
//       alert("Error saving company"); 
//     }
//   };

//   const handleSaveNews = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) await axios.put(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news/${editId}`, newsForm, getAuthConfig());
//       else await axios.post(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/news`, newsForm, getAuthConfig());
//       setShowForm(false); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' });
//       setRefreshTrigger(prev => prev + 1);
//     } catch (err) { 
//       console.error(err);
//       alert("Error saving news"); 
//     }
//   };

//   const deleteRecord = async (id, type) => {
//     if(window.confirm(`Move this ${type} to trash?`)) {
//       try {
//         await axios.patch(`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/api/${type}/${id}/trash`, {}, getAuthConfig());
//         setRefreshTrigger(prev => prev + 1);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   const handleLogout = () => { localStorage.removeItem('adminToken'); navigate('/admin'); };

//   const activeInquiries = inquiries.filter(i => !i.isDeleted);
//   const activeCareers = applications.filter(i => !i.isDeleted);
//   const activeNews = newsList.filter(i => !i.isDeleted);
//   const trashedData = [...inquiries.filter(i => i.isDeleted), ...applications.filter(i => i.isDeleted), ...newsList.filter(i => i.isDeleted)];

//   let currentDataset = [];
//   if (activeMainTab === 'inquiries') currentDataset = activeInquiries;
//   else if (activeMainTab === 'careers') currentDataset = activeCareers;
//   else if (activeMainTab === 'trash') currentDataset = trashedData;

//   const dbSubsidiaryNames = companies.map(c => c.name);
//   let filteredData = activeSubTab === 'All' ? currentDataset : currentDataset.filter(i => cleanName(i.vertical || i.targetCompany) === activeSubTab);

//   filteredData.sort((a, b) => {
//     if (sortBy === 'latest') return parseDate(b.createdAt || b.date) - parseDate(a.createdAt || a.date);
//     return parseDate(a.createdAt || a.date) - parseDate(b.createdAt || b.date);
//   });

//   const finalTabsToRender = ['All', ...dbSubsidiaryNames];

//   if (loading) return <div style={{ color: '#D4AF37', textAlign: 'center', paddingTop: '150px', fontSize: '20px', fontWeight: 'bold' }}>LOADING COMMAND CENTER...</div>;

//   return (
//     <section style={{ minHeight: '100vh', background: '#050505', color: '#fff', paddingTop: '100px', paddingBottom: '50px' }}>
//       <style>{`
//         .sub-scroll::-webkit-scrollbar { height: 4px; } 
//         .sub-scroll::-webkit-scrollbar-thumb { background: #D4AF37; } 
//         .truncate-text { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; white-space: normal; word-break: break-word; cursor: pointer; } 
//         .form-input { width: 100%; padding: 10px; background: #1a1a1a; border: 1px solid #333; color: #fff; border-radius: 4px; margin-bottom: 10px; font-family: inherit; }
//         .global-table { table-layout: fixed; width: 100%; min-width: 1100px; }
//         .global-table th { padding: 18px 20px; color: #D4AF37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; background: #0d0d0d; white-space: nowrap; }
//         .global-table td { padding: 18px 20px; font-size: 13px; border-bottom: 1px solid #111; vertical-align: top; overflow: hidden; }
//         .global-table tr:hover { background-color: #111 !important; transition: 0.3s; }
//         .contact-link { text-decoration: none; transition: 0.2s; word-break: break-all; }
//         .contact-link:hover { opacity: 0.8; text-decoration: underline; }
//       `}</style>
      
//       <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
//           <div>
//             <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 5px 0' }}>COMMAND <span style={{ color: '#D4AF37' }}>CENTER</span></h1>
//             <p style={{ color: '#D4AF37', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold', margin: 0 }}>Badri Prasad Group Data Hub</p>
//           </div>
//           <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
//             <button onClick={() => { setActiveMainTab('inquiries'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'inquiries' ? '#D4AF37' : 'transparent', color: activeMainTab === 'inquiries' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>INQUIRIES ({activeInquiries.length})</button>
//             <button onClick={() => { setActiveMainTab('careers'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'careers' ? '#D4AF37' : 'transparent', color: activeMainTab === 'careers' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>APPLICANTS ({activeCareers.length})</button>
//             <button onClick={() => setActiveMainTab('ecosystem')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'ecosystem' ? '#D4AF37' : 'transparent', color: activeMainTab === 'ecosystem' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>ECOSYSTEM MANAGER</button>
//             <button onClick={() => setActiveMainTab('news')} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'news' ? '#D4AF37' : 'transparent', color: activeMainTab === 'news' ? '#000' : '#D4AF37', border: '1px solid #D4AF37' }}>NEWS MANAGER</button>
//             <button onClick={() => { setActiveMainTab('trash'); setActiveSubTab('All'); }} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: activeMainTab === 'trash' ? '#ff4d4d' : 'transparent', color: activeMainTab === 'trash' ? '#fff' : '#ff4d4d', border: '1px solid #ff4d4d' }}>TRASH</button>
            
//             {(activeMainTab === 'inquiries' || activeMainTab === 'careers' || activeMainTab === 'trash') && (
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '7px 10px', background: '#111', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '4px', outline: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
//                 <option value="latest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//               </select>
//             )}

//             <button onClick={handleLogout} style={{ padding: '8px 15px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', background: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37' }}>LOGOUT</button>
//           </div>
//         </div>

//         {activeMainTab === 'ecosystem' ? (
//           <div>
//             <button onClick={() => { setShowForm(!showForm); setEditId(null); setCompanyForm({ name: '', vertical: '', status: '', desc: '', websiteUrl: '', team: [] }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
//               {showForm ? 'CLOSE FORM' : '+ ADD NEW COMPANY'}
//             </button>
//             {showForm && (
//               <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
//                  <form onSubmit={handleSaveCompany}>
//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//                        <input placeholder="Company Name" value={companyForm.name} onChange={(e)=>setCompanyForm({...companyForm, name:e.target.value})} className="form-input" required />
//                        <input placeholder="Vertical" value={companyForm.vertical} onChange={(e)=>setCompanyForm({...companyForm, vertical:e.target.value})} className="form-input" required />
//                        <input type="url" placeholder="Website URL" value={companyForm.websiteUrl} onChange={(e)=>setCompanyForm({...companyForm, websiteUrl:e.target.value})} className="form-input" />
//                        <input placeholder="Status" value={companyForm.status} onChange={(e)=>setCompanyForm({...companyForm, status:e.target.value})} className="form-input" required />
//                        <input placeholder="Description" value={companyForm.desc} onChange={(e)=>setCompanyForm({...companyForm, desc:e.target.value})} className="form-input" required style={{ gridColumn: 'span 2' }} />
//                     </div>
//                     <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE COMPANY</button>
//                  </form>
//               </div>
//             )}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//                {companies.map(comp => (
//                  <div key={comp._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
//                     <h3 style={{ color: '#fff', marginBottom: '5px' }}>{comp.name}</h3>
//                     <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold' }}>{comp.vertical}</p>
//                     <div style={{ marginTop: '15px' }}>
//                        <button onClick={() => { setCompanyForm(comp); setEditId(comp._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
//                     </div>
//                  </div>
//                ))}
//             </div>
//           </div>
//         ) : activeMainTab === 'news' ? (
//           <div>
//             <button onClick={() => { setShowForm(!showForm); setEditId(null); setNewsForm({ title: '', date: '', category: '', description: '', linkUrl: '' }); }} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
//               {showForm ? 'CLOSE FORM' : '+ ADD PRESS RELEASE'}
//             </button>
//             {showForm && (
//               <div style={{ background: '#111', padding: '30px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #333' }}>
//                  <form onSubmit={handleSaveNews}>
//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//                        <input placeholder="News Title" value={newsForm.title} onChange={(e)=>setNewsForm({...newsForm, title:e.target.value})} className="form-input" required />
//                        <input placeholder="Date (e.g. Oct 15, 2026)" value={newsForm.date} onChange={(e)=>setNewsForm({...newsForm, date:e.target.value})} className="form-input" required />
//                        <input placeholder="Category (e.g. CORPORATE)" value={newsForm.category} onChange={(e)=>setNewsForm({...newsForm, category:e.target.value})} className="form-input" required />
//                        <input type="url" placeholder="Read More Link (Optional)" value={newsForm.linkUrl} onChange={(e)=>setNewsForm({...newsForm, linkUrl:e.target.value})} className="form-input" />
//                        <textarea placeholder="Description" value={newsForm.description} onChange={(e)=>setNewsForm({...newsForm, description:e.target.value})} className="form-input" required rows="3" style={{ gridColumn: 'span 2' }}></textarea>
//                     </div>
//                     <button type="submit" style={{ marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 30px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SAVE NEWS</button>
//                  </form>
//               </div>
//             )}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//                {activeNews.map(news => (
//                  <div key={news._id} style={{ background: '#0a0a0a', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
//                     <p style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold', marginBottom: '5px' }}>{news.date} | {news.category}</p>
//                     <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>{news.title}</h3>
//                     <div style={{ borderTop: '1px solid #222', paddingTop: '15px', marginTop: '15px' }}>
//                        <button onClick={() => { setNewsForm(news); setEditId(news._id); setShowForm(true); }} style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', marginRight: '10px' }}>EDIT</button>
//                        <button onClick={() => deleteRecord(news._id, 'news')} style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '5px 15px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>TRASH</button>
//                     </div>
//                  </div>
//                ))}
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="sub-scroll" style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px', whiteSpace: 'nowrap' }}>
//               {finalTabsToRender.map(sub => {
//                 const count = sub === 'All' ? currentDataset.length : currentDataset.filter(item => cleanName(item.vertical || item.targetCompany) === sub).length;
//                 return (
//                   <button key={sub} onClick={() => setActiveSubTab(sub)} style={{ background: activeSubTab === sub ? 'rgba(212,175,55,0.1)' : '#0a0a0a', color: activeSubTab === sub ? '#D4AF37' : '#666', border: `1px solid ${activeSubTab === sub ? '#D4AF37' : '#222'}`, padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
//                     {sub.toUpperCase()} {count > 0 && `(${count})`}
//                   </button>
//                 )
//               })}
//             </div>

//             <div style={{ background: '#0a0a0a', borderRadius: '12px', border: '1px solid #1a1a1a', overflowX: 'auto' }}>
//               <table className="global-table">
//                 <colgroup>
//                   <col style={{ width: activeMainTab === 'inquiries' ? '15%' : '12%' }} />
//                   <col style={{ width: activeMainTab === 'inquiries' ? '25%' : '22%' }} />
//                   <col style={{ width: activeMainTab === 'inquiries' ? '20%' : '16%' }} />
//                   <col style={{ width: activeMainTab === 'inquiries' ? '32%' : '32%' }} />
//                   {activeMainTab !== 'inquiries' && <col style={{ width: '10%' }} />}
//                   <col style={{ width: '8%' }} />
//                 </colgroup>
//                 <thead>
//                   <tr>
//                     <th>Date & Time</th>
//                     <th>Name & Contact</th>
//                     <th>Entity / Type</th>
//                     <th>Role / Message</th>
//                     {activeMainTab !== 'inquiries' && <th style={{ textAlign: 'center' }}>Attachment</th>}
//                     <th style={{ textAlign: 'right' }}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((item, index) => (
//                     <tr key={item._id || index} style={{ opacity: item.isDeleted ? 0.6 : 1 }}>
                      
//                       <td style={{ color: '#888' }}>
//                         {formatDateTimeIST(item.createdAt || item.date)}
//                       </td>

//                       <td style={{ lineHeight: '1.6' }}>
//                         <div className="truncate-text" title={item.name || item.fullName || item.title} style={{ fontWeight: 'bold', color: '#fff', fontSize: '14px', marginBottom: '4px' }}>
//                           {item.name || item.fullName || item.title}
//                         </div>
//                         {item.email && (
//                           <a href={`mailto:${item.email}`} className="contact-link" style={{ color: '#aaa', fontSize: '11px', display: 'block' }}>
//                             ✉️ {item.email}
//                           </a>
//                         )}
//                         {item.phone && (
//                           <a href={`tel:${item.phone}`} className="contact-link" style={{ color: '#00e5ff', fontSize: '11px', display: 'block' }}>
//                             📞 {item.phone}
//                           </a>
//                         )}
//                       </td>
                      
//                       <td style={{ color: '#D4AF37', fontWeight: '600' }}>
//                         {cleanName(item.vertical || item.targetCompany || item.category)}
//                         <div style={{ fontSize: '9px', color: '#666', marginTop: '4px', textTransform: 'uppercase' }}>{item.docType}</div>
//                       </td>

//                       <td style={{ color: '#ccc', lineHeight: '1.4' }}>
//                         {item.role && (
//                           <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '5px', fontSize: '12px' }}>
//                             Role: <span style={{ color: '#D4AF37' }}>{item.role}</span>
//                           </div>
//                         )}
//                         <div className="truncate-text" title={item.message || item.description}>
//                           {item.message || item.description || '-'}
//                         </div>
//                       </td>

//                       {activeMainTab !== 'inquiries' && (
//                         <td style={{ textAlign: 'center' }}>
//                           {item.resumePath ? (
//                             <a href={`[https://badri-backend.onrender.com](https://badri-backend.onrender.com)/${item.resumePath}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background:'#00e5ff', textDecoration: 'none', fontSize: '10px', fontWeight:'bold', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', whiteSpace: 'nowrap' }}>📄 VIEW PDF</a>
//                           ) : (
//                             <span style={{ color: '#444', fontSize: '11px', fontStyle: 'italic' }}>No File</span>
//                           )}
//                         </td>
//                       )}

//                       <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
//                         {!item.isDeleted ? (
//                           <button onClick={() => handleAction(item._id, item.docType, 'trash')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>🗑️</button>
//                         ) : (
//                           <>
//                             <button onClick={() => handleAction(item._id, item.docType, 'restore')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginRight: '12px', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>♻️</button>
//                             <button onClick={() => handleAction(item._id, item.docType, 'delete')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.transform='scale(1.2)'} onMouseOut={(e)=>e.target.style.transform='scale(1)'}>❌</button>
//                           </>
//                         )}
//                       </td>

//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredData.length === 0 && <div style={{ padding: '80px', textAlign: 'center', color: '#666', fontSize: '16px' }}>No records found in this section.</div>}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;