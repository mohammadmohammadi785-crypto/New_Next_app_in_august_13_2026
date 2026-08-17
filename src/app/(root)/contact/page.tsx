import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1 className="text-3xl">This is the Contact Page</h1>
    </div>
  );
}
