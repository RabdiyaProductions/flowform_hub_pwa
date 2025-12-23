import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Tools from "./pages/tools";
import ToolDetail from "./pages/tooldetail";
import ChatBot from "./pages/chatbot";
import Success from "./pages/success";
import Cancel from "./pages/cancel";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/:id" element={<ToolDetail />} />
      <Route path="/chat" element={<ChatBot />} />

      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
