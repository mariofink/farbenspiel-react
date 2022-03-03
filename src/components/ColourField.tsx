type props = {
  colour: string;
};

function ColourField({ colour }: props): JSX.Element {
  return (
    <div className="p-8" style={{ backgroundColor: colour }}>
      {colour}
    </div>
  );
}

export default ColourField;
