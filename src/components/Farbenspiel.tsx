import { useState } from "react";
import { ColourCombinations } from "../types";
import Farbfeld from "./Farbfeld";
import Farbkombination from "./Farbkombination";

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
      <Farbfeld colour={baseColour} />
      <ul>
        {combinations.map((combination) => (
          <Farbkombination combination={combination as ColourCombinations} />
        ))}
      </ul>
    </main>
  );
}

export default Farbenspiel;
