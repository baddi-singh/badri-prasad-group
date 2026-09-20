import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// 🔥 DEVIL FIX: Poore frontend mein har API call ke saath apne aap secure cookie jayegi
axios.defaults.withCredentials = true;