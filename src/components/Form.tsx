import React, { useState } from "react";

export default function SearchForm() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        className="py-2 px-6 border rounded-tr-none rounded-br-none rounded-md my-0.5"
        value={value}
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="py-2 px-5 border hover:cursor-pointer border-l-0 rounded-tl-none rounded-bl-none rounded-md">
        Search
      </button>
    </div>
  );
}
