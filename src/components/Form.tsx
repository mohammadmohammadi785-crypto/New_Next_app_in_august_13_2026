import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const router = useRouter();
  function handleClick() {
    const params = new URLSearchParams();
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`/product?${params.toString()}`);
  }

  return (
    <div>
      <input
        type="text"
        className="py-2 px-6 border rounded-tr-none rounded-br-none rounded-md my-0.5"
        value={value}
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="py-2 px-5 border hover:cursor-pointer border-l-0 rounded-tl-none rounded-bl-none rounded-md"
      >
        Search
      </button>
    </div>
  );
}
