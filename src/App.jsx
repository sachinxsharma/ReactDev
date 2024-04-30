import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= parseInt(inputValue); i++) { // Convert inputValue to a number
      count += i;
    }
    return count;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number" // Specify input type as number
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder={"find sum from 1 to n"}
      />
      <br />
      sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>counter {counter}
      </button>
    </div>
  );
}

export default App;
