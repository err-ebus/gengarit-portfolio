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
    title: "DHSUD ELUPDD",
    subtitle: "Geospatial Dashboard & AI Analytics",
    description: "Engineered and deployed an interactive geospatial dashboard for the DHSUD Negros Island Region. Built to monitor regional LGU compliance through dynamic choropleth mapping and integrated AI-driven analytics.",
    image: "/pictures/ELUPDD_SS.png",
    tags: ["Vue", "Django", "PostgreSQL", "Tailwind", "Leaflet", "AI"],
    size: "medium",
    features: ["Geospatial Mapping", "Compliance Monitoring", "AI Analytics"],
    impact: "Optimized regional compliance monitoring and geospatial data rendering efficiency by 40%.",
    link: "#"
  },
  {
    id: 4,
    title: "SENTINELS",
    subtitle: "2nd Best Thesis // RPG System",
    description: "A massive year-and-a-half development cycle. Awarded 2nd Best Thesis, this cybersecurity-focused educational platform features interactive gameplay, a complex multi-role system, and a secure backend dashboard.",
    image: "/pictures/SENTINELS_SS.png",
    tags: ["React", "Django", "PostgreSQL", "Python"],
    size: "medium",
    features: ["Awarded 2nd Best Thesis", "Complex State Management", "Multi-role Auth"],
    impact: "Awarded 2nd Best Thesis among 50+ innovative engineering entries for technical complexity and real-world relevance.",
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

export const SOCIAL_LINKS = [
  { name: "GITHUB", url: "https://github.com/err-ebus", icon: "github" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/p.rd_/", icon: "instagram" },
  { name: "FACEBOOK", url: "https://www.facebook.com/john.bayer.965/", icon: "facebook" },
  { name: "RESUME", url: "/resume_bayer.pdf", icon: "resume" }
];

export const ABOUT_DATA = {
  title: "SYSTEM_ARCHITECTURE",
  role: "THE FULL-STACK ARCHITECT",
  bio: "I am a Senior Computer Science student and Full-Stack Developer specializing in high-performance architectures. My approach blends the reliability of backend engineering with the precision of modern frontend interfaces.",
  philosophy: "Building systems that don't just work, but excel under pressure. I prioritize clean, secure data pipelines, and resilient architectures.",
  status: "BSCS Graduate. Currently accepting project inquiries and open for high-stakes engineering roles while actively expanding my technical stack through R&D.",
  languages: ["Python", "C++", "C#", "Java", "JavaScript", "PHP"],
  frameworks: ["Django", "Laravel", "Tailwind", "Node.js", "Vue", "React"],
  capabilities: [
    { label: "API_DESIGN", value: "RESTful & Async Architectures" },
    { label: "SYSTEM_INTEGRATION", value: "Cross-Platform Sync" },
    { label: "DATABASE_MODELING", value: "Relational & NoSQL Scaling" },
    { label: "UI/UX_ENGINEERING", value: "Technical HUD Interfaces" },
    { label: "SERVER_ADMIN", value: "Offline-First Environments" },
    { label: "SECURITY_PROTOCOLS", value: "RBAC & JWT Auth" },
    { label: "CLOUD_DEPLOYMENT", value: "CI/CD & System Ops" },
    { label: "STATE_LOGIC", value: "Global Context & Redux" },
  ],
  technical_proficiency: [
    { name: "REACT", level: 9 },
    { name: "NODE.JS", level: 8 },
    { name: "DJANGO", level: 9 },
    { name: "POSTGRES", level: 8 },
    { name: "LINUX", level: 7 },
  ],
  education: {
    degree: "BS COMPUTER SCIENCE",
    school: "STI West Negros University",
    years: "2022 - 2026",
    awards: [
      "Outstanding Freshman (2022-2023)",
      "Attended Machine Learning Workshop",
      "Attended Google DevFest"
    ]
  },
  deployments: [
    {
      role: "GEOSPATIAL SYSTEMS ENGINEER",
      company: "DHSUD",
      period: "2024",
      description: "Engineered and deployed an interactive geospatial dashboard (ELUPDD) for regional LGU compliance monitoring. Integrated AI-driven analytics and dynamic choropleth mapping."
    },
    {
      role: "SOFTWARE ENGINEER INTERN",
      company: "DHSUD",
      period: "2024",
      description: "Engineered and deployed a comprehensive registry system (HOA CDD). Implemented offline server architectures and managed cloud media storage pipelines."
    }
  ]
};
