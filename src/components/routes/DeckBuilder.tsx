import { useState } from "react";
import { Formik, Form, Field } from "formik";

interface CardValues {
  name: string;
  hp: number;
  wp: number;
  dex: number;
  det: number;
  spd: number;
  evs: number;
}

function DeckBuilder() {
  const [isEditing, setIsEditing] = useState(false);
  const [cardData, setCardData] = useState<CardValues>(() => {
    const saved = localStorage.getItem("cardData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Cheems",
          hp: 0,
          wp: 0,
          dex: 0,
          det: 0,
          spd: 0,
          evs: 0,
        };
  });

  const handleSubmit = (values: CardValues) => {
    localStorage.setItem("cardData", JSON.stringify(values));
    setCardData(values);
    setIsEditing(false);
  };

  return (
    <>
      <h1>Build your deck!</h1>
      <div className="card w-50">
        <img
          src="./src/assets/cheems.jpg"
          className="card-img-top"
          alt="Card character"
        />
        <div className="card-body">
          <h5 className="card-title">♠13</h5>

          {isEditing ? (
            <Formik initialValues={cardData} onSubmit={handleSubmit}>
              <Form>
                <Field name="name" type="text" className="form-control mb-2" />
                {Object.entries(cardData).map(
                  ([key]) =>
                    key !== "name" && (
                      <div key={key} className="mb-2">
                        <label>{key.toUpperCase()}:</label>
                        <Field
                          name={key}
                          type="number"
                          className="form-control"
                        />
                      </div>
                    )
                )}
                <button type="submit" className="btn btn-primary me-2">
                  Save Card
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </Form>
            </Formik>
          ) : (
            <>
              <h5>{cardData.name}</h5>
              <p className="card-text">'A legendary beast'</p>
              <p>
                HP: {cardData.hp}, WP: {cardData.wp}, DEX: {cardData.dex}, DET:{" "}
                {cardData.det}, SPD: {cardData.spd}, EVS: {cardData.evs}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DeckBuilder;
