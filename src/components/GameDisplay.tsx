import React from "react";

function GameDisplay() {
  return (
    <div>
      <div className="bg-gray-500 text-xl p-40 mb-4">Play here, skank!</div>
      <button type="button" className="btn btn-success">
        Start Game
      </button>
      <button type="button" className="btn btn-warning">
        Select Deck
      </button>
    </div>
  );
}

export default GameDisplay;
