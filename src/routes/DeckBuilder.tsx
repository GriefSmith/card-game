import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

interface Card {
  suit: string;
  code: string;
  name: string;
  description: string;
  image: string;
  hp: number;
  wp: number;
  spd: number;
  evs: number;
}

const suits = [
  { name: "Spades", symbol: "♠" },
  { name: "Clubs", symbol: "♣" },
  { name: "Hearts", symbol: "♡" },
  { name: "Diamonds", symbol: "♢" },
];

const ranks = Array.from({ length: 13 }, (_, i) => i + 1);

const DeckBuilder: React.FC = () => {
  const initialCards = (): Card[] => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      try {
        return JSON.parse(savedCards) as Card[];
      } catch (error) {
        console.error("Error loading cards from localStorage:", error);
        return [];
      }
    }
    return suits.flatMap(({ name, symbol }) =>
      ranks.map((rank) => ({
        suit: symbol,
        code: `${rank}${symbol}`,
        name: `${rank} of ${name}`,
        description: `This is the ${rank} of ${name}.`,
        image: "https://via.placeholder.com/100x150",
        hp: 0,
        wp: 0,
        spd: 0,
        evs: 0,
      }))
    );
  };

  const [cards, setCards] = useState<Card[]>(initialCards());
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedCard: Card) => {
    localStorage.setItem(
      `card_${updatedCard.code}`,
      JSON.stringify(updatedCard)
    );

    const updatedCards = cards.map((card) =>
      card.code === updatedCard.code ? updatedCard : card
    );
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    setSelectedCard(null);
  };

  // Create typed array of card rows
  const cardRows: Card[][] = [];
  for (let i = 0; i < cards.length; i += 13) {
    cardRows.push(cards.slice(i, i + 13));
  }

  return (
    <div>
      {selectedCard && !isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2>{selectedCard.name}</h2>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>
            <div className="flex mb-4">
              <img
                src={selectedCard.image}
                alt={selectedCard.name}
                className="w-24 h-36 mr-4"
              />
              <div className="flex-1">
                <div className="font-bold text-lg">{selectedCard.code}</div>
                <div className="text-sm">{selectedCard.name}</div>
                <p className="mt-2">{selectedCard.description}</p>
              </div>
              <div className="ml-4">
                <div className="text-sm">
                  <strong>HP:</strong> {selectedCard.hp}
                </div>
                <div className="text-sm">
                  <strong>WP:</strong> {selectedCard.wp}
                </div>
                <div className="text-sm">
                  <strong>SPD:</strong> {selectedCard.spd}
                </div>
                <div className="text-sm">
                  <strong>EVS:</strong> {selectedCard.evs}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedCard && isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2>Edit Card: {selectedCard.name}</h2>
            <Formik
              initialValues={selectedCard}
              onSubmit={(values) => handleSave(values)}
            >
              {() => (
                <Form>
                  <div className="mb-4">
                    <label>Card Image</label>
                    <Field
                      name="image"
                      type="text"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Card Code</label>
                    <Field
                      name="code"
                      type="text"
                      className="w-full bg-white p-2 border rounded"
                      disabled
                    />
                  </div>
                  <div className="mb-4">
                    <label>Name</label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Description</label>
                    <Field
                      name="description"
                      as="textarea"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>HP</label>
                    <Field
                      name="hp"
                      type="number"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>WP</label>
                    <Field
                      name="wp"
                      type="number"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>SPD</label>
                    <Field
                      name="spd"
                      type="number"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label>EVS</label>
                    <Field
                      name="evs"
                      type="number"
                      className="w-full bg-white p-2 border rounded"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="grid grid-cols-13 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-13 mb-4">
          {cards.map((card) => (
            <div
              key={card.code}
              className="border rounded p-2 shadow hover:bg-gray-200 cursor-pointer text-center w-28 h-40"
              onClick={() => setSelectedCard(card)}
            >
              <img src={card.image} alt={card.name} className="mb-2 mx-auto" />
              <div className="font-bold text-sm">{card.code}</div>
              <div className="text-sm">{card.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckBuilder;
