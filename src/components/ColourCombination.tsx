import tinycolor from "tinycolor2";
import { ColourCombinations } from "../types";
import ColourField from "./ColourField";

type props = {
  baseColour: string;
  combination: ColourCombinations;
};

function ColourCombination({ baseColour, combination }: props) {
  const colours: tinycolor.Instance[] = tinycolor(baseColour)[combination]();
  return (
    <div>
      <ul>
        {colours.map((col) => (
          <li>
            <ColourField colour={col.toHexString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColourCombination;
