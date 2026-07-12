import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Journal from "../components/Journal";
import Explorations from "../components/Explorations";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Manifesto from "../components/Manifesto";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ScrollProgress />
      <main className="bg-bg">
        <Hero />
        <SelectedWorks />
        <Manifesto />
        <Journal />
        <Explorations />
        <Stats />
        <Footer />
      </main>
    </>
  );
}
