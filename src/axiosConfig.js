import axios from "axios";

const instance = axios.create({
  baseURL: "https://eyob-todo-backend.herokuapp.com/api/v1",
});

export default instance
