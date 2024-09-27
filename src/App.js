import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Documentation from "./components/Document/Document";
import Extra from "./components/Document/Extra";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Document" element={<Documentation />} />
          <Route path="/Extra" element={<Extra />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
