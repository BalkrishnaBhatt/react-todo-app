import React from "react";
import Input from "../input/input";
import Add from "../../../shared/add/add";
import "./header.scss";

const Header = (props) => {
  const { newItem, onHandleInput, onAddItem } = props;
  return (
    <div className='listHeader'>
      <Input
        newItem={newItem}
        onHandleInput={onHandleInput}
        onAddItem={onAddItem}
      ></Input>
      <Add onAddItem={onAddItem}></Add>
    </div>
  );
};

export default Header;
