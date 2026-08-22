"use client";

import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col w-fit gap-2.5 mx-4 text-center">
      <button
        className="border py-2 px-5 rounded-md"
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <h1 className="border py-2 px-5 rounded-md">{value}</h1>
      <button
        className="border py-2 px-5 rounded-md"
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>
    </div>
  );
}
