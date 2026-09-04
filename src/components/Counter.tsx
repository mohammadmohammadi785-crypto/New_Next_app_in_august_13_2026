import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button
        className="py-2 px-5 my-0.5 border rounded-md"
        onClick={() => setValue((prev) => prev + 1)}
      >
        +1
      </button>
    </div>
  );
}
