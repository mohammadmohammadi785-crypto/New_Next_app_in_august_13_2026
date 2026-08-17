import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div>
      <h1 className="text-3xl">This is the About Page</h1>
    </div>
  );
}
