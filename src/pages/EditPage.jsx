import { useEffect, useState } from "react";
import instance from "../axiosConfig";
import { useParams, useNavigate, Navigate } from "react-router-dom";

const EditPage = () => {
  const [todo, setTodo] = useState("");
  const todoId = useParams().todoId;
  const navigate = useNavigate();

  const fetchTodo = async () => {
    try {
      setTodo((await instance.get(todoId)).data.title);
    } catch (err) {
      navigate("/jsljfsd/sldjflksj");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] grid place-content-center">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if(!todo.trim()) return;
            await instance.patch(todoId, { title: todo });
            navigate("/");
          }}
          className="my-4 flex gap-4"
        >
          <input
            className="border-2 py-1 px-2 rounded-sm outline-green-500"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className=" border-2 rounded-md bg-green-700 text-white py-1 px-4">
            Edit
          </button>
        </form>
    </div>
  );
};

export default EditPage;
