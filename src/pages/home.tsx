import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>FlowForm Hub</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Health & wellbeing tools, suites, and subscriptions — all in one place.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
        <Link to="/tools">Browse Tools</Link>
        <span style={{ opacity: 0.6 }}>|</span>
        <Link to="/chatbot">Sales Chat</Link>
        <span style={{ opacity: 0.6 }}>|</span>
        <a href="https://flowformvitality.my.canva.site/" target="_blank" rel="noreferrer">
          View Canva Landing
        </a>
      </div>

      <div style={{ marginTop: 28, padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
        <strong>Next step:</strong> Once you’re happy with the hub, we can upgrade the
        “backing pages” into proper marketing PDFs (2-page suites + 1-page single tool).
      </div>
    </div>
  );
}
