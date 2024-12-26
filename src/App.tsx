import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import Navbar from "../src/components/Navbar";
import GameBoard from "../src/routes/GameBoard";
import DeckBuilder from "../src/routes/DeckBuilder";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/GameBoard" element={<GameBoard />} />
        <Route path="/DeckBuilder" element={<DeckBuilder />} />
      </Routes>
    </>
  );
}

export default App;
