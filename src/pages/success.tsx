import { Link } from "react-router-dom";

export default function Success() {
  const last = localStorage.getItem("ff_last_tool_slug");

  return (
    <div style={{ padding: 24 }}>
      <h1>Payment successful</h1>

      {last ? (
        <p>
          Next: <Link to={`/tools/${last}`}>Open your tool</Link>
        </p>
      ) : (
        <p>
          <Link to="/tools">Back to Tools</Link>
        </p>
      )}
    </div>
  );
}
