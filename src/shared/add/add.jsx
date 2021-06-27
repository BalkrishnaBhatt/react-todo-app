import React from "react";
import "./add.scss";

const Add = ({ onAddItem }) => {
  return (
    <div className="add-btn">
      <button onClick={onAddItem}>ADD</button>
    </div>
  );
};

export default Add;
