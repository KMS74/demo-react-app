import { useState } from "react";
const BasicCounter = () => {
  // state variable count is initialized to 0 and setCount is a function that updates the value of count
  const [count, setCount] = useState(0);
  const [counterBy, setCounterBy] = useState(1);

  // functions
  const increment = () => setCount((count) => (count += counterBy));
  const decrement = () => setCount((count) => (count -= counterBy));
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <input
        type="number"
        min={1}
        value={counterBy}
        onChange={(e) => setCounterBy(Number(e.target.value))}
      />
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default BasicCounter;
