import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/main.css";

import Home from "@/app/pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
