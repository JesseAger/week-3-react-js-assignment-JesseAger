export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button
      className="bg-gray-200 dark:bg-gray-600 text-sm px-2 py-1 rounded"
      onClick={toggleTheme}
    >
      🌓
    </button>
  );
}
