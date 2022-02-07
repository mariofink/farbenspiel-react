type props = {
  colour: string;
};

function Farbfeld({ colour }: props): JSX.Element {
  return <div style={{ backgroundColor: colour }}>{colour}</div>;
}

export default Farbfeld;
