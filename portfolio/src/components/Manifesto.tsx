import { motion } from "framer-motion";

const MANIFESTO = [
  {
    no: "01",
    title: "Clean Engineering",
    body: "Building scalable, maintainable architectures using the MERN stack. I believe code should not only function, but read like literature.",
  },
  {
    no: "02",
    title: "Data-Driven Strategy",
    body: "Transforming raw data into actionable visual stories. Leveraging Python and SQL to uncover insights and drive product decisions.",
  },
  {
    no: "03",
    title: "Fearless Adaptation",
    body: "Quickly mastering new technologies, from Google Cloud tools to AI integrations, to tackle complex technical challenges.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="bg-bg py-20 md:py-28 border-y border-stroke"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-3 mb-14 md:mb-20"
        >
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            Manifesto
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {MANIFESTO.map((c, i) => (
            <motion.div
              key={c.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="border-t border-stroke pt-8"
            >
              <span className="block text-sm text-text-primary font-display italic mb-6">
                {c.no}
              </span>
              <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-4">
                {c.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
