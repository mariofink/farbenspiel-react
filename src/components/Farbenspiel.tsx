import { useState } from "react";
import { ColourCombinations } from "../types";
import ColourField from "./ColourField";
import ColourCombination from "./ColourCombination";

function Farbenspiel() {
  const [baseColour, setBaseColour] = useState("#c0ffee");
  const combinations: ColourCombinations[] = [
    "analogous",
    "monochromatic",
    "tetrad",
    "splitcomplement",
    "triad",
  ];
  return (
    <main>
      <h1>Farbenspiel</h1>
      <input
        type="color"
        value={baseColour}
        onChange={(e) => setBaseColour(e.target.value)}
      />
      <ColourField colour={baseColour} />
      <ul>
        {combinations.map((combination) => (
          <ColourCombination combination={combination as ColourCombinations} />
        ))}
      </ul>
    </main>
  );
}

export default Farbenspiel;
