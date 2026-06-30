import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Footer from "../components/Footer";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setProjects(data);
    }
  }

  useEffect(() => {
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.12) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/10 z-[1]" />

      {/* Top Gradient */}
      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/70 to-transparent z-[2]" />

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6 text-white">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs">
            // Selected Work
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            My Work
          </h1>

          <p className="max-w-2xl text-center text-sm sm:text-base text-white/50 leading-relaxed">
            Building products focused on real-world usability, immersive user
            experience, and modern full-stack architecture.
          </p>
        </div>

        {/* Dynamic Projects */}
        <div className="w-full max-w-5xl flex flex-col gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-black/50"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute top-[-100px] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-5 left-5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
                  Live Project
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                {/* Category */}
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
                  // Fullstack Platform
                </p>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/50">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech?.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-[0.25em] text-white/40 transition hover:text-cyan-300"
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-[0.25em] text-white/40 transition hover:text-cyan-300"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
