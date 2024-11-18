import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./projects/todo-list/todo-list-useReducer-immer/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
