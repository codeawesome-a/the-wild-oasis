import React from "react";
import clsx from "clsx";

function Row({ type = "vertical", children, className = "" }) {
  const baseClasses = "flex";
  const typeClasses =
    type === "horizontal"
      ? "justify-between items-center"
      : "flex-col gap-6";

  return (
    <div className={clsx(baseClasses, typeClasses, className)}>
      {children}
    </div>
  );
}

export default Row;
