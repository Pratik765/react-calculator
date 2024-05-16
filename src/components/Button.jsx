import styles from "./Button.module.css";
const Button = ({ onButtonClick }) => {
  const buttonValue = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "C",
  ];

  return (
    <>
      {buttonValue.map((buttonValue, key) => (
        <button
          key={key}
          className={styles.button}
          onClick={() => onButtonClick(buttonValue)}
        >
          <span className={styles.value}>{buttonValue}</span>
        </button>
      ))}
    </>
  );
};
export default Button;
