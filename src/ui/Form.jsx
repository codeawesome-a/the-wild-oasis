import React from "react";
import clsx from "clsx";

function Form({ type, children, className = "", ...props }) {
  const baseClasses = "overflow-hidden text-sm"; // text-sm ≈ 1.4rem

  const nonModalClasses = "p-6 md:p-10 bg-grey-0 border border-grey-100 rounded-md";
  const modalClasses = "w-[80rem]"; // 800px

  return (
    <form
      className={clsx(
        baseClasses,
        type !== "modal" && nonModalClasses,
        type === "modal" && modalClasses,
        className
      )}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
