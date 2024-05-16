import styles from "./App.module.css";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setValue("");
    } else if (buttonValue === "=") {
      let result = eval(value);
      setValue(result);
    } else {
      let newValue = value + buttonValue;
      setValue(newValue);
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.container}>
        <input type="text" readOnly value={value} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
