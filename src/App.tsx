import { useState } from "react";
import styles from "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("styles:", styles);

  return (
    <div>
      <h1 className={styles.h1}>Hello World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
