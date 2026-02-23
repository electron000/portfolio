export const portfolioData = {
  personalInfo: {
    name: "Arunjyoti Changkakoty",
    tagline: "Building scalable AI pipelines & systems.",
    email: "ajarunchang@gmail.com",
    phone: "+91 6002239926",
    linkedin: "arunjyoti-changkakoty", // Correct handle for linkedin.com/in/arunjyoti-changkakoty
    github: "electron000", // Updated to your actual GitHub handle
    role: "Full-Stack Developer & AI Engineer",
    summary:
      "Final-year CS student skilled in Full-Stack Development (React, Python) and AI Pipelines (LangChain, LangGraph, RAG). Proven track record building secure, scalable enterprise apps and multi-agent systems.",
    status: "Available for Remote Opportunities",
  },
  about: {
    summary:
      "Final-year Computer Science student with a proven track record of building secure, scalable enterprise applications and multi-agent AI systems. I specialize in bridging engineering fundamentals with cutting-edge AI to ship products that solve real problems. Seeking challenging roles in Tech where I can contribute to high-impact projects from day one.",
    details: [
      { label: "Graduation", value: "June 2026" },
      { label: "Degree", value: "B.Tech CS" },
      { label: "Location", value: "Assam, India" },
      { label: "Specialization", value: "AI + Full-Stack" },
    ],
  },
  skills: {
    languages: ["C/C++", "Python"],
    frontend: ["React.js", "TypeScript", "SCSS", "Tailwind CSS"],
    backend: ["Python", "FastAPI", "Flask", "SQLite", "PyJWT"],
    ai_tools: [
      "Generative AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "GeminiAPI",
      "ChromaDB",
      "Tavily Web Search",
    ],
    tools: ["Git/GitHub", "Electron", "PyInstaller"],
  },
  experience: [
    {
      role: "AI Engineer",
      company: "eSkillVeda Edtech Private Limited",
      location: "Guwahati, Assam, India (Remote)",
      duration: "June 2025 — Aug 2025",
      bullets: [
        "Integrated React frontend with FastAPI for production; secured application using PyJWT.",
        "Built Resume Summary feature via LangChain/Gemini and redesigned Blogs UI with role-based access.",
      ],
    },
    {
      role: "Industrial Trainee",
      company: "ONGC — Assam Asset",
      location: "Sivasagar, Assam, India (On-site)",
      duration: "July 2025",
      bullets: [
        "Analyzed VoIP, SCADA, and network redundancy systems; studied CCTV-LAN integration.",
        "Developed MAINSYS, a full-stack desktop management information system.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "expLocal",
      location: "Bangalore, Karnataka, India (Remote)",
      duration: "Oct 2025 — Present",
      bullets: [
        "Developing expLocal, a responsive travel platform by translating Figma designs into code (TypeScript/SCSS).",
        "Performing API testing and integration for production readiness.",
      ],
    },
  ],
  projects: [
    {
      title: "MAINSYS",
      subtitle: "Management Information System",
      description:
        "Developed a management information system with live table editing, smart filters, and export options. Packaged into an offline desktop app using Electron & PyInstaller.",
      tags: ["React.js", "Flask", "SQLite", "Electron", "PyInstaller"],
      links: {
        github: "https://github.com/electron000/frontend",
        external: "https://mainsys.vercel.app",
      },
    },
    {
      title: "LegalMate",
      subtitle: "AI-Powered Legal Platform",
      description:
        "Architected a full-stack legal platform with a React frontend and scalable FastAPI microservices (AI Agents, DocGen, Blogs). Features two RAG-based Legal Agents for Indian citizens and legal practitioners, alongside a Document Analyzer powered by Google Gemini, ChromaDB & Tavily Web Search. Built automated document generation and designed for modular deployment.",
      tags: [
        "React.js",
        "FastAPI",
        "LangChain",
        "GeminiAPI",
        "ChromaDB",
        "Tavily",
      ],
      links: {
        github: "https://github.com/electron000/LegalMate",
        external: "https://ai-legalmate.vercel.app",
      },
    },
    {
      title: "AI Tutor Orchestrator",
      subtitle: "Autonomous AI Agent Orchestrator",
      description:
        "Architected a hybrid AI agent using LangGraph for multi-step reasoning, connecting AI tutors with educational APIs for adaptive learning.",
      tags: ["Python", "FastAPI", "LangChain", "LangGraph", "GeminiAPI"],
      links: {
        github: "https://github.com/electron000/autonomous_tutor_orchestrator",
        external: "#", // Leaving this as "#" ensures the Globe icon won't render for this project
      },
    },
  ],
  education: [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "ASTU — Dhemaji Engineering College",
      date: "June 2026",
      details: "CGPA: 6.42",
    },
    {
      degree: "12th Boards - Science",
      institution: "AHSEC — Sivasagar Senior Secondary School",
      date: "July 2021",
      details: "CGPA: 9.31 | Physics, Chemistry, Maths, CS",
    },
    {
      degree: "10th Boards",
      institution: "SEBA — Shankardev Shishu Vidya Niketan",
      date: "May 2019",
      details: "CGPA: 9.26",
    },
  ],
};
