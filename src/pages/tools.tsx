import { Link } from "react-router-dom";
import { tools } from "../data/tools";

export default function Tools() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Tools</h1>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <input
          placeholder="Search tools..."
          style={{ padding: 8, width: 320 }}
          onChange={(e) => {
            const v = e.target.value.toLowerCase();
            const el = document.getElementById("tools-wrap");
            if (!el) return;
            // super simple filter by hiding cards
            Array.from(el.querySelectorAll("[data-title]")).forEach((node) => {
              const title = (node.getAttribute("data-title") || "").toLowerCase();
              (node as HTMLElement).style.display = title.includes(v) ? "block" : "none";
            });
          }}
        />
        <Link to="/">Home</Link>
      </div>

        <div
          id="tools-wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 14,
          }}>
        {tools.map((t) => (
          <div
            key={t.id}
            data-title={`${t.title} ${t.category} ${t.summary}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 14,
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ margin: "0 0 6px 0" }}>{t.title}</h3>
            <div style={{ fontSize: 13, opacity: 0.8 }}>{t.summary}</div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
              <strong>{t.category}</strong> • {t.status.toUpperCase()}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <Link to={`/tools/${t.slug}`}>Open</Link>
              <Link to="/chatbot">Open ChatBot</Link>
              {t.stripeUrl ? (
                <a href={t.stripeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => localStorage.setItem("ff_last_tool_slug", t.slug)}
                >
                Buy
                </a>

              ) : (
                <span style={{ opacity: 0.5 }}>Buy (pending)</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
