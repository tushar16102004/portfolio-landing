import { motion } from "framer-motion";
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

const EXPERIENCE = [
  {
    role: "Junior Web Developer",
    company: "SOZANCE",
    period: "Jan 2026 – Present",
    description:
      "Building responsive web interfaces with React.js. Collaborating with cross-functional teams to deliver scalable frontend solutions.",
    tags: ["React.js", "JavaScript", "REST API", "Git"],
  },
  {
    role: "Data Science Intern",
    company: "Unified Mentor Pvt Ltd",
    period: "Nov 2025 – Feb 2026",
    description:
      "Performed exploratory data analysis on large datasets using Python. Created data visualizations and statistical models to derive actionable insights.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
  },
  {
    role: "Collection Contributor",
    company: "Deccan AI",
    period: "Freelance Contract",
    description:
      "Contributed high-quality data collections for AI/ML training pipelines. Worked independently on data annotation and quality assurance.",
    tags: ["Data Collection", "AI/ML", "Freelance"],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "Parul University, Vadodara",
    period: "2022 – 2026"
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "Gujarat Board",
    period: "2022",
  },
];

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "Python", "SQL", "C/C++", "HTML/CSS"] },
  { category: "Frameworks", items: ["React.js", "Node.js", "Express.js", "Tailwind CSS"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
  { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] },
  { category: "Cloud", items: ["Google Cloud", "BigQuery", "Cloud Storage"] },
];

const CERTIFICATIONS = [
  "Google Cloud Skill Badge – BigQuery in Connected Sheets",
  "NPTEL – Computer Networks",
  "NPTEL – Theory of Computation",
];

export default function Resume() {
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
        <div className="max-w-[900px] mx-auto px-6 md:px-10">

          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text-primary transition-colors mb-8"
            >
              <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display italic text-text-primary mb-4">
              Resume
            </h1>
            <p className="text-sm md:text-base text-muted max-w-lg">
              A snapshot of my professional journey, skills, and achievements.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Experience
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-stroke bg-surface/30 hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-display italic text-text-primary">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted">{exp.company}</span>
                    </div>
                    <span className="text-xs text-muted bg-stroke/50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Education
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 rounded-2xl border border-stroke bg-surface/30"
                >
                  <div>
                    <h3 className="text-base md:text-lg font-display italic text-text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted">{edu.institute}</span>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="text-xs text-muted bg-stroke/50 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {SKILLS.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 rounded-2xl border border-stroke bg-surface/30"
                >
                  <h4 className="text-sm font-display italic text-text-primary mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Certifications
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-stroke bg-surface/30"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#89AACC] to-[#4E85BF] shrink-0" />
                  <span className="text-sm text-text-primary">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Download CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center pt-8 border-t border-stroke"
          >
            <p className="text-sm text-muted mb-6">
              Want a copy? Download the PDF version below.
            </p>
            <a
              href="/Tushar_Bhanderi_Resume.pdf"
              download="Tushar_Bhanderi_Resume.pdf"
              className="gradient-ring relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm bg-text-primary text-bg transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Download Resume PDF <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
