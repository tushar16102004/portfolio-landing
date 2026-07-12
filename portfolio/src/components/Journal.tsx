import { motion } from "framer-motion";

interface Entry {
  title: string;
  image: string;
  readTime: string;
  date: string;
}

const ENTRIES: Entry[] = [
  {
    title: "SOZANCE | Junior Web Developer",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop",
    readTime: "React.js",
    date: "Jan 2026 - Present",
  },
  {
    title: "UNIFIED MENTOR PVT LTD | Data Science Intern",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    readTime: "Pandas/NumPy",
    date: "Nov 2025 - Feb 2026",
  },
  {
    title: "Deccan AI | Collection Contributor",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    readTime: "Freelance",
    date: "Freelance Contract",
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

export default function Journal() {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
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
                Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-3">
              Professional <em className="font-display italic">journey</em>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              A look into my work experience and roles.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/tusharbhanderi1610/"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-1"
          >
            <span className="relative z-10">LinkedIn ↗</span>
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors duration-300"
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-display italic text-xl text-text-primary truncate">
                  {entry.title}
                </h3>
              </div>
              <div className="hidden sm:flex flex-col items-end text-xs text-muted flex-shrink-0 pr-4">
                <span>{entry.readTime}</span>
                <span>{entry.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
