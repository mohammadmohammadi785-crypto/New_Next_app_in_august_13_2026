import React from "react";
import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Product Page",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`h-full antialiased`}>
        <div className="min-h-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
