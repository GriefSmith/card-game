import React, { useState } from "react";
import { setItem } from "../utils/localStorage";

const CharacterSheet: React.FC = () => {
  const [Name, setName] = useState("");
  const [HP, setHP] = useState(0);
  const [WP, setWP] = useState(0);
  const [DEX, setDEX] = useState(0);
  const [DET, setDET] = useState(0);
  const [SPD, setSPD] = useState(0);
  const [EVS, setEVS] = useState(0);

  const [newName, setNewName] = useState("newName");
  const [newHP, setNewHP] = useState("newHP");
  const [newWP, setNewWP] = useState("newWP");
  const [newDEX, setNewDEX] = useState("newDEX");
  const [newDET, setNewDET] = useState("newDET");
  const [newSPD, setNewSPD] = useState("newSPD");
  const [newEVS, setNewEVS] = useState("newEVS");

  const handleCreate = () => {
    setName(newName);
    setHP(newHP);
    setWP(newWP);
    setDEX(newDEX);
    setDET(newDET);
    setSPD(newSPD);
    setEVS(newEVS);
    alert("Character created!!");
  };

  return (
    <div>
      <div className="bg-gray-800 text-black p-4 mb-4">
        Player's Character
        <div className="bg-gray-700 p-2 rounded-md">
          <div className="grid grid-cols-2 gap-18"></div>
          <div className="text-xl font-medium">NAME:</div>
          <div className="text-xl">
            {Name}{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="text-xl font-medium">HP:</div>
            <div className="text-xl">
              {HP}{" "}
              <input
                type="number"
                value={newHP}
                onChange={(e) => setNewHP(Number(e.target.value))}
              />
            </div>
            <div className="text-xl font-medium">WP:</div>
            <div className="text-xl">
              {WP}{" "}
              <input
                type="number"
                value={newWP}
                onChange={(e) => setNewWP(Number(e.target.value))}
              />
            </div>
            <div className="text-xl font-medium">DEX:</div>
            <div className="text-xl">
              {DEX}{" "}
              <input
                type="number"
                value={newDEX}
                onChange={(e) => setNewDEX(Number(e.target.value))}
              />
            </div>
            <div className="text-xl font-medium">DET:</div>
            <div className="text-xl">
              {DET}{" "}
              <input
                type="number"
                value={newDET}
                onChange={(e) => setNewDET(Number(e.target.value))}
              />
            </div>
            <div className="text-xl font-medium">SPD:</div>
            <div className="text-xl">
              {SPD}{" "}
              <input
                type="number"
                value={newSPD}
                onChange={(e) => setNewSPD(Number(e.target.value))}
              />
            </div>
            <div className="text-xl font-medium">EVS:</div>
            <div className="text-xl">
              {EVS}{" "}
              <input
                type="number"
                value={newEVS}
                onChange={(e) => setNewEVS(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreate}
        >
          Create Character
        </button>
      </div>
    </div>
  );
};
export default CharacterSheet;
