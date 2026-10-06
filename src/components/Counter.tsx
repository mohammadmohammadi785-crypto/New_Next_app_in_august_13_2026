"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Button variant="ghost" onClick={() => setValue((prev) => prev + 1)}>
        +1
      </Button>
    </div>
  );
}
