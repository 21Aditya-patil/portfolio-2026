import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Admin() {
  const [tab, setTab] = useState("projects");

  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [tech, setTech] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const [postTitle, setPostTitle] = useState("");
  const [source, setSource] = useState("");
  const [score, setScore] = useState("");
  const [quote, setQuote] = useState("");
  const [review, setReview] = useState("");
  const [url, setUrl] = useState("");
  const [featured, setFeatured] = useState(false);

  const [postImage, setPostImage] = useState("");
  const [postFile, setPostFile] = useState(null);

  useEffect(() => {
    checkUser();
    getProjects();
    getPosts();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
    }
  }

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

  async function uploadImage() {
    if (!file) return null;

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("portfolio-images")
      .upload(fileName, file);

    if (error) {
      console.log(error);
      return null;
    }

    const { data } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function uploadFeedImage() {
    if (!postFile) return null;

    const fileName = `${Date.now()}-${postFile.name}`;

    const { error } = await supabase.storage
      .from("portfolio-images")
      .upload(fileName, postFile);

    if (error) {
      console.log(error);
      return null;
    }

    const { data } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function addProject() {
    let imageUrl = image;

    if (file) {
      imageUrl = await uploadImage();
    }

    const { error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          description,
          github,
          live,
          tech,
          image: imageUrl,
        },
      ]);

    if (error) {
      console.log(error);
    } else {
      alert("Project Added");

      setTitle("");
      setDescription("");
      setGithub("");
      setLive("");
      setTech("");
      setImage("");
      setFile(null);

      getProjects();
    }
  }

  async function addPost() {
    let imageUrl = postImage;

    if (postFile) {
      imageUrl = await uploadFeedImage();
    }

    const { error } = await supabase
      .from("tech_picks")
      .insert([
        {
          title: postTitle,
          source,
          score,
          quote,
          review,
          url,
          featured,
          image: imageUrl,
        },
      ]);

    if (error) {
      console.log(error);
    } else {
      alert("Feed Post Added");

      setPostTitle("");
      setSource("");
      setScore("");
      setQuote("");
      setReview("");
      setUrl("");
      setFeatured(false);
      setPostImage("");
      setPostFile(null);

      getPosts();
    }
  }

  async function deleteProject(id, imageUrl) {
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    if (imageUrl) {
      const imageName = imageUrl.split("/").pop();

      await supabase.storage
        .from("portfolio-images")
        .remove([imageName]);
    }

    getProjects();
  }

  async function deletePost(id, imageUrl) {
    const { error } = await supabase
      .from("tech_picks")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    if (imageUrl) {
      const imageName = imageUrl.split("/").pop();

      await supabase.storage
        .from("portfolio-images")
        .remove([imageName]);
    }

    getPosts();
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-3">
              // Portfolio CMS
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Admin Dashboard
            </h1>

          </div>

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = "/login";
            }}
            className="
              border border-red-400/20
              bg-red-400/10
              hover:bg-red-400/20
              transition-all
              px-5 py-3
              rounded-2xl
              text-red-300
              text-sm
              w-full sm:w-auto
            "
          >
            Logout
          </button>

        </div>

        <div className="flex flex-wrap gap-3 mb-8">

          <button
            onClick={() => setTab("projects")}
            className={`
              px-4 sm:px-6 py-3 rounded-2xl transition-all text-sm sm:text-base
              ${
                tab === "projects"
                  ? "bg-cyan-400 text-black"
                  : "bg-zinc-900 border border-zinc-800 text-white"
              }
            `}
          >
            Projects
          </button>

          <button
            onClick={() => setTab("feed")}
            className={`
              px-4 sm:px-6 py-3 rounded-2xl transition-all text-sm sm:text-base
              ${
                tab === "feed"
                  ? "bg-cyan-400 text-black"
                  : "bg-zinc-900 border border-zinc-800 text-white"
              }
            `}
          >
            Feed Posts
          </button>

        </div>

        {tab === "projects" && (

          <div className="grid xl:grid-cols-[420px_1fr] gap-8">

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-5 sm:p-7 h-fit">

              <h2 className="text-xl sm:text-2xl font-bold mb-7">
                Add Project
              </h2>

              <div className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <textarea
                  placeholder="Project Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none h-40"
                />

                <input
                  type="text"
                  placeholder="GitHub Link"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Live Link"
                  value={live}
                  onChange={(e) => setLive(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Tech Stack"
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl"
                />

                <button
                  onClick={addProject}
                  className="
                    bg-cyan-400
                    hover:bg-cyan-300
                    transition-all
                    text-black
                    font-bold
                    py-4
                    rounded-2xl
                  "
                >
                  Add Project
                </button>

              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {projects.map((project) => (

                <div
                  key={project.id}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] overflow-hidden"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold">
                      {project.title}
                    </h2>

                    <p className="text-white/50 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mt-6">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
                      >
                        Live
                      </a>

                    </div>

                    <button
                      onClick={() =>
                        deleteProject(project.id, project.image)
                      }
                      className="
                        mt-6
                        w-full
                        py-3
                        rounded-2xl
                        bg-red-400/10
                        border border-red-400/20
                        text-red-300
                      "
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

        {tab === "feed" && (

          <div className="grid xl:grid-cols-[420px_1fr] gap-8">

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-5 sm:p-7 h-fit">

              <h2 className="text-xl sm:text-2xl font-bold mb-7">
                Add Feed Post
              </h2>

              <div className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="number"
                  step="0.1"
                  placeholder="Score"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <textarea
                  placeholder="Short Quote"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none h-28"
                />

                <textarea
                  placeholder="Full Review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none h-40"
                />

                <input
                  type="text"
                  placeholder="Article URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  value={postImage}
                  onChange={(e) => setPostImage(e.target.value)}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl outline-none"
                />

                <input
                  type="file"
                  onChange={(e) => setPostFile(e.target.files[0])}
                  className="bg-black border border-zinc-800 p-4 rounded-2xl"
                />

                <label className="flex items-center gap-3 text-white/70">

                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) =>
                      setFeatured(e.target.checked)
                    }
                  />

                  Featured Post

                </label>

                <button
                  onClick={addPost}
                  className="
                    bg-cyan-400
                    hover:bg-cyan-300
                    transition-all
                    text-black
                    font-bold
                    py-4
                    rounded-2xl
                  "
                >
                  Add Feed Post
                </button>

              </div>

            </div>

            <div className="flex flex-col gap-5">

              {posts.map((post) => (

                <div
                  key={post.id}
                  className="
                    bg-zinc-900/50
                    border border-zinc-800
                    rounded-[2rem]
                    p-5 sm:p-6
                    flex flex-col lg:flex-row gap-6
                  "
                >

                  <div
                    className="
                      w-full lg:w-[220px]
                      h-[160px]
                      rounded-2xl
                      overflow-hidden
                      border border-zinc-800
                      shrink-0
                    "
                  >

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <div className="flex-1">

                    {post.featured && (

                      <span className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-orange-300
                        bg-orange-400/10
                        border border-orange-400/20
                        px-3 py-1
                        rounded-full
                      ">
                        Picked By Me
                      </span>

                    )}

                    <h2 className="text-2xl font-bold mt-4">
                      {post.title}
                    </h2>

                    <p className="text-white/40 mt-2 uppercase text-xs tracking-[0.2em]">
                      {post.source}
                    </p>

                    <p className="text-white/60 italic mt-5 leading-relaxed">
                      "{post.quote}"
                    </p>

                    <div className="flex items-center justify-between mt-6">

                      <div
                        className={`
                          text-5xl font-black
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

                      <button
                        onClick={() =>
                          deletePost(post.id, post.image)
                        }
                        className="
                          px-5 py-3
                          rounded-2xl
                          bg-red-400/10
                          border border-red-400/20
                          text-red-300
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Admin;