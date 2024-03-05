import axios from "axios";
import { Todo } from "../types/todo.type";

const BASE_URL = "http://localhost:3001/todos";

export const getTodos = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addTodo = async (todo: Todo) => {
  const response = await axios.post(BASE_URL, todo);
  return response.data;
};

export const updateTodo = async (updatedTodo: Partial<Todo>): Promise<Todo> => {
  const { id } = updatedTodo;
  const response = await axios.patch(`${BASE_URL}/${id}`, updatedTodo);
  return response.data;
};


export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
