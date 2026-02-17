export const RESUME_DATA = {
  name: "Astle Machado",
  role: "Senior Software Engineer",
  tagline: "Building With Purpose, Coding With Precision",
  subTagline: "Full Stack Engineer (Web \u2726 Cloud \u2726 Performance)",
  summary:
    "From Zero to One and beyond to million, I have been there, building & scaling tech for multiple startups. With over 5+ years of professional experience, I am dedicated to delivering high-quality software solutions that meet the needs of businesses and end-users alike.",
  contact: {
    email: "astle1999machado@gmail.com",
    phone: "+91 9765727902",
    linkedin: "https://www.linkedin.com/in/astle-machado/",
    github: "https://github.com/Astle171",
    leetcode: "https://leetcode.com/u/Astle/",
  },
  experience: [
    {
      company: "Cimpress India",
      product: "@pens.com",
      role: "Senior Software Engineer",
      period: "July 2025 \u2013 Present",
      description:
        "Leading frontend optimization and checkout architecture for a global e-commerce platform.",
      details: [
        "Slashed P95 checkout latency by ~42% (24s \u2192 14s) via Sentry-based bottleneck analysis, optimizing critical rendering paths and eliminating redundant API calls.",
        "Optimized Core Web Vitals across PDP, PLP, and Homepage, eliminating 70% of render-blocking resources and achieving a 35% reduction in LCP via aggressive code-splitting.",
        "Delivered Post-Checkout Customization (Order Now, Design Later), driving ~5% incremental top-of-funnel growth with zero revenue cannibalization.",
        "Spearheaded Multi-Tenant Checkout Architecture feasibility spikes for internal brands.",
        "Cut specific API latency by 400-600ms via Intelligent Request Throttling and CDN edge offloading.",
        "Launched \u201cNew Coupon Experience\u201d and \u201cGlobal Cart Discount,\u201d reducing rage clicks by ~50% through improved UX error handling.",
        "Led V2 Accessory API Design adopted by multiple tenants.",
        "Accelerated Checkout UI Revamp with React Lazy Loading and Parallel API execution, cutting future implementation costs by ~30%.",
        "Awarded the High Ownership Award for Technical Excellence, delivery, and mentoring.",
      ],
    },
    {
      company: "Cimpress India",
      product: "@pens.com",
      role: "Software Engineer",
      period: "May 2023 \u2013 June 2025",
      description:
        "Full stack development for global e-commerce platform.",
      details: [
        "Constructed one-click reorder feature preserving full customization state across Legacy (V1) and V2 architectures.",
        "Decoupled translation files to S3, slashing initial bundle size by 75% (16MB \u2192 4MB).",
        "Configured critical monitoring alerts for outage detection (<10 mins) using Sentry, eliminating ~15,000 daily noisy logs.",
        "Championed global rebranding across 23+ locales, rebuilding desktop header with branded trust signals.",
        "Architected GA4 integration and Hotjar custom attributes for granular user behavioral insights.",
        "Resolved critical production issues in tax calculations, payments, and address validation (Loqate).",
      ],
    },
    {
      company: "LTIMindtree",
      product: "",
      role: "Full Stack Developer",
      period: "Jan 2021 \u2013 May 2023",
      description:
        "Enterprise application development and microservices.",
      details: [
        "Automated insurance underwriter task creation, reducing manual development costs by 25% and increasing operational efficiency by 100%.",
        "Designed and deployed Kafka microservices for high-volume data streaming between internal applications.",
        "Developed CCPA-compliant RESTful APIs to securely manage sensitive user data for California residents.",
      ],
    },
  ],
  projects: [
    {
      title: "AmazShop E-commerce",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      desc: "A full-stack electronics e-commerce platform built using the MERN stack with JWT authentication, secure payment integration, product listing, cart management, and order flow.",
      image: "/images/projects/amazshop.png",
      liveLink: "https://amaz-shop.vercel.app/",
      githubLink: "https://github.com/Astle171/AmazShop",
      type: "Web App",
    },
    {
      title: "QueMates Social Platform",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      desc: "A social media application designed for student-teacher academic doubt resolution and collaboration, featuring profiles, posts, and real-time interactions.",
      image: "/images/projects/quemates.png",
      liveLink: "",
      githubLink: "https://github.com/Astle171/Quemates",
      type: "Social App",
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Redux Toolkit",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5",
      "SCSS/Sass",
      "Tailwind CSS",
      "i18next",
      "Gulp",
      "FreeMarker",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "Kafka",
      "CommerceTools",
      "WebSockets",
      "RESTful APIs",
      "Microservices",
    ],
    cloud: [
      "AWS Lambda",
      "API Gateway",
      "CloudFront (CDN)",
      "S3",
      "Route 53",
      "Secrets Manager",
      "CodeBuild",
      "CodePipeline",
    ],
    tools: [
      "Sentry",
      "Google Analytics (GA4)",
      "Hotjar",
      "A/B Tasty",
      "SonarQube",
      "Git",
      "Docker",
      "CI/CD",
      "YAML",
    ],
  },
  education: {
    institution: "St. Francis Institute of Technology",
    degree: "B.E. Computer Science",
    period: "2016 \u2013 2020",
  },
  achievements: [
    {
      title: "High Ownership Award",
      description:
        "Awarded at Cimpress India for demonstrating consistent Technical Excellence, driving delivery, and mentoring junior engineers.",
      year: "2025",
    },
    {
      title: "LeetCode Problem Solver",
      description:
        "Active competitive programmer with consistent problem-solving practice across data structures and algorithms.",
      year: "Ongoing",
      link: "https://leetcode.com/u/Astle/",
    },
  ],
};

export const SKILL_ICONS = [
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
  { name: "Redux", url: "https://cdn.simpleicons.org/redux/764ABC", color: "#764ABC" },
  { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/E10098", color: "#E10098" },
];

export const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

export const CHAT_RESPONSES = {
  who: `Astle Machado is a Senior Software Engineer with 5+ years of experience building scalable web applications. He specializes in React, Node.js, AWS, and performance optimization. Currently at Cimpress India, he's slashed checkout latency by 42% and earned the High Ownership Award.`,
  resume: `You can download Astle's resume using the "Download Resume" button above, or scroll down to see his full experience, skills, and projects right here!`,
  experience: `Astle has 5+ years of experience. Currently a Senior Software Engineer at Cimpress India (pens.com), where he slashed P95 checkout latency by 42%, optimized Core Web Vitals, and earned the High Ownership Award. Previously at LTIMindtree building enterprise Kafka microservices and CCPA-compliant APIs.`,
  skills: `Core stack: React, Node.js, TypeScript, AWS, and MongoDB. He specializes in performance optimization (Core Web Vitals, Sentry profiling), scalable architectures (microservices, Kafka), and building seamless e-commerce experiences with 23+ locale support.`,
  contact: `Reach Astle at astle1999machado@gmail.com, connect on LinkedIn (linkedin.com/in/astle-machado), or check his code on GitHub (github.com/Astle171)!`,
  projects: `Key projects: AmazShop — a full-stack MERN e-commerce platform with JWT auth and payment integration (live at amaz-shop.vercel.app). QueMates — a social platform for student-teacher academic collaboration with real-time Socket.io interactions.`,
  working: `Astle is currently a Senior Software Engineer at Cimpress India, working on pens.com — a global e-commerce platform. He leads frontend optimization, checkout architecture, and has delivered features driving ~5% incremental growth.`,
  hire: `Absolutely! Astle is open to freelance projects and interesting opportunities. Reach out at astle1999machado@gmail.com or connect on LinkedIn to discuss your project needs.`,
  greeting: `Hey there! 👋 I'm Astle's AI assistant. Ask me about his skills, experience, projects, or how to get in touch!`,
  default: `Great question! For more details, feel free to email Astle at astle1999machado@gmail.com or explore the sections below.`,
};

export const CHAT_PLACEHOLDERS = [
  "Who is Astle Machado?",
  "Show me his resume.",
  "What are his core skills?",
  "How can I contact him?",
  "What is his tech stack?",
  "Tell me about his work experience.",
  "Where is he currently working?",
  "Can I hire him for a project?",
  "What projects has he built?",
  "Download his CV / Resume.",
];
