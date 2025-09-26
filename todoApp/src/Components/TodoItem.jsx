import React from "react";
import styles from "./Todoitem.module.css"
export default function wTodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo !== item)
        )
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>todo.name===name? {...todo,done:!todo.done}:todo )
);        
    }
    const linesThrough = item.done ? styles.completed : " "
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={linesThrough} onClick={()=>handleClick(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteBtn}>x</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    )
}