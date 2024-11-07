import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import data from "./assets/data.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      {data.length ? (
        <App data={data} />
      ) : (
        <p style={{ textAlign: "center" }}>No Data found</p>
      )}
    </div>
  </StrictMode>
);
