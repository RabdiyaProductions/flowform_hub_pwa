import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1>Payment successful ✅</h1>
      <p style={{ opacity: 0.8 }}>
        Thanks — your Stripe payment completed. If access is automated, it will unlock shortly.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/tools">Go to Tools</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
