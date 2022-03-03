type props = {
  colour: string;
};

function ColourField({ colour }: props): JSX.Element {
  return (
    <div
      className="flex items-center justify-center h-full text-slate-900"
      style={{ backgroundColor: colour }}
    >
      {colour}
    </div>
  );
}

export default ColourField;
