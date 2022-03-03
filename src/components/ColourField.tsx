type props = {
  colour: string;
};

function ColourField({ colour }: props): JSX.Element {
  return (
    <div
      className="flex items-center justify-center h-full text-slate-900"
      style={{ backgroundColor: colour }}
    >
      <span className="absolute">{colour}</span>
    </div>
  );
}

export default ColourField;
