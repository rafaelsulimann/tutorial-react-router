import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.scss";
import AppIndex from "./routes/AppIndex";
import Categorias from "./routes/Categorias";
import NotFound from "./routes/NotFound";
import Produtos from "./routes/Produtos";
import Produto from "./routes/Produtos/Produto";
import ProdutosIndex from "./routes/Produtos/ProdutosIndex";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AppIndex />} />
          <Route path="produtos" element={<Produtos />}>
            <Route index element={<ProdutosIndex />} />
            <Route path=":productId" element={<Produto />} />
          </Route>
          <Route path="categorias" element={<Categorias />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
