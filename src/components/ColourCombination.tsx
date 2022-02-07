import { ColourCombinations } from "../types";

type props = {
  combination: ColourCombinations;
};

function ColourCombination({ combination }: props) {
  return <div>{combination}</div>;
}

export default ColourCombination;
