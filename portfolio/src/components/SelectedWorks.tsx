import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  image: string;
  span: string;
  aspect: string;
}

const PROJECTS: Project[] = [
  {
    title: "Share-A-Plate - Food Donation App",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    title: "Quiz App",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-square",
  },
  {
    title: "BrainQuest - Kids Learning Platform",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-square",
  },
  {
    title: "Netflix Data Analysis",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-3">
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              A selection of projects I&apos;ve worked on, from concept to
              launch.
            </p>
          </div>
          <Link
            to="/work"
            className="gradient-ring relative hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary"
          >
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-1">
              View all work <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden ${project.span} ${project.aspect}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-500 flex items-center justify-center">
                <span className="inline-flex items-center rounded-full px-5 py-2.5 bg-white text-bg text-sm gradient-ring">
                  <span className="relative z-10">
                    View — <em className="font-display italic">{project.title}</em>
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
