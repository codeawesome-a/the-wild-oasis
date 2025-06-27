
function FileInput({ className = "", ...props }) {
  return (
    <input
      type="file"
      className={`file:mr-3
                  file:cursor-pointer
                  file:rounded-sm
                  file:border-0
                  file:bg-brand-600
                  file:px-3
                  file:py-2
                  file:font-medium
                  file:text-brand-50
                  file:transition-colors
                  file:hover:bg-brand-700
                  text-sm rounded-sm
                  ${className}`}
      {...props}
    />
  );
}

export default FileInput;
