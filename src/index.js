import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cards from "././components/Cards/Cards";
import Navbar from "././components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
      </Routes>
      <Footer />
    </Router>
  </>
);
