import React, { Fragment } from "react";
import "./list-container.scss";
import List from "../list/list";

const ListContainer = (props) => {
  const { list, onUpdateItem, onDeleteItem } = props;
  const listItems = list.map((item) => {
    return (
      <List
        key={item.key}
        item={item}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
    );
  });
  return <Fragment>{listItems}</Fragment>;
};

export default ListContainer;
