import { useState } from "react";
import { supabase } from "../lib/supabase";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    } else {
      window.location.href = "/admin-8472";
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="flex flex-col gap-4 w-[400px]">

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-900 p-4 rounded-xl text-white"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-zinc-900 p-4 rounded-xl text-white"
        />

        <button
          onClick={signIn}
          className="bg-cyan-400 text-black py-4 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;