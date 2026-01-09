import type { PersonalInfo, NavigationItem, SkillCategory, Project, TimelineItem, GitHubStats } from '@/types/portfolio'

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Akshit Jain",
  title: "Aspiring Machine Learning Engineer | Debugging for joy | Rhythm-Coded Thinker",
  tagline: "Hi, I'm Akshit Jain",
  email: "akshitjainonly1@gmail.com",
  phone: "+91 935055XXXX (Contact to get full information)",
  location: "Phagwara, India",
  bio: "I'm a BTech CSE (ML) student at LPU with a passion for Machine Learning and problem-solving. When I'm not coding, you'll find me listening to music or exploring new AI/ML concepts. I have a hunger for perfection and believe that learning never stops. Currently building innovative solutions while mastering the art of turning coffee into code. Active in competitive programming with a focus on DSA and LeetCode challenges.",
  profileImage: "/profile.jpg",
  resume: "/resume.pdf",
  funFacts: [
    "Transforms problems into elegant solutions",
    "Music fuels my coding sessions",
    "Perfectionist at heart, learner by nature",
    "Python & C++ are my languages of choice",
    "AI/ML enthusiast exploring neural networks",
    "Daily LeetCode and DSA practice",
    "20+ repositories and counting",
    "Believes learning never stops"
  ],
  social: {
    github: "https://github.com/akshitjain1",
    linkedin: "https://www.linkedin.com/in/akshit-jain-b75a6028b",
    twitter: "https://twitter.com/akshitjain",
    instagram: "https://instagram.com/akshitjain__1",
    email: "mailto:akshitjainonly1@gmail.com"
  }
} as const

// Navigation Menu
export const navigation: readonly NavigationItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Code Profiles", href: "#achievements" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" }
] as const

// Skill Categories and Levels
export const skills: SkillCategory = {
  "Programming Languages": [
    { name: "Python", level: 90, icon: "python" },
    { name: "C", level: 90, icon: "c" },
    { name: "C++", level: 80, icon: "cpp" },
    { name: "Java", level: 70, icon: "java" },
    { name: "JavaScript", level: 80, icon: "javascript" }
  ],
  "Web Development": [
    { name: "HTML", level: 80, icon: "html" },
    { name: "CSS", level: 80, icon: "css" },
    { name: "React", level: 65, icon: "react" },
    { name: "Flask", level: 70, icon: "flask" },
    { name: "Streamlit", level: 75, icon: "streamlit" }
  ],
  "AI/ML & Data Science": [
    { name: "Machine Learning", level: 80, icon: "ml" },
    { name: "Pandas", level: 75, icon: "pandas" },
    { name: "NumPy", level: 75, icon: "numpy" },
    { name: "Scikit-learn", level: 70, icon: "sklearn" },
    { name: "TensorFlow", level: 60, icon: "tensorflow" }
  ],
  "Tools & Technologies": [
    { name: "Git", level: 80, icon: "git" },
    { name: "VS Code", level: 90, icon: "vscode" },
    { name: "Jupyter", level: 85, icon: "jupyter" },
    { name: "Tesseract OCR", level: 70, icon: "ocr" },
    { name: "Gemini API", level: 75, icon: "gemini" }
  ]
} as const

// Projects Portfolio
export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Your Buddy Speaker",
    description: "A Python-based GUI application that translates text into multiple languages and speaks it aloud using text-to-speech synthesis. Features voice selection and real-time translation capabilities.",
    image: "/projects/robot-speaker.png",
    tags: ["Python", "pyttsx3", "googletrans", "tkinter", "GUI"],
    category: "Desktop Application",
    github: "https://github.com/akshitjain1/your_buddy_speaker.git",
    demo: "",
    featured: true
  },
  {
    id: 2,
    title: "Handwritten Assignment Grader",
    description: "An intelligent web-based grader that evaluates handwritten assignments using OCR and Gemini AI. Provides detailed evaluation, grammar correction, and content classification.",
    image: "/projects/handwritten-assignment.png",
    tags: ["Python", "Streamlit", "Tesseract OCR", "Gemini API", "AI"],
    category: "Machine Learning",
    github: "https://github.com/akshitjain1/Handwritten-Classifier.git",
    demo: "https://handwritten-classifier-by-aj.streamlit.app/",
    featured: true
  },
  {
    id: 3,
    title: "Home Loan Advisor",
    description: "A Streamlit app that helps users assess loan eligibility and provides personalized advice using Gemini API. Features EMI calculator and context-aware chat support.",
    image: "/projects/home-loan-advisor.png",
    tags: ["Python", "Streamlit", "Gemini API", "Financial Tech", "AI"],
    category: "Web Application",
    github: "https://github.com/akshitjain1/Home-Loan-Advisor.git",
    demo: "https://home-loan-advisor-kh2s8dbmjap8ejhdxl5hxa.streamlit.app/",
    featured: true
  },
  {
    id: 4,
    title: "AUTO-NO",
    description: "A hackathon project built during 2nd semester featuring an innovative solution with interactive quizzes and dynamic web interfaces. Developed during Hackathon IOD 16 Feb 24.",
    image: "/projects/auto-no.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Hackathon"],
    category: "Web Development",
    github: "https://github.com/akshitjain1/AUTO-NO.git",
    demo: "",
    featured: false
  },
  {
    id: 5,
    title: "Bytebazzar",
    description: "A fully responsive e-commerce website built from scratch in first semester. Features complete shopping experience with user authentication, product catalog, and responsive design.",
    image: "/projects/byte-bazzar.png",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce", "Responsive Design"],
    category: "Web Development",
    github: "https://github.com/akshitjain1/Bytebazzar.git",
    demo: "https://akshitjain1.github.io/Bytebazzar/",
    featured: false
  },
  {
    id: 6,
    title: "Eco Tech",
    description: "A comprehensive responsive website dedicated to raising awareness about electronic waste and promoting sustainable technology practices. Built during first semester, this educational platform features interactive content, informative sections about e-waste management, recycling processes, and environmental impact. Includes modern UI design with Bootstrap components and engaging animations to educate users about eco-friendly technology disposal.",
    image: "/projects/eco-tech.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Environmental Tech"],
    category: "Web Development",
    github: "https://github.com/akshitjain1/Eco-TecH",
    demo: "https://akshitjain1.github.io/Eco-TecH/",
    featured: false
  },
  {
    id: 7,
    title: "Pathfinding Visualizer",
    description: "An interactive web application that visualizes classic pathfinding algorithms like A*, Dijkstra's, BFS, and DFS. Features include real-time animation, maze generation, and a unique comparison mode to analyze algorithm performance.",
    image: "/projects/pathfinding-visualizer.png",
    tags: ["JavaScript", "HTML", "Tailwind CSS", "Data Structures", "Algorithms"],
    category: "Web Application",
    github: "https://github.com/akshitjain1/Maze-Path-Finder/",
    demo: "https://akshitjain1.github.io/Maze-Path-Finder/",
    featured: true
  },
  {
    id: 8,
    title: "Rheumatoid Arthritis Patient Stratification using K-Modes Clustering",
    description: "A clinically interpretable, patent-based machine learning system for identifying meaningful subgroups of Rheumatoid Arthritis (RA) patients using purely categorical comorbidity, lifestyle, demographic, and socioeconomic data. Patent Title: Patient Stratification for Rheumatoid Arthritis using K-Modes Clustering on Categorical Comorbidity and Symptom Data.",
    image: "/projects/ra_kmodes.png",
    tags: ["Python", "pandas", "K-Modes", "Streamlit", "joblib", "matplotlib", "Machine Learning"],
    category: "Machine Learning",
    github: "https://github.com/akshitjain1/ra-kmodes-stratification",
    demo: "https://ra-kmodes-stratification.streamlit.app/",
    featured: true
  },
  {
    id: 9,
    title: "Explainable Clinical Entity Recognition (De-identified EHR)",
    description: "An end-to-end NLP system for extracting clinical entities from Electronic Health Records (EHRs) while ensuring patient privacy through de-identification and providing explainability for model predictions. Features 72% accuracy, comprehensive PHI masking (10+ pattern types), interactive visualizations, and transformer-based biomedical NER with confidence scoring.",
    image: "/projects/ecer.png",
    tags: ["Python", "HuggingFace Transformers", "PyTorch", "Streamlit", "NLP", "Healthcare AI", "XAI"],
    category: "Machine Learning",
    github: "https://github.com/akshitjain1/EHR-CNER-Explainable",
    demo: "",
    featured: true
  }
]

// Timeline Data
export const timeline: readonly TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "BTech in Computer Science (ML)",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "July 2023 - Present",
    description: "Currently pursuing Bachelor of Technology in Computer Science with specialization in Machine Learning. 3rd year student passionate about AI/ML and problem-solving.",
    achievements: [
      "Active participant in hackathons",
      "Built multiple ML projects using Python",
      "Specialized in AI/ML technologies"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Senior Secondary (Class XII - CBSE)",
    organization: "Himgiri Public School",
    location: "Panipat, Haryana",
    period: "April 2021 - June 2022",
    description: "Completed higher secondary education with focus on Science stream (PCM). Built strong foundation in Mathematics and Physics.",
    achievements: [
      "Strong academic performance",
      "Science stream specialization",
      "Foundation for engineering studies"
    ]
  },
  {
    id: 3,
    type: "education",
    title: "Secondary (Class X - CBSE)",
    organization: "Himgiri Public School",
    location: "Panipat, Haryana",
    period: "April 2019 - March 2020",
    description: "Completed secondary education with excellent academic performance. Developed early interest in computer science and mathematics.",
    achievements: [
      "Excellent academic record",
      "Early interest in programming",
      "Strong foundation in core subjects"
    ]
  },
  {
    id: 4,
    type: "certification",
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    organization: "Skillsoft",
    location: "Online",
    period: "August 2025",
    description: "Advanced computational theory certification covering language principles and finite automata theory. Credential ID: 157772739",
    achievements: [
      "Mastered finite automata theory concepts",
      "Understanding of computational language principles",
      "Applied theoretical concepts to practical problems"
    ]
  },
  {
    id: 5,
    type: "certification",
    title: "DSA Summer Training",
    organization: "Hitbullseye",
    location: "Online",
    period: "July 2025",
    description: "Intensive Data Structures and Algorithms training program focused on competitive programming and problem-solving techniques.",
    achievements: [
      "Enhanced DSA and Data Structures expertise",
      "Improved LeetCode problem-solving skills",
      "Advanced C++ programming techniques",
      "Developed logical problem-solving approach"
    ]
  },
  {
    id: 6,
    type: "certification",
    title: "JAVA Programming",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "May 2025",
    description: "Comprehensive Java programming certification covering object-oriented programming concepts and practical application development.",
    achievements: [
      "Mastered Java programming fundamentals",
      "Enhanced logic building capabilities",
      "GitHub project development and management",
      "Object-oriented programming implementation"
    ]
  },
  {
    id: 7,
    type: "certification",
    title: "Data Structures and Algorithm",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "December 2024",
    description: "Advanced certification in Data Structures and Algorithms with focus on implementation and optimization techniques.",
    achievements: [
      "Advanced Data Structures implementation",
      "Algorithm optimization techniques",
      "Programming problem-solving methodologies",
      "Computational complexity analysis"
    ]
  },
  {
    id: 8,
    type: "certification",
    title: "Object Oriented Programming",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "December 2024",
    description: "Comprehensive Object-Oriented Programming certification with emphasis on C++ and critical thinking in software design.",
    achievements: [
      "Object-Oriented Programming mastery",
      "Critical thinking in software design",
      "Advanced C++ programming concepts",
      "Software architecture principles"
    ]
  },
  {
    id: 9,
    type: "certification",
    title: "Packet Switching Networks and Algorithms",
    organization: "University of Colorado Boulder",
    location: "Online",
    period: "November 2024",
    description: "Advanced networking certification covering packet switching technologies and routing algorithms including OSPF protocols.",
    achievements: [
      "Open Shortest Path First (OSPF) protocol expertise",
      "Advanced networking algorithms understanding",
      "General networking concepts mastery",
      "Routing protocols implementation knowledge"
    ]
  },
  {
    id: 10,
    type: "certification",
    title: "Peer-to-Peer Protocols and Local Area Networks",
    organization: "University of Colorado Boulder",
    location: "Online",
    period: "October 2024",
    description: "Comprehensive networking certification focusing on P2P protocols, LAN technologies, and network performance management.",
    achievements: [
      "OSI Models comprehensive understanding",
      "Network Performance Management techniques",
      "TCP/IP protocol suite mastery",
      "Computer Networking and Wireless Networks expertise"
    ]
  },
  {
    id: 11,
    type: "certification",
    title: "Digital Systems: From Logic Gates to Processors",
    organization: "Universitat Autònoma de Barcelona",
    location: "Online",
    period: "September 2024",
    description: "Advanced digital systems certification covering hardware architecture from basic logic gates to complex processor design.",
    achievements: [
      "Verification and Validation (V&V) methodologies",
      "Software Design for hardware systems",
      "Hardware Architecture comprehensive knowledge",
      "Computer Hardware and Simulations expertise"
    ]
  },
  {
    id: 12,
    type: "certification",
    title: "Fundamentals of Network Communication",
    organization: "University of Colorado Boulder",
    location: "Online",
    period: "September 2024",
    description: "Foundation networking certification covering essential network communication protocols and planning methodologies.",
    achievements: [
      "OSI Models fundamental understanding",
      "TCP/IP protocol implementation",
      "Transmission Control Protocol (TCP) mastery",
      "Network planning and design principles"
    ]
  },
  {
    id: 13,
    type: "certification",
    title: "Introduction to Hardware and Operating Systems",
    organization: "IBM",
    location: "Online",
    period: "September 2024",
    description: "Comprehensive hardware and OS certification covering modern computing systems and virtualization technologies.",
    achievements: [
      "Internet of Things (IoT) understanding",
      "Windows and Mac OS expertise",
      "Peripheral Devices management",
      "Kernel-based Virtual Machine (KVM) and Virtualization"
    ]
  },
  {
    id: 14,
    type: "certification",
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google",
    location: "Online",
    period: "September 2024",
    description: "Google's comprehensive networking certification covering practical network administration and wireless technologies.",
    achievements: [
      "Data Integration techniques",
      "Wireless Networks implementation",
      "Network Administration best practices",
      "Dynamic Host Configuration Protocol (DHCP) expertise"
    ]
  },
  {
    id: 15,
    type: "certification",
    title: "Computer Programming",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "May 2024",
    description: "Foundation programming certification in C language covering syntax, data types, and logical programming concepts.",
    achievements: [
      "C Programming Language mastery",
      "Logic building fundamentals",
      "Programming syntax understanding",
      "Data types and memory management"
    ]
  },
  {
    id: 16,
    type: "certification",
    title: "Mastering Full Stack Development: From Frontend to Backend",
    organization: "Udemy",
    location: "Online",
    period: "February 2024",
    description: "Comprehensive full-stack development certification covering both frontend and backend technologies.",
    achievements: [
      "Full-Stack Development expertise",
      "Web Development best practices",
      "Frontend and Backend integration",
      "Modern development frameworks"
    ]
  },
  {
    id: 17,
    type: "certification",
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    location: "Online",
    period: "November 2023",
    description: "Comprehensive web design certification focusing on responsive design principles and modern web technologies.",
    achievements: [
      "Cascading Style Sheets (CSS) mastery",
      "HTML5 advanced techniques",
      "Web Design best practices",
      "Responsive Web Development principles"
    ]
  },
  {
    id: 18,
    type: "certification",
    title: "Management Tips",
    organization: "Project Management Institute (PMI)",
    location: "Online",
    period: "October 2023",
    description: "Professional management certification focusing on leadership, team dynamics, and critical thinking skills.",
    achievements: [
      "Critical Thinking enhancement",
      "Team Spirit and collaboration",
      "Teamwork optimization strategies",
      "Management best practices"
    ]
  },
  {
    id: 19,
    type: "certification",
    title: "Pitching Yourself for Opportunity",
    organization: "LinkedIn",
    location: "Online",
    period: "September 2023",
    description: "Professional development certification focused on self-promotion and opportunity presentation skills.",
    achievements: [
      "Pitching Ideas effectively",
      "Self Promotion strategies",
      "Professional presentation skills",
      "Opportunity recognition and pursuit"
    ]
  },
  {
    id: 20,
    type: "certification",
    title: "Video Editing Online Course",
    organization: "Inside The Edit",
    location: "Online",
    period: "2023",
    description: "Professional video editing certification covering advanced editing techniques and color grading.",
    achievements: [
      "Advanced Video Editing techniques",
      "Video Color Grading mastery",
      "After Effects proficiency",
      "LUT (Look-Up Tables) implementation"
    ]
  }
]

// GitHub Statistics
export const githubStats: GitHubStats = {
  username: "akshitjain1",
  totalRepos: 20,
  totalCommits: 350,
  totalStars: 2,
  totalForks: 2,
  streak: 45,
  topLanguages: [
    { name: "Python", percentage: 35 },
    { name: "C++", percentage: 25 },
    { name: "HTML", percentage: 15 },
    { name: "CSS", percentage: 12 },
    { name: "JavaScript", percentage: 8 },
    { name: "Jupyter Notebook", percentage: 5 }
  ]
}
