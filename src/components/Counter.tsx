import React from "react";

export default function Counter({
  setValue,
  lenght,
}: {
  setValue: any;
  lenght: number;
}) {
  return (
    <div>
      <button
        className="py-2 px-5 my-0.5 border rounded-md"
        onClick={() =>
          setValue((prev: number) => (prev < lenght ? prev + 1 : (prev = 1)))
        }
      >
        +1
      </button>
    </div>
  );
}
