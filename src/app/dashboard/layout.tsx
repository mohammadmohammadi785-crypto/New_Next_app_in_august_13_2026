import Counter from "@/components/Counter";
import React from "react";

function DashboardLayout({
  children,
  album,
  post,
  product,
}: {
  children: React.ReactNode;
  album: React.ReactNode;
  post: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <div>
      <Counter />
      <div>
        {children}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 gap-3">
          <div>{album}</div>
          <div>{post}</div>
          <div>{product}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
