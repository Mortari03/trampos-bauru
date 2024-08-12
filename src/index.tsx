import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UsuarioProvider } from "./contexts/UsuarioContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsuarioProvider>
  </React.StrictMode>
);
