import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-500 underline">Go Home</Link>
    </div>
  );
}
