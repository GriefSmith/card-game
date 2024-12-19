import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Navbar from "./components/Navbar";
import GameBoard from "./components/routes/GameBoard";
import DeckBuilder from "./components/routes/DeckBuilder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameBoard" element={<GameBoard />} />
        <Route path="/DeckBuilder" element={<DeckBuilder />} />
      </Routes>
    </>
  );
}

export default App;
