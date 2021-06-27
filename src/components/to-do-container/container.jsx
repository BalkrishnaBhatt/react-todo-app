import React from "react";
import Header from "./header/header";
import ListContainer from "./list-container/list-container";
import "./container.scss";

const TodoContainer = (props) => {
  const {
    newItem,
    list,
    onHandleInput,
    onDeleteItem,
    onUpdateItem,
    onAddItem,
  } = props;
  return (
    <div className="containerr">
      <Header
        newItem={newItem}
        onHandleInput={onHandleInput}
        onAddItem={onAddItem}
      ></Header>
      <ListContainer
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
        list={list}
      ></ListContainer>
    </div>
  );
};

export default TodoContainer;
