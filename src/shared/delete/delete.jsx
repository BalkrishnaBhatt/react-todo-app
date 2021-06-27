import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./delete.scss";

const Delete = ({ onDeleteItem }) => {
  return (
    <Fragment>
      <span>
        <FontAwesomeIcon
          className="faicons"
          icon="trash"
          onClick={onDeleteItem}
        ></FontAwesomeIcon>
      </span>
    </Fragment>
  );
};

export default Delete;
