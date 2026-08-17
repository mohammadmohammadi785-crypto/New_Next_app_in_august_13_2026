import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div>
      <h1 className="text-2xl">This is the register page</h1>
    </div>
  );
}
