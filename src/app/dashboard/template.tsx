import Counter from "@/components/Counter";
import React from "react";

function DashboardLayout({
  children,
  client,
  post,
  product,
}: {
  children: React.ReactNode;
  client: React.ReactNode;
  post: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <div>
      <Counter />
      <div>
        {children}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 gap-3">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
