import React from "react";

function DashboardLayout({ childreen }: { childreen: React.ReactNode }) {
  return (
    <div>
      <div>{childreen}</div>
    </div>
  );
}

export default DashboardLayout;
