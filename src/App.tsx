import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("styles:", styles.count);

  return (
    <div>
      <h1>Hello World!</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </a>
      <p className={styles.title}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
