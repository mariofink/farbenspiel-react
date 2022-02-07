import tinycolor from "tinycolor2";
import { ColourCombinations } from "../types";
import ColourField from "./ColourField";
import styles from "./ColourCombination.module.css";

type props = {
  baseColour: string;
  combination: ColourCombinations;
};

function ColourCombination({ baseColour, combination }: props) {
  const colours: tinycolor.Instance[] = tinycolor(baseColour)[combination]();
  return (
    <div>
      <ul className={styles.combination}>
        {colours.map((col) => (
          <li className={styles.field}>
            <ColourField colour={col.toHexString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColourCombination;
