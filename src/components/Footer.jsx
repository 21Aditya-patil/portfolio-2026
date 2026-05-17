import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative z-10
        w-full
        border-t border-white/10
        bg-black/40
        backdrop-blur-xl
        mt-20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5 sm:px-8 lg:px-12
          py-10 sm:py-12
          flex flex-col lg:flex-row
          items-center justify-between
          gap-8
        "
      >

        <div className="flex flex-col gap-3 text-center lg:text-left">

          <h1
            className="
              text-2xl sm:text-3xl
              font-black
              tracking-tight
            "
          >
            Aditya<span className="text-cyan-400">_lab</span>
          </h1>

          <p
            className="
              max-w-md
              text-sm sm:text-base
              leading-relaxed
              text-white/45
            "
          >
            Building immersive digital experiences, scalable full-stack
            products, and modern interfaces focused on usability,
            performance, and innovation.
          </p>

        </div>

        <div
          className="
            flex flex-col items-center lg:items-end
            gap-5
          "
        >

          <div
            className="
              flex items-center gap-4
            "
          >

            <a
              href="https://github.com/21Aditya-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:bg-cyan-400/10
                hover:border-cyan-400/20
                flex items-center justify-center
                text-lg
                text-white/60
                hover:text-cyan-300
                transition-all duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-patil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:bg-cyan-400/10
                hover:border-cyan-400/20
                flex items-center justify-center
                text-lg
                text-white/60
                hover:text-cyan-300
                transition-all duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/_addipatil_"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:bg-cyan-400/10
                hover:border-cyan-400/20
                flex items-center justify-center
                text-lg
                text-white/60
                hover:text-cyan-300
                transition-all duration-300
              "
            >
              <FaXTwitter />
            </a>

            <a
              href="mailto:adhikpatil2005@gmail.com"
              className="
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:bg-cyan-400/10
                hover:border-cyan-400/20
                flex items-center justify-center
                text-lg
                text-white/60
                hover:text-cyan-300
                transition-all duration-300
              "
            >
              <IoMdMail />
            </a>

          </div>

          <div
            className="
              flex flex-col sm:flex-row
              items-center gap-2 sm:gap-5
              text-[10px] sm:text-xs
              uppercase
              tracking-[0.25em]
              text-white/30
              text-center
            "
          >

            <span>
              © {year} Aditya Patil
            </span>

            <span className="hidden sm:block">
              •
            </span>

            <span>
              Built with React + Supabase
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;