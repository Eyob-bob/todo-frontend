import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../axiosConfig";

const Todo = ({ todo, setTodos }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className="shadow-sm flex justify-between items-center">
      <div className="flex gap-1">
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={async (e) => {
            await instance.patch(todo._id, {
              isChecked: !todo.isChecked,
            });
            setTodos((await instance.get("/")).data);
          }}
        />
        <p className="text-white">{todo.title}</p>
      </div>
      <div className="flex gap-3">
        <Link to={`${todo._id}`} className="btn bg-green-700">
          edit
        </Link>
        <button
          onClick={async () => {
            await instance.delete(todo._id);
            setTodos((await instance.get("/")).data);
          }}
          className="btn bg-red-700"
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
