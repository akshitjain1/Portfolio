import type { PersonalInfo, NavigationItem, SkillCategory, Project, TimelineItem, GitHubStats } from '@/types/portfolio'

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Akshit Jain",
  title: "Aspiring Machine Learning Engineer | Debugging for joy | Rhythm-Coded Thinker",
  tagline: "Hi, I'm Akshit Jain",
  email: "akshitjainonly1@gmail.com",
  phone: "+91 9350558221",
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
    title: "Multiple Certifications",
    organization: "Various Platforms",
    location: "Online",
    period: "2023 - Present",
    description: "Completed various certifications to enhance skills in management, networking, and technology.",
    achievements: [
      "Management Tips - PMI LinkedIn Learning (October 2023)",
      "HACK_IOT Certificate (February 2024)",
      "Bits and Bytes of Computer Networking by Google (September 2024)"
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
