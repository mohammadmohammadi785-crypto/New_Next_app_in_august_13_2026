import React from "react";
import "@/app/globals.css";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav className="w-full py-4 border-b bg-gray-800 text-white text-center text-3xl">
          Navbar
        </nav>
        <div>{children}</div>
        <footer className="w-full border-t py-4 bg-gray-800 text-white text-center text-3xl">
          footer
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
