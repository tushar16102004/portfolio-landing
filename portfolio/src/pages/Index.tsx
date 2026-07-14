import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Journal from "../components/Journal";
import Explorations from "../components/Explorations";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Manifesto from "../components/Manifesto";
import FocusAreas from "../components/FocusAreas";

export default function Index() {
  const [isLoading, setIsLoading] = useState(() => {
    return typeof window !== "undefined" ? !sessionStorage.getItem("hasLoaded") : true;
  });

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(false);
            sessionStorage.setItem("hasLoaded", "true");
          }}
        />
      )}
      <ScrollProgress />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-bg"
      >
        <Hero />
        <FocusAreas />
        <SelectedWorks />
        <Manifesto />
        <Journal />
        <Explorations />
        <Stats />
        <Footer />
      </motion.main>
    </>
  );
}
