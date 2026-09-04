import Counter from "@/components/Counter";
import React from "react";

function DashboardLayout({ childreen }: { childreen: React.ReactNode }) {
  return (
    <div>
      <Counter />
      <div>{childreen}</div>
    </div>
  );
}

export default DashboardLayout;
