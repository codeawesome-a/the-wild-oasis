import clsx from "clsx";

function Button({ 
  children, 
  size = "medium", 
  variation = "primary", 
  className = "", 
  ...props 
}) {
  const base =
    "inline-block rounded transition-colors duration-200 focus:outline-none";

  const sizes = {
    small: "text-xs px-2 py-1 font-semibold uppercase text-center",
    medium: "text-sm px-4 py-3 font-medium",
    large: "text-base px-6 py-3 font-medium",
  };

  const variations = {
    primary:
      "text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50",
    danger:
      "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={clsx(base, sizes[size], variations[variation], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
