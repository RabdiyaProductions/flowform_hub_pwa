import { Link, useParams } from "react-router-dom";
import { tools } from "../data/tools";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
        <h1>Not found</h1>
        <Link to="/tools">Back to Tools</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h1 style={{ marginBottom: 6 }}>{tool.title}</h1>
          <div style={{ opacity: 0.8 }}>{tool.summary}</div>
          <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>
            <strong>{tool.category}</strong> • {tool.status.toUpperCase()}
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, opacity: 0.7 }}>Price</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>
            {tool.price ? tool.price : "See Stripe"}
          </div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>Subscription / payment handled by Stripe</div>
        </div>
      </div>

      {tool.bullets?.length ? (
        <div style={{ marginTop: 18, padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
          <h3 style={{ marginTop: 0 }}>What you get</h3>
          <ul style={{ marginBottom: 0 }}>
            {tool.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
        <Link to="/tools">All tools</Link>
        <Link to="/chatbot">Sales Chat</Link>
        {tool.stripeUrl ? (
          <a href={tool.stripeUrl} target="_blank" rel="noreferrer">
            Buy now
          </a>
        ) : (
          <span style={{ opacity: 0.5 }}>Stripe link pending</span>
        )}
      </div>

      <div style={{ marginTop: 18, fontSize: 12, opacity: 0.7 }}>
        Note: outputs, guidance, and plans are indicative and should be adapted to your personal needs and constraints.
      </div>
    </div>
  );
}
