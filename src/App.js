import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import { createContext, useState } from "react";

export const TodosContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":todoId" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TodosContext.Provider>
  );
}

export default App;
