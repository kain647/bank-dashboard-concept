import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./dark-ui";
import Faq from "./faq";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Dashboard />} />
      <Route path={"faq"} element={<Faq />} />
    </Routes>
  </BrowserRouter>
);
