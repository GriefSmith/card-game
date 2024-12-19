import GetRandomFromDeck from "./CardDraw";
//needed for the Draw button
import { cardCode } from "./MainDeck";
//also needed for Draw

const handleDraw = () => {
  GetRandomFromDeck();
  alert(cardCode);
  //cardCode appears as [object, object] array
  //this event should handle a random draw of one of those objects
};

function GameDisplay() {
  return (
    <div>
      <div className="bg-gray-800 text-black p-4 mb-4">Play here, skank!</div>
      <button type="button" className="btn btn-success">
        Start Game
      </button>
      <button type="button" className="btn btn-warning">
        Select Deck
      </button>
      <button type="button" className="btn btn-dark" onClick={handleDraw}>
        Draw Card
      </button>
    </div>
  );
}

export default GameDisplay;
