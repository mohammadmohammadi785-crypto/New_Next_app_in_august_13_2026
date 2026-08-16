// import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="py-16 relative border-b border-b-normal sm:py-16 md:py-20"
    >
      <h2 className="text-3xl gradient-bg sm:text-4xl md:text-5xl font-bold mb-4 ">
        Welcome to My Portfolio
      </h2>

      <p className="text-base w-[70%] sm:text-lg md:text-xl mb-8  text-gray-600">
        Hi, I'm Mohammad Mohammadi, a passionate web developer specializing in
        modern web technologies like Java Script, Next.js, React.js, TypeScript,
        and Tailwindcss. I build responsive, user-friendly applications that
        make an impact.
      </p>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="#about"
          className="bg-normal rounded-sm text-white px-6 py-3 flex items-center justify-center  transition-colors duration-300"
        >
          <User className="mr-2 h-5 w-5" /> Learn More About Me
        </a>
        <a
          href="#projects"
          className="bg-normal text-white px-6 py-3 rounded-sm flex items-center justify-center transition-colors duration-300"
        >
          <Code className="mr-2 h-5 w-5" /> View My Projects
        </a>
      </div>
      <div className="mt-12">
        <h3 className="text-xl text-center text-normal sm:text-2xl font-semibold mb-4">
          My Expertise
        </h3>
        <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-normal mr-2" />
            <span>Frontend Development</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-normal mr-2" />
            <span>Full-Stack Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
