import React, { useState } from "react";
import styles from "./TodoForm.module.css";

type Props = {
  onAddTodo: (title: string) => Promise<void>;
};

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        Add <i className="bi bi-plus-circle"></i>
      </button>
    </form>
  );
};

export default TodoForm;
