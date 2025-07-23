export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-3 py-1 rounded text-white text-sm";
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    danger: "bg-red-600 hover:bg-red-700",
    secondary: "bg-gray-500 hover:bg-gray-600"
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
