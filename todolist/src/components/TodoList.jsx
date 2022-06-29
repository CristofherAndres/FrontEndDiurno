import React, { Fragment, useState, useRef } from "react";
import { TodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1" },
    { id: 2, task: "Tarea 2" },
    { id: 3, task: "Tarea 3" },
  ]);

  const taskRef = useRef();

  const agregarTarea = () => {
    console.log("Agregando tarea");
    const task = taskRef.current.value; /* Valor actual con el current */
    console.log(task);

    if (task === "") return;

    /* Metodo definido por react para operar los elementos */
    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
      };
      return [...prevTodos, newTask];
      /* Se toma el arreglo anterior y se añade un nuevo elemento */
    });

    taskRef.current.value = '';

  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>

      <div className="input-group mt-4 mb-4">
        <input
          ref={taskRef}
          placeholder="Ingrese una tarea"
          className="form-control"
          type="text"
        ></input>
        <button onClick={agregarTarea} className="btn btn-success ms-2">
          +
        </button>
      </div>

      <ul className="list-group">
        <li className="list-group-item">algo</li>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        ))}
      </ul>
    </Fragment>
  );
}
