// import { Inter } from "next/font/google";
import "../globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const FontInter = Inter({
//   variable: "--font-Inter",
//   subsets: ["latin"],
// });

// ${geistSans.variable} ${geistMono.variable}${FontInter.variable}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="w-full mx-auto text-center py-4 text-2xl text-white bg-gray-800">
          <h1>header</h1>
        </header>
        {children}
        <footer className="w-full text-2xl text-white py-4 text-center bg-gray-900">
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
