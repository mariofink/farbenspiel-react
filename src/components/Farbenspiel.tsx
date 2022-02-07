import { useState } from "react";
import Farbfeld from "./Farbfeld";

function Farbenspiel() {
  const [baseColour, setBaseColour] = useState("#c0ffee");
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
        <li>Combinations go here</li>
      </ul>
    </main>
  );
}

export default Farbenspiel;
