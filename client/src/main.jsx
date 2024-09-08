import "./index.css";
import "./firebase/config";
import router from "./router";
import { StrictMode } from "react";
import { Container } from "@mui/material";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <RouterProvider router={router} />
    </Container>
  </StrictMode>
);
