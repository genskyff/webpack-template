import { useState } from "react";
import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
