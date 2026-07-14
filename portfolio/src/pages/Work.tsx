import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const PROJECTS = [
  {
    id: "p1",
    title: "Share-A-Plate",
    subtitle: "Surplus Food Redistribution App",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    description: "A digital ecosystem built to reduce food waste by connecting local restaurants, supermarkets, and catering services directly with nearby NGOs and shelters to donate surplus food securely and efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
    github: "https://github.com/tushar16102004/Share-A-Plate",
    demo: "https://share-a-plate.vercel.app",
  },
  {
    id: "p2",
    title: "Netflix Insights Hub",
    subtitle: "Interactive Data Analytics Platform",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "An exploratory data analysis pipeline that parses and visualizes the global Netflix titles dataset. Analyzes content releases over time, regional trends, classification breakdowns, and content strategies.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    github: "https://github.com/tushar16102004/netflix-data-analysis",
    demo: "#",
  },
  {
    id: "p3",
    title: "EduForge (BrainQuest)",
    subtitle: "Gamified Kid's Learning Portal",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    description: "A bright, highly interactive gamified portal designed to teach elementary science and coding basics. Features custom animations, interactive quizzes, progress tracking, and collectible digital badges.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Firebase Auth", "Firestore"],
    github: "https://github.com/tushar16102004/BrainQuest",
    demo: "https://brainquest-edu.vercel.app",
  },
  {
    id: "p4",
    title: "Smart Finance Visualizer",
    subtitle: "Personal Expense Analytics System",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    description: "A responsive MERN stack financial helper that processes income and expenses. Displays budget progress bars, category breakdown charts, and triggers email notifications when spending nears limits.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/tushar16102004/smart-finance",
    demo: "#",
  },
  {
    id: "p5",
    title: "Sales Performance Predictor",
    subtitle: "ML Analytics & Forecasting Pipeline",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "An end-to-end data analysis and forecasting model trained on retail sales history. Optimizes regional stock and inventory distribution by predicting sales trends with 92% validation accuracy.",
    tech: ["Python", "Scikit-Learn", "SQL", "Google Cloud BigQuery", "Pandas", "Matplotlib"],
    github: "https://github.com/tushar16102004/sales-predictor",
    demo: "#",
  },
  {
    id: "p6",
    title: "DevChat Collaboration Hub",
    subtitle: "Real-Time Dev Messaging Tool",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description: "A real-time workspace for developers featuring persistent chat channels, private groups, syntax-highlighted code block sharing, markdown messaging, and an integrated canvas whiteboard.",
    tech: ["React.js", "Socket.io", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/tushar16102004/dev-chat",
    demo: "#",
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main className="bg-bg min-h-screen pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-14"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-text-primary transition-colors mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display italic text-text-primary mb-4">
              My Works
            </h1>
            <p className="text-sm md:text-base text-muted max-w-lg">
              A curated catalog of projects spanning web development, data science, and AI pipelines.
            </p>
          </motion.div>

          {/* Category Filter Capsules */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-12 border-b border-stroke pb-6"
          >
            {["All", "Web Dev", "Data Science"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-text-primary bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-white/15"
                    : "text-white/60 hover:text-text-primary hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="group relative bg-surface/30 border border-stroke rounded-3xl overflow-hidden flex flex-col h-full hover:bg-surface/50 hover:border-white/20 transition-colors duration-500"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display italic text-text-primary mb-1">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted mb-4 block">
                      {project.subtitle}
                    </span>
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link buttons */}
                    <div className="flex items-center gap-4 pt-4 border-t border-stroke">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-muted hover:text-text-primary transition-colors duration-200"
                      >
                        GitHub Code ↗
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-muted hover:text-text-primary transition-colors duration-200"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </>
  );
}
