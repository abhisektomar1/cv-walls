import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Desktop } from "./pages/Desktop";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-echo" element={<Desktop />} />
    </Routes>
  );
}
