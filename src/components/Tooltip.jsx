import React from "react";

const Tooltip = ({ title, price, styles }) => {
  return (
    <div
      className={styles}
    >
      <div className="text-sm text-gray-400">{title}...</div>
      <div className="text-white text-sm">{price}</div>
    </div>
  );
};

export default Tooltip;
