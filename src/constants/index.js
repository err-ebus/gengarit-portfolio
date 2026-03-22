export const PROJECTS = [
  {
    id: 1,
    title: "Bacolod City Flood Map & Alert System",
    subtitle: "Real-time Monitoring & Alert System",
    description: "A specialized web application for real-time flood monitoring in Bacolod City. Integrates Open-Meteo API for live weather data and features an interactive map for community alerts and risk assessment.",
    image: "/pictures/FLOOD_SS.png", 
    tags: ["React", "Leaflet", "Open-Meteo API", "Node.js", "Tailwind"],
    size: "large",
    features: ["Real-time Precipitation Tracking", "Interactive Risk Mapping", "Automated Alerts"],
    link: "#"
  },
  {
    id: 2,
    title: "DHSUD HOA CDD",
    subtitle: "Government Enterprise System",
    description: "Engineered and deployed a comprehensive registry system for the DHSUD Negros Island Region. Built to handle robust data processing with offline server environment capabilities.",
    image: "/pictures/HOA_CDD_SS.png", 
    tags: ["React", "Vue", "PostgreSQL", "Django", "Tailwind"],
    size: "large",
    features: ["Offline Server Architecture", "Cloud Media Storage", "Government Deployment"],
    link: "#"
  },
  {
    id: 3,
    title: "SENTINELS",
    subtitle: "Educational RPG & Admin System",
    description: "A massive year-and-a-half development cycle. A cybersecurity-focused educational platform featuring interactive gameplay, a complex multi-role system, and a secure backend dashboard.",
    image: "/pictures/SENTINELS_SS.png",
    tags: ["React", "Django", "PostgreSQL", "Python"],
    size: "medium",
    features: ["Complex State Management", "Multi-role Auth", "Admin Dashboard"],
    link: "#"
  },
  {
    id: 4,
    title: "Mabels POS",
    subtitle: "Bar & Restaurant System",
    description: "Custom Point of Sale system with integrated inventory tracking, order management, and real-time frontend updates.",
    image: "/pictures/MABELS_SS.png",
    tags: ["JavaScript", "Firebase", "Tailwind"],
    size: "small",
    features: ["Inventory Mgmt", "Order Processing", "Real-time Sync"],
    link: "#"
  }
];

export const FAQ_RESPONSES = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "System initialized. ⚡ I'm the err-ebus automated assistant. How can I help you navigate the system? You can query about skills, projects, education, or contact info!"
  },
  {
    keywords: ['who', 'about', 'err-ebus', 'yourself'],
    response: "err-ebus is a Full-Stack Software Engineer from Bacolod City, Philippines. Senior CS student at STI WNU, specializing in resilient backend architectures and seamless UX! 🚀"
  },  
  {
    keywords: ['skill', 'technology', 'tech', 'stack', 'programming'],
    response: "err-ebus engineers systems using: 💻 React, Node.js, and TypeScript, powered by Python (Django), Java, and C#. Always expanding the stack!"
  },
  {
    keywords: ['project', 'work', 'built'],
    response: "Check out the 'Engineered Works' section! Highlights include the Bacolod City Flood Map and regional government registries (DHSUD)."
  },
  {
    keywords: ['contact', 'email', 'hire'],
    response: "Want to initiate contact? 📧 Scroll down to the Contact section or use the form to transmit your message directly to err-ebus!"
  }
];
