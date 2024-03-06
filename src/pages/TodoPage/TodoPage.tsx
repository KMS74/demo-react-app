import { useEffect, useState } from "react";
import TodoForm from "../../Components/TodoForm/TodoForm";
import TodoList from "../../Components/TodoList/TodoList";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/TodoApi";
import { Todo } from "../../types/todo.type";
import styles from "./TodoPage.module.css";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    const newTodo = {
      id: new Date().toISOString(),
      title,
      completed: false,
    };
    await addTodo(newTodo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleUpdateTodo = async (updatedTodo: Todo) => {
    const updatedTodoIndex = todos.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    const updatedTodos = [...todos];
    updatedTodos[updatedTodoIndex] = updatedTodo;
    await updateTodo(updatedTodo);
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={styles.todoPage}>
      <h1>Taskly React App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      {loading && <p>Loading...</p>}
      {!loading && !todos.length && <p className="alert">No todos found</p>}
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoPage;
