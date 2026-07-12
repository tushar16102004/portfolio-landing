import { motion } from "framer-motion";

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Done" },
  { value: "3+", label: "Roles Held" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:divide-x md:divide-stroke">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-display italic text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
