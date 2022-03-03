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
    <>
      <h2 className="capitalize absolute w-full p-2 bg-slate-900/50">
        {combination}
      </h2>
      <ul className="flex h-full">
        {colours.map((col) => (
          <li className={`flex-auto w-1/${colours.length}`}>
            <ColourField colour={col.toHexString()} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ColourCombination;
