import { cardCode } from "./MainDeck";

function GetRandomFromDeck() {
  const mainDeck = [...cardCode];
  const randomIndex = Math.floor(Math.random() * mainDeck.length);
  const cardDraw = mainDeck[randomIndex];
  return cardDraw;
}
export default GetRandomFromDeck;
