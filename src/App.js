import React from "react";
import "./styles/scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { About, Home, Venues, Login } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
