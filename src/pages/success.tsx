import { Link } from "react-router-dom";

const last = localStorage.getItem("ff_last_tool_slug");

return; 
(
  <div>
    <h1>Payment successful</h1>
    {last ? (
      <p>
        Next: <Link to={`/tools/${last}`}>Open your tool</Link>
      </p>
    ) : (
      <p><Link to="/tools">Back to Tools</Link></p>
    )}
  </div>
);
