function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full h-32 px-3 py-2 border border-grey-300 rounded bg-grey-0 shadow-sm ${className}`}
      {...props}
    />
  );
}

export default Textarea;
