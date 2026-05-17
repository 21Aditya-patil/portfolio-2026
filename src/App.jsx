import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/admin-8472" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Feed />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;