import React, { useState } from "react";

function DeckBuilder() {
  const [CardName, setCardName] = useState("");
  const [CardHP, setCardHP] = useState(0);
  const [CardWP, setCardWP] = useState(0);
  const [CardDEX, setCardDEX] = useState(0);
  const [CardDET, setCardDET] = useState(0);
  const [CardSPD, setCardSPD] = useState(0);
  const [CardEVS, setCardEVS] = useState(0);

  const [newCardName, setNewCardName] = useState("newName");
  const [newCardHP, setNewCardHP] = useState("newHP");
  const [newCardWP, setNewCardWP] = useState("newWP");
  const [newCardDEX, setNewCardDEX] = useState("newDEX");
  const [newCardDET, setNewCardDET] = useState("newDET");
  const [newCardSPD, setNewCardSPD] = useState("newSPD");
  const [newCardEVS, setNewCardEVS] = useState("newEVS");

  const handleEdit = () => {
    setCardName(newCardName);
    setCardHP(newCardHP);
    setCardWP(newCardWP);
    setCardDEX(newCardDEX);
    setCardDET(newCardDET);
    setCardSPD(newCardSPD);
    setCardEVS(newCardEVS);
    alert("Card added to Deck!");
  };
  return (
    <>
      <h1>Build your deck, hoe!</h1>
      <div className="card w-50">
        <img
          src="./src/assets/cheems.jpg"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">♠13</h5>
          <h5 className="card-title">Cheems</h5>
          <p className="card-text">'A leyemdary beast'</p>
          <p>HP:, WP:, DEX:, DET:, SPD:, EVS:</p>
          <a href="#" className="btn btn-primary" onClick={handleEdit}>
            Edit
          </a>
        </div>
      </div>
    </>
  );
}

export default DeckBuilder;
