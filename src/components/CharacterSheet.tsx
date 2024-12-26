import React from "react";
import { Formik, Form, Field } from "formik";

interface CharacterValues {
  name: string;
  hp: number;
  wp: number;
  dex: number;
  det: number;
  spd: number;
  evs: number;
}

const CharacterSheet: React.FC = () => {
  const initialValues: CharacterValues = JSON.parse(
    localStorage.getItem("character") ||
      JSON.stringify({
        name: "",
        hp: 0,
        wp: 0,
        dex: 0,
        det: 0,
        spd: 0,
        evs: 0,
      })
  );

  const handleSubmit = (values: CharacterValues) => {
    localStorage.setItem("character", JSON.stringify(values));
    alert("Character saved to localStorage!");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div className="bg-sky-600 text-black p-4 mb-4">
            <h2>Player's Character</h2>
            <div className="bg-violet-400 p-2 rounded-md w-50">
              {Object.entries(initialValues).map(([key]) => (
                <div key={key} className="mb-4">
                  <div className="text-xl font-medium">
                    {key.toUpperCase()}:
                  </div>
                  <div className="text-xl">
                    {values[key as keyof CharacterValues]}
                    <Field
                      name={key}
                      type={key === "name" ? "text" : "number"}
                      className={`ml-2 px-2 py-1 rounded ${
                        values[key as keyof CharacterValues] === 0
                          ? "bg-yellow-200"
                          : key === "hp" && values.hp > 50
                          ? "bg-red-200"
                          : key === "wp" && values.wp > 100
                          ? "bg-red-200"
                          : (key === "det" ||
                              key === "dex" ||
                              key === "spd" ||
                              key === "evs") &&
                            values[key as keyof CharacterValues] > 4
                          ? "bg-red-200"
                          : "bg-teal-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-group" role="group">
            <button type="submit" className="btn btn-primary">
              Create Character
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CharacterSheet;
