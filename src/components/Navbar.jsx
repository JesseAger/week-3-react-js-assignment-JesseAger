import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">TaskMaster</h1>
      <div className="flex items-center gap-4">
        <NavLink to="/" className="text-white hover:underline">Home</NavLink>
        <NavLink to="/tasks" className="text-white hover:underline">Tasks</NavLink>
        <NavLink to="/about" className="text-white hover:underline">About</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}
