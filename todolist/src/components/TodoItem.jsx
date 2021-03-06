import React, { Fragment } from "react";

export function TodoItem({ todo }) {
    const {id, task} = todo
  return (
    <Fragment>
      <li className="list-group-item">{task}</li>
    </Fragment>
  );
}
