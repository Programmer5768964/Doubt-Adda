import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import KnowUs from "./Components/KnowUs/KnowUs";
import AskDoubt from "./Components/AskDoubt/AskDoubt";
import Build from "./Components/BuildWebsite/BuildWebsite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<KnowUs />} />
        <Route path="/askyourdoubt" element={<AskDoubt />} />
        <Route path="/buildyourwebsite" element={<Build />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals