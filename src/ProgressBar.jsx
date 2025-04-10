import React from "react";

const ProgressBar = ({ subtotal }) => {
  const threshold = 1000;
  const progress = Math.min((subtotal / threshold) * 100, 100);
  const remaining = Math.max(threshold - subtotal, 0);

  return (
    <div className="progress-box">
      <p className="progress-text">
        {subtotal >= threshold
          ? "🎉 You unlocked a FREE Wireless Mouse!"
          : `Add ₹${remaining} more to get a FREE Wireless Mouse!`}
      </p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
