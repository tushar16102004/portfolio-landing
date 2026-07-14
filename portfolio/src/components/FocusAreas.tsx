import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FOCUS_ITEMS = [
  {
    no: "01",
    title: "Full-Stack Web Dev",
    desc: "Developing modern, performant, and responsive interfaces with React, built on robust MERN server layouts. Focused on clean state management and micro-animations.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
  },
  {
    no: "02",
    title: "Data Intelligence",
    desc: "Extracting insights and modeling patterns from structured data. Experienced in data processing, database administration, and graphical storytelling.",
    skills: ["Python", "Pandas", "SQL", "BigQuery", "Seaborn"],
  },
  {
    no: "03",
    title: "Interactive Systems",
    desc: "Building interactive, physics-based canvas apps, games, and responsive dashboards that maximize user engagement through tactile design.",
    skills: ["HTML5 Canvas", "REST APIs", "Socket.io", "Tailwind CSS", "JavaScript"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FocusAreas() {
  const tickerText = "DEVELOPMENT • DESIGN • DATA ANALYTICS • PROBLEM SOLVING • AI INTEGRATION • CORE DISCIPLINES • CREATIVE CODE • ";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="bg-bg py-16 md:py-24 border-b border-stroke overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary">
            Core <em className="font-display italic">disciplines</em> &amp; focus
          </h2>
        </motion.div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24">
          {FOCUS_ITEMS.map((item, i) => (
            <motion.div
              key={item.no}
              initial={isMobile ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ delay: isMobile ? 0 : i * 0.1 }}
              className="p-8 rounded-3xl border border-stroke bg-surface/10 hover:bg-surface/30 hover:border-white/20 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="block text-2xl font-display italic text-white/40 mb-6">
                  {item.no}
                </span>
                <h3 className="text-xl font-display italic text-text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>
              
              {/* Small skills indicator */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stroke/50">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative flex items-center border-y border-stroke bg-surface/5 py-4 select-none pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, idx) => (
            <span
              key={idx}
              className="text-4xl md:text-5xl lg:text-6xl font-display italic tracking-[0.1em] text-white/5 uppercase mx-4"
            >
              {tickerText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
