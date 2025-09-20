import React, { useState } from "react";
import styles from "./Form.module.css";
import Todo from './Todo';

function Form({ todos, setTodos }) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name: "", done: false })

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }

    return (
        <div>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input className={styles.modernInput}
                    type="text"
                onChange={(e) => setTodo( {name:e.target.value, done:false})}
                    value={todo.name}
                    placeholder="Enter todo items"
                />
                <button className={styles.btn} type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form;
