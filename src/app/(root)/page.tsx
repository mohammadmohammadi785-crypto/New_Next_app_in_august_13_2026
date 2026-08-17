// import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";

async function Home() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <section id="home">
      <h2 className="text-3xl">This is the Home Page</h2>
    </section>
  );
}

export default Home;
