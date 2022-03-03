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
    <ul className="flex h-full">
      {colours.map((col) => (
        <li className="flex-auto">
          <ColourField colour={col.toHexString()} />
        </li>
      ))}
    </ul>
  );
}

export default ColourCombination;
