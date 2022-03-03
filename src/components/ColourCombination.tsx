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
      <ul className="flex">
        {colours.map((col) => (
          <li className="flex-auto">
            <ColourField colour={col.toHexString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColourCombination;
