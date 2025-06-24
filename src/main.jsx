import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App"; // Import App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App /> {/* Ensure App.jsx is used */}
    </Router>
  </StrictMode>
);
