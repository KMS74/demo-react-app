import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../types/todo.type";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onUpdate(updatedTodo);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedTitle(todo.title); // Reset edited title
  };

  const handleEditSave = () => {
    const updatedTodo = { ...todo, title: editedTitle };
    onUpdate(updatedTodo);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  return (
    <li className={styles.item}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            className={styles.editInput}
            ref={inputRef}
            onChange={handleChange}
          />
          <button onClick={handleEditSave} className={styles.saveBtn}>
            Save
          </button>
          <button onClick={handleEditCancel} className={styles.deleteBtn}>
            <i className="bi bi-x-lg"></i>
          </button>
        </>
      ) : (
        <>
          <div
            className={styles.todoTitleWrapper}
            onClick={handleToggleComplete}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className={styles.checkbox}
              onChange={handleToggleComplete}
            />
            <span
              className={`${styles.title} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              {todo.title}
            </span>
          </div>
          <div className={styles.actions}>
            <button onClick={handleEditClick} className={styles.editBtn}>
              <i className="bi bi-pen"></i>
            </button>
            <button onClick={handleDelete} className={styles.deleteBtn}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
