import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  id: number;
  image: string;
  category: string;
  title: string;
  tags: string[];
  level: number; // 0-100
  span: string;
  aspect: string;
  accent: string;
}

const SKILLS: Skill[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop",
    category: "Frontend",
    title: "MERN Stack",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    level: 88,
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    accent: "from-blue-500/60",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    category: "Data Science",
    title: "Data Analysis & EDA",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    level: 82,
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    accent: "from-violet-500/60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    category: "Database",
    title: "SQL & NoSQL",
    tags: ["MySQL", "MongoDB", "Aggregation", "Joins"],
    level: 85,
    span: "md:col-span-4",
    aspect: "aspect-square",
    accent: "from-emerald-500/60",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    category: "Cloud",
    title: "Google Cloud",
    tags: ["BigQuery", "Sheets API", "Cloud Storage"],
    level: 70,
    span: "md:col-span-4",
    aspect: "aspect-square",
    accent: "from-yellow-500/60",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    category: "Networking",
    title: "Computer Networks",
    tags: ["TCP/IP", "OSI Model", "Subnetting",],
    level: 76,
    span: "md:col-span-4",
    aspect: "aspect-square",
    accent: "from-cyan-500/60",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    category: "Theory",
    title: "Theory of Computation",
    tags: ["Automata", "Grammars", "Turing Machine",],
    level: 74,
    span: "md:col-span-4",
    aspect: "aspect-square",
    accent: "from-rose-500/60",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section ref={sectionRef} className="bg-bg py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Skills & Certifications
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-3">
              Technical <em className="font-display italic">achievements</em>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              A hands-on builder — every skill sharpened through real projects, certifications &amp; relentless curiosity.
            </p>
          </div>

          <a
            href="https://github.com/tushar16102004"
            target="_blank"
            rel="noreferrer"
            className="gradient-ring relative hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary"
          >
            <span className="relative z-10 flex items-center gap-1.5 bg-bg rounded-full px-1">
              GitHub <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </span>
          </a>
        </motion.div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={i}
              className={`group relative rounded-3xl overflow-hidden bg-surface border border-stroke cursor-default ${skill.span} ${skill.aspect}`}
            >
              {/* Background Image */}
              <img
                src={skill.image}
                alt={skill.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark gradient overlay — always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

              {/* Extra dark layer on hover so text stays readable */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Accent color glow on hover — subtle, from bottom only */}
              <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${skill.accent} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                {/* Top — category badge */}
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {skill.category}
                  </span>
                  <span className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                    {skill.level}%
                  </span>
                </div>

                {/* Bottom — title, tags, level bar */}
                <div>
                  <h3 className="font-display italic text-2xl md:text-3xl text-white mb-3 leading-tight">
                    {skill.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-white bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Skill Level Bar */}
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                      className="h-full bg-white/70 rounded-full origin-left"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
