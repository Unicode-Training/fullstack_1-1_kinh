import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
const mode = import.meta.env.MODE;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {mode === "development" ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <HashRouter>
        <App />
      </HashRouter>
    )}
  </StrictMode>,
);
