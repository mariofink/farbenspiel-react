import styles from "./ColourField.module.css";

type props = {
  colour: string;
};

function ColourField({ colour }: props): JSX.Element {
  return (
    <div className={styles.field} style={{ backgroundColor: colour }}>
      {colour}
    </div>
  );
}

export default ColourField;
