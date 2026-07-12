import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      );
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Thin glowing top bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-white/5">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: progress / 100,
            background:
              "linear-gradient(90deg, #4E85BF 0%, #89AACC 50%, #c4b5fd 100%)",
            boxShadow: "0 0 8px 1px rgba(167,139,250,0.6)",
          }}
        />
      </div>

      {/* Small glass circle — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 1 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-6 z-[9998]"
      >
        <div
          className="relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(24px) saturate(220%)",
            WebkitBackdropFilter: "blur(24px) saturate(220%)",
            border: "1px solid rgba(255,255,255,0.28)",
            boxShadow:
              "0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="19" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <circle
              cx="22" cy="22" r="19"
              fill="none"
              stroke="url(#pg2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="119.38"
              strokeDashoffset={119.38 - (progress / 100) * 119.38}
            />
            <defs>
              <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#89AACC" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centered percentage text */}
          <span
            className="text-[10px] font-mono font-bold relative z-10"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {Math.round(progress)}%
          </span>

          {/* Realistic glass glare reflection */}
          <div
            className="absolute top-[2px] left-[4px] right-[4px] h-[10px] rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
              filter: "blur(0.5px)"
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
