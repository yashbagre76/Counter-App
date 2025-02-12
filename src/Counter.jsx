import { useState } from "react";

function Counter() {
  // useState hook to manage a "count" state with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 ">
      {/* Display the current count */}
      <h1 className="text-2xl font-bold">Counter: {count}</h1>

      {/* Buttons to modify the count */}
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
