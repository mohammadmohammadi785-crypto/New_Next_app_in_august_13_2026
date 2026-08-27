// import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";
import { Metadata } from "next";
import Example from "./Example";
export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};
async function Home() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <section id="home" className="w-full h-screen">
      <h2 className="text-3xl">This is the Home Page</h2>
      <Example />
    </section>
  );
}

export default Home;
