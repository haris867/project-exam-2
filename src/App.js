import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Layout from "./components/layout";
import { About, Home, Venues } from "./pages";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
