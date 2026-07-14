import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import { PROJECTS } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};


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
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-bg min-h-screen pt-28 pb-20"
      >
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
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text-primary transition-colors mb-8"
            >
              <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg> Back to Home
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
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
