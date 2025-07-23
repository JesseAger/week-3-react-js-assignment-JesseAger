export default function Footer() {
  return (
    <footer className="bg-blue-700 dark:bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} TaskMaster Inc.
    </footer>
  );
}
