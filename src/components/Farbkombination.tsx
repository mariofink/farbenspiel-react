import { ColourCombinations } from "../types";

type props = {
  combination: ColourCombinations;
};

function Farbkombination({ combination }: props) {
  return <div>{combination}</div>;
}

export default Farbkombination;
