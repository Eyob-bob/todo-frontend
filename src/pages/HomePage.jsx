import { useEffect } from "react";
import Form from "../components/Form";
import instance from "../axiosConfig";
import TodoLists from "../components/TodoLists";
import { useContext } from "react";
import { TodosContext } from "../App";

function HomePage() {
  
  const {todos, setTodos} = useContext(TodosContext)

  const fetchTodos = async () => {
    const data = (await instance.get("/")).data;
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Form page="home" setTodos={setTodos} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default HomePage;
