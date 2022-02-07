type props = {
  colour: string;
};

function ColourField({ colour }: props): JSX.Element {
  return <div style={{ backgroundColor: colour }}>{colour}</div>;
}

export default ColourField;
