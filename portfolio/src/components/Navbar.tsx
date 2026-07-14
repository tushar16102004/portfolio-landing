import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = ["Home", "Work", "Resume"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";
  const isWorkPage = location.pathname === "/work";
  const [active, setActive] = useState(
    isResumePage ? "Resume" : isWorkPage ? "Work" : "Home"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync active state when navigating
  useEffect(() => {
    setActive(isResumePage ? "Resume" : isWorkPage ? "Work" : "Home");
  }, [isResumePage, isWorkPage]);


  const getHref = (link: string) => {
    if (link === "Resume") return "/resume";
    if (link === "Work") return "/work";
    if (link === "Home") return isResumePage || isWorkPage ? "/" : "#home";
    return `#${link.toLowerCase()}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className="relative inline-flex items-center rounded-full px-2 py-2 transition-shadow duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: scrolled
            ? "0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)"
            : "0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        {/* Glass reflection glare */}
        <div className="absolute top-[1px] left-[15px] right-[15px] h-[5px] rounded-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

        {/* Logo */}
        <Link
          to="/"
          className="group relative w-9 h-9 rounded-full accent-gradient flex items-center justify-center transition-transform duration-300 hover:scale-110"
          style={{ backgroundImage: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundImage =
              "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundImage =
              "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)";
          }}
        >
          <span className="w-[30px] h-[30px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">
              TB
            </span>
          </span>
        </Link>

        <span className="hidden sm:block w-px h-5 bg-stroke/50 mx-1" />

        {/* Nav links */}
        {LINKS.map((link) => {
          const href = getHref(link);
          const isRouterLink = href.startsWith("/") && !href.startsWith("/#");

          const className = `text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
            active === link
              ? "text-text-primary bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-white/15"
              : "text-white/80 hover:text-text-primary hover:bg-white/5 border border-transparent"
          }`;

          return isRouterLink ? (
            <Link
              key={link}
              to={href}
              onClick={() => setActive(link)}
              className={className}
            >
              {link}
            </Link>
          ) : (
            <a
              key={link}
              href={href}
              onClick={() => setActive(link)}
              className={className}
            >
              {link}
            </a>
          );
        })}

        <span className="w-px h-5 bg-stroke mx-1" />

        {/* Say hi button */}
        <a
          href="mailto:tusharbhanderi1610@gmail.com"
          className="gradient-ring relative inline-flex items-center rounded-full text-xs sm:text-sm p-[0.5px]"
        >
          <span className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-0.5 sm:py-2 text-text-primary">
            Say hi <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
