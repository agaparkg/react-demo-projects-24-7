import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./projects/react-router-dom/react-router-dom-app-2/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
