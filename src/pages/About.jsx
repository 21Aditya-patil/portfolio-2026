import React, { useEffect } from "react";
import bg from "/SHOOTING.mp4";
import dp from "/myphoto.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import Footer from "../components/Footer";

function About() {
  const skills = [
    "Javascript",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
  ];

  const frontend = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/aditya-patil-dev",
      aria: "LinkedIn Profile",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/21Aditya-patil",
      aria: "GitHub Profile",
    },
    {
      name: "Email",
      icon: <IoMdMail />,
      link: "mailto:adhikpatil2005@gmail.com",
      aria: "Send Email",
    },
    {
      name: "@_addipatil_",
      icon: <FaXTwitter />,
      link: "https://x.com/_addipatil_",
      aria: "Twitter Profile",
    },
  ];

  const backend = ["NodeJS", "ExpressJS", "RESTful APIs"];

  const dbtools = ["MongoDB", "PostgreSQL", "Postman", "Git", "Github"];

  useEffect(() => {
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bg} type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/70 z-[1]" />

      <div
        className="
        hidden xl:flex
        fixed top-1/2 -translate-y-1/2 left-6
        z-[999]
        flex-col gap-5 text-white
      "
      >
        {[
          { name: "Introduction", href: "#intro" },
          { name: "Education", href: "#education" },
          { name: "Technical Skills", href: "#techSkills" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-3 w-fit cursor-pointer"
          >
            <div
              className="
              w-8 h-[2px]
              bg-white
              transition-all duration-500
              group-hover:w-16
              group-hover:bg-cyan-300
            "
            />

            <span
              className="
              text-sm
              transition-all duration-300
              group-hover:text-cyan-300
              group-hover:translate-x-2
            "
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>

      <div
        className="
        relative z-10
        w-full
        flex flex-col xl:flex-row
        gap-16 xl:gap-20
        pt-24 sm:pt-28
        px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32
        pb-20
      "
      >
        <div
          className="
          w-full xl:w-[35%]
          flex flex-col
          items-center
          gap-8
        "
        >
          <div
            className="
            relative
            w-52 h-52
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            rounded-full
            overflow-hidden
            border-4 border-cyan-300
            shadow-[0_0_80px_rgba(34,211,238,0.2)]
          "
          >
            <img src={dp} alt="DP" className="object-cover w-full h-full" />
          </div>

          <div
            className="
            flex items-center gap-2
            text-sm sm:text-base
            text-white/70
          "
          >
            <AiOutlineGlobal />
            Asia/India
          </div>

          <div
            className="
            flex flex-wrap
            items-center justify-center
            gap-2
            max-w-xl
          "
          >
            {skills.map((item) => (
              <span
                className="
                  px-3 py-1.5
                  text-xs sm:text-sm
                  cursor-pointer
                  hover:bg-white/20
                  bg-white/10
                  rounded-full
                  border border-white/10
                  transition-all duration-300
                "
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <div
            className="
            flex flex-wrap
            justify-center
            gap-3
            max-w-xl
          "
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className="
                  bg-white/10
                  hover:bg-white/20
                  border border-white/10
                  transition-all duration-300
                  px-4 py-2
                  rounded-2xl
                  flex items-center gap-2
                  backdrop-blur-md
                  text-sm
                "
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div
          className="
          w-full xl:w-[65%]
          flex flex-col gap-16
        "
        >
          <div id="intro" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1
                className="
                text-4xl sm:text-5xl lg:text-6xl
                font-black
                tracking-tight
                leading-none
              "
              >
                Aditya Patil
              </h1>

              <h2
                className="
                text-xl sm:text-2xl lg:text-3xl
                text-cyan-300
                font-medium
              "
              >
                Full-Stack Developer
              </h2>
            </div>

            <div
              className="
              flex flex-col gap-5
              text-sm sm:text-base
              lg:text-lg
              text-white/75
              leading-relaxed
            "
            >
              <p>
                Final-year BSc IT student passionate about building modern,
                scalable, and user-focused web applications. Experienced in
                developing and deploying full-stack MERN projects with clean UI,
                secure authentication, and efficient backend architecture.
              </p>

              <p>
                Built and shipped multiple production-ready applications,
                including LoopIn — a real-time college networking platform
                featuring JWT authentication, role-based access control (RBAC),
                and real-time communication features.
              </p>

              <p>
                Skilled in React.js, Node.js, Express.js, MongoDB, and
                PostgreSQL, with a strong focus on creating seamless digital
                experiences and solving real-world problems through technology.
              </p>
            </div>
          </div>

          <div id="education" className="flex flex-col gap-8">
            <h1
              className="
              text-3xl sm:text-4xl
              font-black
              tracking-tight
            "
            >
              Education
            </h1>

            <div
              className="
              flex flex-col gap-6
              text-sm sm:text-base
            "
            >
              <div className="flex flex-col gap-1">
                <p className="font-bold">
                  Bachelor of Science in Information Technology (BSc-IT)
                </p>

                <p className="text-white/60">
                  M.L. Dahanukar College of Commerce, Mumbai
                </p>

                <p className="text-white/60">
                  Expected Graduation: 2026 | Semester V SGPA: 7.8
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">Higher Secondary Certificate (HSC)</p>

                <p className="text-white/60">Bhavan's College, Mumbai</p>

                <p className="text-white/60">
                  Year of Passing: 2023 | Percentage: 78%
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">Secondary School Certificate (SSC)</p>

                <p className="text-white/60">
                  Vidya Vikas Mandal Vidyalay, Mumbai
                </p>

                <p className="text-white/60">
                  Year of Passing: 2021 | Percentage: 82%
                </p>
              </div>
            </div>
          </div>

          <div id="techSkills" className="flex flex-col gap-10">
            <h1
              className="
              text-3xl sm:text-4xl
              font-black
              tracking-tight
            "
            >
              Technical Skills & Tools
            </h1>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold text-lg sm:text-xl">
                    Frontend Development
                  </p>

                  <p
                    className="
                    mt-2
                    text-white/70
                    text-sm sm:text-base
                    leading-relaxed
                  "
                  >
                    Crafting responsive, modern, and interactive user
                    experiences with clean and scalable interfaces.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {frontend.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3 py-1.5
                        text-xs sm:text-sm
                        cursor-pointer
                        hover:bg-white/20
                        bg-white/10
                        rounded-full
                        border border-white/10
                        transition-all duration-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold text-lg sm:text-xl">
                    Backend Development
                  </p>

                  <p
                    className="
                    mt-2
                    text-white/70
                    text-sm sm:text-base
                    leading-relaxed
                  "
                  >
                    Building secure, scalable, and high-performance server-side
                    applications and APIs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {backend.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3 py-1.5
                        text-xs sm:text-sm
                        cursor-pointer
                        hover:bg-white/20
                        bg-white/10
                        rounded-full
                        border border-white/10
                        transition-all duration-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold text-lg sm:text-xl">
                    Database & Tools
                  </p>

                  <p
                    className="
                    mt-2
                    text-white/70
                    text-sm sm:text-base
                    leading-relaxed
                  "
                  >
                    Using modern development tools and workflows to build,
                    manage, and deploy efficient applications seamlessly.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {dbtools.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3 py-1.5
                        text-xs sm:text-sm
                        cursor-pointer
                        hover:bg-white/20
                        bg-white/10
                        rounded-full
                        border border-white/10
                        transition-all duration-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
