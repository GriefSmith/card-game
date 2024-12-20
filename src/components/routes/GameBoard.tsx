import CharacterSheet from "../CharacterSheet";
import GameDisplay from "../GameDisplay";
//should be displayed next to character sheet

function GameBoard() {
  return (
    <>
      <CharacterSheet></CharacterSheet>
      <GameDisplay></GameDisplay>
    </>
  );
}

export default GameBoard;
