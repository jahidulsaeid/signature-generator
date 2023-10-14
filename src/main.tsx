import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TypeSignature from "./pages/TypeSignature.tsx";
import DrawSignature from "./pages/DrawSignature.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/type" Component={TypeSignature} />
        <Route path="/draw" Component={DrawSignature} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
