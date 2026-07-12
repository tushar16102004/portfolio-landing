import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";
import Navbar from "./Navbar";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const ROLES = ["MERN Stack Developer", "Data Analyst", "Web Developer", "Problem Solver"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

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
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Collection &apos;26
        </span>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Tushar Bhanderi
        </h1>

        <p className="blur-in text-base md:text-lg text-muted mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Surat, Gujarat.
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Highly-motivated employee with desire to take on new challenges. Strong work ethic, adaptability, and exceptional interpersonal skills.
        </p>

        <div className="blur-in inline-flex gap-4">
          <a
            href="#work"
            className="gradient-ring relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg transition-transform duration-300 hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span className="relative z-10">Explore Projects</span>
          </a>
          <a
            href="mailto:tusharbhanderi1610@gmail.com"
            className="gradient-ring relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary transition-transform duration-300 hover:scale-105 hover:border-transparent"
          >
            <span className="relative z-10">Reach out...</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute left-0 top-0 w-px h-4 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
