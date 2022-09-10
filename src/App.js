import "./App.css";
import DetailMovie from "./Pages/DetailMovie";
import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
