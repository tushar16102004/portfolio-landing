export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Dev" | "Data Science";
  image: string;
  description: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Share-A-Plate",
    subtitle: "Surplus Food Redistribution App",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    description: "A digital ecosystem built to reduce food waste by connecting local restaurants, supermarkets, and catering services directly with nearby NGOs and shelters to donate surplus food securely and efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
  },
  {
    id: "p2",
    title: "HoleMaster",
    subtitle: "Interactive 3D Physics Web Game",
    category: "Web Dev",
    image: "/hole_io.png",
    description: "A physics-based web arcade game inspired by Hole.io, developed using React and HTML5 Canvas with custom physics engines. Players control a growing black hole consuming grid obstacles within a dynamic viewport layout.",
    tech: ["React.js", "HTML5 Canvas", "Tailwind CSS", "JavaScript (ES6+)", "CSS Modules"],
  },
  {
    id: "p3",
    title: "Netflix Data Analysis",
    subtitle: "Interactive Data Analytics Project by Unified",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "An exploratory data analysis pipeline that parses and visualizes the global Netflix titles dataset. Analyzes content releases over time, regional trends, classification breakdowns, and content strategies.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  },
  {
    id: "p4",
    title: "NewsLeLo",
    subtitle: "Real-time News Aggregator Portal",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    description: "A live news aggregator dashboard showcasing top international headlines. Features robust API caching, query parameters filtering, content search, and dark mode customization, all running asynchronously.",
    tech: ["React.js", "RESTful News API", "Tailwind CSS", "Axios", "LocalStorage"],
  },
  {
    id: "p5",
    title: "BrainQuest",
    subtitle: "Gamified Kid's Learning Portal",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    description: "A bright, highly interactive gamified portal designed to teach elementary science and coding basics. Features custom animations, interactive quizzes, progress tracking, and collectible digital badges.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Firebase Auth", "Firestore"],
  },
  {
    id: "p6",
    title: "Smart Finance Visualizer",
    subtitle: "Personal Expense Analytics System",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    description: "A responsive MERN stack financial helper that processes income and expenses. Displays budget progress bars, category breakdown charts, and triggers email notifications when spending nears limits.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
  },
  {
    id: "p7",
    title: "Sales Performance Predictor",
    subtitle: "ML Analytics & Forecasting Pipeline",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "An end-to-end data analysis and forecasting model trained on retail sales history. Optimizes regional stock and inventory distribution by predicting sales trends with 92% validation accuracy.",
    tech: ["Python", "Scikit-Learn", "SQL", "Google Cloud BigQuery", "Pandas", "Matplotlib"],
  },
  {
    id: "p8",
    title: "DevChat Collaboration Hub",
    subtitle: "Real-Time Dev Messaging Tool",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description: "A real-time workspace for developers featuring persistent chat channels, private groups, syntax-highlighted code block sharing, markdown messaging, and an integrated canvas whiteboard.",
    tech: ["React.js", "Socket.io", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
  },
];
