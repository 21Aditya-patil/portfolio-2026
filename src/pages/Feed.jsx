import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    document.body.style.overflowX = "hidden";

    getPosts();

    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  async function getPosts() {
    const { data, error } = await supabase
      .from("tech_picks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setPosts(data);
    }
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 40%),
            #000000
          `,
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.12) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      <div className="fixed inset-0 bg-black/20 z-[1]" />

      <div
        className="
          relative z-10
          flex flex-col items-center
          pt-24 sm:pt-28 md:pt-32
          pb-20 sm:pb-24
          px-4 sm:px-6 lg:px-8
          text-white
        "
      >
        <div
          className="
            flex flex-col items-center
            gap-5 sm:gap-6
            text-center
            w-full
          "
        >
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em] sm:tracking-[0.4em]
              text-[10px] sm:text-xs
            "
          >
            // What I’m Exploring Right Now
          </p>

          <h1
            className="
              max-w-6xl
              text-3xl sm:text-5xl md:text-6xl lg:text-7xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            Obsessed with tech,
            <span className="block text-cyan-400">
              products, and digital experiences.
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-white/45
              px-2
            "
          >
            Fullstack developer researching products, interfaces, workflows, AI
            gadgets, and ideas worth building.
          </p>
        </div>

        <div
          className="
            w-full
            mt-12 sm:mt-16
            flex flex-col gap-4
            max-w-6xl
          "
        >
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="
                group
                relative
                overflow-hidden
                bg-zinc-900/60
                border border-zinc-800
                rounded-[1.5rem]
                p-4 sm:p-5
                cursor-pointer
                backdrop-blur-xl
                transition-all duration-500
                hover:border-cyan-400/20
                hover:-translate-y-1
              "
            >
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
              >
                <div
                  className="
                    absolute top-[-60px] left-1/2
                    -translate-x-1/2
                    w-72 h-72
                    bg-cyan-400/10
                    blur-3xl
                    rounded-full
                  "
                />
              </div>

              <div
                className="
                  relative z-10
                  flex flex-col lg:flex-row
                  gap-5
                "
              >
                <div
                  className="
                    w-full lg:w-[280px]
                    h-[200px]
                    rounded-[1.4rem]
                    overflow-hidden
                    border border-white/10
                    shrink-0
                    bg-zinc-900
                    flex items-center justify-center
                  "
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      w-full h-full
                      object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div
                  className="
                    flex-1
                    flex flex-col justify-between
                    gap-5
                  "
                >
                  <div className="flex flex-col gap-4">
                    {post.featured ? (
                      <span
                        className="
                          w-fit
                          rounded-full
                          border border-orange-400/15
                          bg-orange-400/10
                          px-3 py-1
                          text-[9px] sm:text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-orange-300
                        "
                      >
                        ⊹ picked by me
                      </span>
                    ) : (
                      <span
                        className="
                          w-fit
                          rounded-full
                          border border-cyan-400/15
                          bg-cyan-400/10
                          px-3 py-1
                          text-[9px] sm:text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-cyan-300
                        "
                      >
                        ✎ my post
                      </span>
                    )}

                    <h2
                      className="
                        text-xl sm:text-2xl md:text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                      "
                    >
                      {post.title}
                    </h2>

                    <div
                      className="
                        flex flex-wrap items-center
                        gap-3
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/35
                        font-mono
                      "
                    >
                      <span>{post.source}</span>

                      <span>•</span>

                      <span>{formatDate(post.created_at)}</span>
                    </div>

                    {post.quote && (
                      <div
                        className="
                          border-l border-zinc-700
                          pl-4
                        "
                      >
                        <p
                          className="
                            text-sm sm:text-base
                            italic
                            leading-relaxed
                            text-zinc-400
                          "
                        >
                          "{post.quote}"
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    className="
                      flex items-end justify-between
                      gap-4
                    "
                  >
                    <div className="flex flex-col gap-2">
                      <div
                        className={`
                          text-3xl sm:text-4xl
                          font-black
                          ${
                            post.score >= 8
                              ? "text-emerald-400"
                              : post.score <= 4
                                ? "text-red-400"
                                : "text-yellow-400"
                          }
                        `}
                      >
                        {post.score}
                      </div>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-white/20
                          font-mono
                        "
                      >
                        Published on {formatDate(post.created_at)}
                      </span>
                    </div>

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                        font-mono
                      "
                    >
                      click to explore
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/80
              backdrop-blur-md
              p-4
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[85vh]
                overflow-y-auto
                rounded-[2rem]
                border border-white/10
                bg-[#0c0c0c]
              "
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="
                  absolute top-5 right-5
                  z-20
                  text-3xl cursor-pointer
                  w-11 h-11
                  rounded-2xl
                  border border-white/10
                  bg-black/50
                  text-white/50
                  hover:text-white
                  transition
                "
              >
                ×
              </button>

              <div
                className="
                  w-full
                  h-[220px] sm:h-[260px] md:h-[320px]
                  overflow-hidden
                  rounded-t-[2rem]
                  border-b border-white/10
                  bg-black
                  flex items-center justify-center
                "
              >
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="
                    max-w-full
                    max-h-full
                    object-contain
                    rounded-2xl
                  "
                />
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                {selectedPost.featured && (
                  <div
                    className="
                      inline-flex
                      items-center gap-2
                      rounded-full
                      border border-orange-400/15
                      bg-orange-400/10
                      px-4 py-2
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-orange-300
                      mb-6
                    "
                  >
                    Picked By Me
                  </div>
                )}

                <div
                  className="
                    flex flex-col md:flex-row
                    gap-8
                  "
                >
                  <div className="shrink-0">
                    <div
                      className={`
                        text-5xl md:text-6xl
                        font-black
                        ${
                          selectedPost.score >= 8
                            ? "text-emerald-400"
                            : selectedPost.score <= 4
                              ? "text-red-400"
                              : "text-yellow-400"
                        }
                      `}
                    >
                      {selectedPost.score}
                    </div>

                    <p
                      className="
                        mt-3
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                        font-mono
                      "
                    >
                      {selectedPost.score?"MY SCORE":""}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h1
                      className="
                        text-3xl sm:text-5xl
                        font-black
                        leading-tight
                        tracking-tight
                      "
                    >
                      {selectedPost.title}
                    </h1>

                    <div
                      className="
                        flex flex-wrap items-center
                        gap-3
                        mt-5
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/35
                        font-mono
                      "
                    >
                      <span>{selectedPost.source}</span>

                      <span>•</span>

                      <span>
                        Published {formatDate(selectedPost.created_at)}
                      </span>
                    </div>

                    <div
                      className="
                        w-full h-px
                        bg-white/10
                        my-7
                      "
                    />

                    <div
                      className="
                        rounded-[1.7rem]
                        border border-orange-400/10
                        bg-orange-400/[0.03]
                        p-6
                      "
                    >
                      <p
                        className="
                          text-base sm:text-lg
                          italic
                          leading-relaxed
                          text-white/80
                        "
                      >
                        {selectedPost.review}
                      </p>
                    </div>

                    <a
                      href={selectedPost.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        mt-7
                        rounded-2xl
                        border border-cyan-400/15
                        bg-cyan-400/10
                        px-6 py-3.5
                        text-sm
                        text-cyan-300
                        hover:bg-cyan-400/20
                        transition-all
                      "
                    >
                      Original Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Feed;
