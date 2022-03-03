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
    <main className="text-center h-screen bg-white dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl p-4">Farbenspiel</h1>
      <input
        className="mb-6"
        type="color"
        value={baseColour}
        onChange={(e) => setBaseColour(e.target.value)}
      />
      <ColourField colour={baseColour} />
      <ul>
        {combinations.map((combination) => (
          <li>
            <ColourCombination
              baseColour={baseColour}
              combination={combination as ColourCombinations}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Farbenspiel;
