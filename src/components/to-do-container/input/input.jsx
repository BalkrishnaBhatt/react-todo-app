import React from "react";
import "./input.scss";

const Input = (props) => {
  const { newItem, onHandleInput } = props;
  return (
    <div className="form">
      <header>
        <form id="todo-form">
          <input
            type="text"
            onChange={onHandleInput}
            placeholder="Type..."
            value={newItem.value}
          ></input>
        </form>
      </header>
    </div>
  );
};

export default Input;
