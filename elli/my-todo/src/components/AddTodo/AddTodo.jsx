import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      // trim() : 앞뒤의 여백이 사라짐
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={text}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
