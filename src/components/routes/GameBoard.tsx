import CharacterSheet from "../CharacterSheet";
import GameDisplay from "../GameDisplay";
import PlayerHand from "../Player'sHand";
//should be displayed next to character sheet

function GameBoard() {
  return (
    <>
      <CharacterSheet></CharacterSheet>
      <GameDisplay></GameDisplay>
      <PlayerHand></PlayerHand>
    </>
  );
}

export default GameBoard;
