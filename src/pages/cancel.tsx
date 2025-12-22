import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1>Payment cancelled</h1>
      <p style={{ opacity: 0.8 }}>
        No worries — nothing was charged (or the flow was interrupted). You can try again anytime.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/tools">Back to Tools</Link>
        <Link to="/chatbot">Talk to Sales Chat</Link>
      </div>
    </div>
  );
}
