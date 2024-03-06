import React from "react";
import { Todo } from "../../types/todo.type";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

type Props = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
};

const TodoList: React.FC<Props> = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
