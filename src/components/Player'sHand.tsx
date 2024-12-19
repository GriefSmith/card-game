import getRandomFromDeck from "./CardDraw";

//playerHand should render all cards from Deck flagges as "obtained"
function PlayerHand() {
  return (
    <>
      <div>
        <div className="bg-gray-800 text-black p-4 mb-4">
          Your hand is empty, loser
        </div>
        <button type="button" className="btn btn-info">
          Summon Card
        </button>
        <button type="button" className="btn btn-danger">
          Withdraw Card
        </button>
      </div>
    </>
  );
}

//{ getRandomFromDeck }
// const drawCard = () =>
// {const newHand = [...playerHand, getRandomFromDeck()];
// setPlayerHand(newHand);};

export default PlayerHand;
