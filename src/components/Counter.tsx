import React from "react";

export default function Counter({ setValue }: { setValue: any }) {
  return (
    <div>
      <button
        className="p-4 border rounded-md"
        onClick={() => setValue((prev: number) => prev + 1)}
      >
        +1
      </button>
    </div>
  );
}
