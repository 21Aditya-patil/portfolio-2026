import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { LuFolderCode } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";

function Navbar() {
  return (
    <div
      className="
        fixed
        bottom-4
    sm:bottom-auto
    sm:top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        sm:w-auto
        flex justify-center
        px-2
      "
    >
      <div
        className="
          absolute inset-0
          rounded-full
          bg-cyan-400/10
          blur-2xl
        "
      />

      <div
        className="
          relative
          w-full sm:w-auto
          flex items-center justify-between sm:justify-center
          gap-1 sm:gap-2
          rounded-full
          border border-white/10
          bg-black/40
          px-2 sm:px-3
          py-2
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
        "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
              group
              flex items-center justify-center
              gap-1.5 sm:gap-2
              rounded-full
              px-3 sm:px-5
              py-2.5
              text-[10px] sm:text-sm
              uppercase
              tracking-[0.18em] sm:tracking-[0.2em]
              transition-all duration-300
              flex-1 sm:flex-none
              ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }
            `
          }
        >
          <RiHome5Line
            className="
              text-base sm:text-lg
              transition-transform duration-300
              group-hover:scale-110
            "
          />

          <span className="hidden sm:block">Feed</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `
              group
              flex items-center justify-center
              gap-1.5 sm:gap-2
              rounded-full
              px-3 sm:px-5
              py-2.5
              text-[10px] sm:text-sm
              uppercase
              tracking-[0.18em] sm:tracking-[0.2em]
              transition-all duration-300
              flex-1 sm:flex-none
              ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }
            `
          }
        >
          <LuFolderCode
            className="
              text-base sm:text-lg
              transition-transform duration-300
              group-hover:scale-110
            "
          />

          <span className="hidden sm:block">Projects</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `
              group
              flex items-center justify-center
              gap-1.5 sm:gap-2
              rounded-full
              px-3 sm:px-5
              py-2.5
              text-[10px] sm:text-sm
              uppercase
              tracking-[0.18em] sm:tracking-[0.2em]
              transition-all duration-300
              flex-1 sm:flex-none
              ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }
            `
          }
        >
          <HiOutlineUser
            className="
              text-base sm:text-lg
              transition-transform duration-300
              group-hover:scale-110
            "
          />

          <span className="hidden sm:block">About</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
