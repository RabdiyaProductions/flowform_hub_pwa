import { Link } from "react-router-dom";

export default function ChatBot() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>ChatBot</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        This is the FlowForm sales chat entry page. (We can wire this into your real GPT flow later.)
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/tools">Browse Tools</Link>
      </div>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
        <strong>Next step:</strong> Connect this to your chatbot UI (or embed your GPT workflow).
        For now, this confirms routing works and stops “Open ChatBot” looking broken.
      </div>
    </div>
  );
}
