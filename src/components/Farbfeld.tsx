function Farbfeld(props: { colour: string }) {
  return <div style={{ backgroundColor: props.colour }}>{props.colour}</div>;
}

export default Farbfeld;
