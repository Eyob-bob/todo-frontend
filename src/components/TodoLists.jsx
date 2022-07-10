import React from "react";
import Todo from "./Todo";

const TodoLists = ({ todos, setTodos }) => {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col gap-2 w-[50%]">
        {todos.map((todo) => {
          return <Todo key={todo._id} todo={todo} setTodos={setTodos} />;
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
