import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const paramsInfo = (await params).slug;
  return (
    <div className="mt-19 h-screen">
      <h1>
        this is the route that can manage all the segements {paramsInfo[0]} and
        this is the second one {paramsInfo[1]}
      </h1>
    </div>
  );
}
