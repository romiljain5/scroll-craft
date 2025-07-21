export function Button({ children, size = "md", className = "", ...props }) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`bg-orange-700 text-white font-semibold rounded-xl hover:bg-orange-800 cursor-pointer transition ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
