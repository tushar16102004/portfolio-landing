import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
