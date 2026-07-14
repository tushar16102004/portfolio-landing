import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}
