import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1 className="text-2xl">This is the login page</h1>
    </div>
  );
}
