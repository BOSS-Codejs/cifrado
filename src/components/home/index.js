import React from "react";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import FomrEncrypt from "../content/Encrypt";
import Documentation from "../Document/Document";


const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FomrEncrypt />} />
        <Route path="/Document" element={<Documentation />} />
      </Routes>
    </>
  );
};

export default Home;
