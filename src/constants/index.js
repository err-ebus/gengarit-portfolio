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
    link: "#"
  },
  {
    id: 4,
    title: "SENTINELS",
    subtitle: "Educational RPG & Admin System",
    description: "A massive year-and-a-half development cycle. A cybersecurity-focused educational platform featuring interactive gameplay, a complex multi-role system, and a secure backend dashboard.",
    image: "/pictures/SENTINELS_SS.png",
    tags: ["React", "Django", "PostgreSQL", "Python"],
    size: "medium",
    features: ["Complex State Management", "Multi-role Auth", "Admin Dashboard"],
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
  title: "UNDER THE HOOD",
  role: "THE FULL-STACK ARCHITECT",
  bio: "I am a Senior Computer Science student and Full-Stack Developer specializing in high-performance architectures. My approach blends the reliability of backend engineering with the precision of modern frontend interfaces.",
  philosophy: "Building systems that don't just work, but excel under pressure. I prioritize clean, secure data pipelines, and resilient architectures.",
  status: "BSCS Graduate. Currently accepting project inquiries and open for high-stakes engineering roles while actively expanding my technical stack through R&D.",
  gpa: "12+",
  gpaLabel: "SYSTEM_DEPLOYS",
  efficiencyMode: "TECH_STACK_NODES",
  commitsCount: "15+",
  skills: [
    { name: "REACT.JS", level: 98 },
    { name: "NODE.JS", level: 88 },
    { name: "TYPESCRIPT", level: 95 },
    { name: "PYTHON", level: 85 },
  ],
  education: {
    degree: "BS COMPUTER SCIENCE",
    school: "STI West Negros University",
    years: "2022 - 2026"
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
