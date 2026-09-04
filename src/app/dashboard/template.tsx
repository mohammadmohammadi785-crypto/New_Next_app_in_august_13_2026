import Counter from "@/components/Counter";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Counter />
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
