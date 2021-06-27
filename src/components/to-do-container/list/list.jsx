import React from "react";
import Delete from "../../../shared/delete/delete";
import "./list.scss";

const List = (props) => {
  const { item, onDeleteItem, onUpdateItem } = props;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateItem(item.key, e.target.value)}
        ></input>
        <Delete onDeleteItem={() => onDeleteItem(item.key)}></Delete>
      </p>
    </div>
  );
};

export default List;
