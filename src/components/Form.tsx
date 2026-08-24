import React, { useState } from "react";

export default function SearchForm() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        className="py-2 px-6 border rounded-md m-0.5"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}
