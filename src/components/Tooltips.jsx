import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Tooltips = ({ position, content, children }) => {
  return (
    <div id="tooltip" className="relative cursor-pointer group place-items-center">
      <div className="mx-0 my-0">{children}</div>
      <span
        className={cx(
          "absolute hidden group-hover:inline-block bg-neutral-600 text-white text-xs p-2 whitespace-nowrap rounded-md",
          position === "top" ? "left-1/2 -translate-x-1/2 bottom-full" : ""
        )}
      >
        {content}

{/* small squre icon */}
        <span
          className={cx(
            "absolute  border-t-2 border-r-2 border-transparent bg-neutral-600 w-3 h-3 transform rotate-45 bottom-full",
            position === "top"
              ? "top-3/4 left-1/2 -translate-x-1/2 bottom-full"
              : ""
          )}
        ></span>
      </span>
    </div>
  );
};

Tooltips.propTypes = {
  position: PropTypes.oneOf(["top"]),
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltips;