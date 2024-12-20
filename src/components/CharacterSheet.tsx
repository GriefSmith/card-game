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
  const initialValues: CharacterValues = {
    name: "",
    hp: 0,
    wp: 0,
    dex: 0,
    det: 0,
    spd: 0,
    evs: 0,
  };

  const handleSubmit = (values: CharacterValues) => {
    // Handle character creation here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div className="bg-gray-800 text-black p-4 mb-4">
            <h2>Player's Character</h2>
            <div className="bg-gray-700 p-2 rounded-md">
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
                      className="ml-2 px-2 py-1 rounded"
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
