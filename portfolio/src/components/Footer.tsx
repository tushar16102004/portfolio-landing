import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";
import { motion, AnimatePresence } from "framer-motion";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const SOCIALS = [

  { name: "LinkedIn", url: "https://www.linkedin.com/in/tusharbhanderi1610/" },
  { name: "GitHub", url: "https://github.com/tushar16102004" },
  { name: "Dribbble", url: "#" },
  { name: "Instagram", url: "https://www.instagram.com/b_tushar_1610" }
];

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSocialClick = (e: React.MouseEvent, name: string) => {
    if (name === "Dribbble") {
      e.preventDefault();
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }

    return () => {
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden"
    >
      {/* Background video, flipped vertically */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap mb-16 md:mb-24 select-none">
          <div ref={marqueeRef} className="inline-flex">
            {Array.from({ length: 2 }).map((_, dupe) => (
              <span
                key={dupe}
                className="text-4xl md:text-6xl font-display italic text-text-primary/20 uppercase pr-4"
              >
                {"Building the Future • ".repeat(10)}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-6 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-10">
            Let&apos;s build something.
          </h2>
          <a
            href="mailto:tusharbhanderi1610@gmail.com"
            className="gradient-ring relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm md:text-base bg-text-primary text-bg"
          >
            <span className="relative z-10">tusharbhanderi1610@gmail.com</span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stroke/50 items-center">
          {/* Left: Available for projects */}
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs md:text-sm text-muted">
              Available for projects
            </span>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center items-center gap-6">
            {SOCIALS.map((social) => (
              <div key={social.name} className="relative inline-block">
                <a
                  href={social.url}
                  target={social.url !== "#" ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={(e) => handleSocialClick(e, social.name)}
                  className="text-xs md:text-sm text-muted hover:text-text-primary transition-colors"
                >
                  {social.name}
                </a>

                {social.name === "Dribbble" && (
                  <AnimatePresence>
                    {showToast && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 4, scale: 0.95, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 mb-3 z-[9999] pointer-events-none whitespace-nowrap"
                      >
                        <div
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl relative overflow-hidden"
                          style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(20px) saturate(180%)",
                            WebkitBackdropFilter: "blur(20px) saturate(180%)",
                            border: "1px solid rgba(255,255,255,0.22)",
                            boxShadow:
                              "0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                          }}
                        >
                          {/* Glare */}
                          <div
                            className="absolute top-[1px] left-[3px] right-[3px] h-[6px] rounded-full pointer-events-none"
                            style={{
                              background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
                              filter: "blur(0.5px)",
                            }}
                          />
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" style={{ boxShadow: "0 0 6px rgba(167,139,250,0.8)" }} />
                          <span
                            className="text-[10px] font-mono tracking-wider font-semibold"
                            style={{
                              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            Coming soon!
                          </span>
                          {/* Small arrow pointing down */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white/10" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="flex justify-center sm:justify-end text-xs md:text-sm text-muted">
            &copy; 2026 Tushar Bhanderi.
          </div>
        </div>
      </div>
    </footer>
  );
}
