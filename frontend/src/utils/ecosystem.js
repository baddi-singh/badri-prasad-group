export const COMPANY_NAME = "BADRI PRASAD GROUP";
export const MASTER_EMAIL = "badri@badriprasadgroup.com";
export const HQ_ADDRESS = "Patna, Bihar, India";

// Yahi ek akeli list hai jo poori website chalayegi (Ventures, Forms, Dashboard)
export const ECOSYSTEM_DATA = [
  { name: "Badri Digital Solutions", vertical: "TECHNOLOGY", status: "Operational", desc: "Next-generation IoT and AI-driven automation solutions for enterprise ecosystems." },
  { name: "Badri Smart Integrations", vertical: "TECHNOLOGY", status: "Operational", desc: "Pioneering smart home systems and corporate security automation." },
  { name: "Badri Real Estate", vertical: "INFRASTRUCTURE", status: "Operational", desc: "Redefining luxury living and commercial spaces with sustainable architecture." },
  { name: "Badri Travels", vertical: "HOSPITALITY", status: "Operational", desc: "Premium global travel experiences, corporate fleet management, and luxury staycations." },
  { name: "Badri Venture Studio", vertical: "INVESTMENT", status: "Growing", desc: "Incubating and funding disruptive tech startups reshaping tomorrow's digital economy." },
  { name: "Social Tailors & Textile", vertical: "MEDIA & PR", status: "Operational", desc: "Crafting bespoke digital identities, brand narratives, and global PR campaigns." },
  { name: "Badri Capital", vertical: "FINANCIAL SERVICES", status: "Operational", desc: "Strategic wealth management, equity investments, and corporate finance solutions." },
  { name: "Badri Healthcare", vertical: "HEALTHCARE", status: "Growing", desc: "Advanced medical facilities, telemedicine, and accessible healthcare innovations." },
  { name: "Badri Logistics", vertical: "SUPPLY CHAIN", status: "Operational", desc: "Global supply chain solutions, smart warehousing, and efficient freight management." },
  { name: "Badri Energy", vertical: "RENEWABLE ENERGY", status: "Growing", desc: "Pioneering sustainable energy solutions, solar infrastructure, and green tech." },
  { name: "Badri Education", vertical: "EDTECH", status: "Operational", desc: "Empowering the next generation with modern educational platforms and digital learning." },
  { name: "Badri Media", vertical: "BROADCASTING", status: "Operational", desc: "Delivering high-quality entertainment, digital content, and media broadcasting." }
];

// Ye line automatically upar wale data se sirf naam nikalegi Forms aur Dashboard ke liye
export const SUBSIDIARY_NAMES = ECOSYSTEM_DATA.map(company => company.name);