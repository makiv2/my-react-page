import { motion as m } from "framer-motion";
import Glasscard from "../components/glasscard";

function Projects() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 w-full h-85.7p bg-red-400 lg:px-32 px-16"
    >
      <main>
        <div className="mt-60 overflow-hidden absolute right-32">
          <m.h1
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{
              delay: 0.25,
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="text-6xl text-center lg:text-left lg:text-8xl py-4 font-rowdies"
          >
            Projects
          </m.h1>
          <div className="sidebarleft bg-orange-400"></div>
          <div className="sidebarright bg-orange-400"></div>
        </div>

        <section className="bg-slate-400 absolute left-10 w-2/3 toptenth bottom-10 justify-evenly items-center grid">
          <div className="bg-blue-50 boxSize"></div>
          <div className="bg-blue-50 boxSize"></div>
          <div className="bg-blue-50 boxSize"></div>
          <div className="bg-blue-50 boxSize"></div>
          <div className="bg-blue-50 boxSize"></div>
          <div className="bg-blue-50 boxSize"></div>
        </section>
      </main>
    </m.div>
  );
}

export default Projects;


