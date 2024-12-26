import React from "react";
import CharacterSheet from "../components/CharacterSheet";
import GameDisplay from "../components/GameDisplay";
//should be displayed next to character sheet

function GameBoard() {
  return (
    <>
      <div className="flex w-full">
        <CharacterSheet></CharacterSheet>
        <GameDisplay></GameDisplay>
      </div>
    </>
  );
}

export default GameBoard;
