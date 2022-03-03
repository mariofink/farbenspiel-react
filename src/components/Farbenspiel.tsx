import { useState } from "react";
import randomColor from "randomcolor";
import { ColourCombinations } from "../types";
import ColourField from "./ColourField";
import ColourCombination from "./ColourCombination";

function Farbenspiel() {
  const [baseColour, setBaseColour] = useState(randomColor());
  const combinations: ColourCombinations[] = [
    "analogous",
    "monochromatic",
    "tetrad",
    "splitcomplement",
    "triad",
  ];
  return (
    <>
      <h1 className="text-3xl p-4">Farbenspiel</h1>
      <input
        className="mb-6"
        type="color"
        value={baseColour}
        onChange={(e) => setBaseColour(e.target.value)}
      />
      <ul className="h-full bg-red-900">
        {combinations.map((combination) => (
          <li className="h-1/5">
            <ColourCombination
              baseColour={baseColour}
              combination={combination as ColourCombinations}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Farbenspiel;
