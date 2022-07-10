import React, { useState } from "react";
import instance from "../axiosConfig";

const Form = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        await instance.post("/", {
          title: todo,
        });
        setTodos((await instance.get("/")).data);
        setTodo("");
      }}
      className=" my-4 flex gap-4 justify-center"
    >
      <input
        className="border-2 py-1 px-2 rounded-sm outline-green-500"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className=" border-2 rounded-md bg-green-700 text-white py-1 px-4">
        Add
      </button>
    </form>
  );
};

export default Form;
