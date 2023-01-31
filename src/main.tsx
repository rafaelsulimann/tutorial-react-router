import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.scss";
import Categorias from "./routes/Categorias";
import Produtos from "./routes/Produtos";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="categorias" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
