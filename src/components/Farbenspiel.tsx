import { useState } from "react";
import randomColor from "randomcolor";
import { ColourCombinations } from "../types";
import ColourField from "./ColourField";
import ColourCombination from "./ColourCombination";
import styles from "./Farbenspiel.module.css";

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
    <main>
      <h1>Farbenspiel</h1>
      <input
        type="color"
        value={baseColour}
        onChange={(e) => setBaseColour(e.target.value)}
      />
      <ColourField colour={baseColour} />
      <ul className={styles.combinations}>
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
