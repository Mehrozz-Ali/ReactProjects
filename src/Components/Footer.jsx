import React from "react";
import styles from "./Footer.module.css"

export default function footer({ completedTodos,totalTodos }) {
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos:{completedTodos}</span><br/>
            <span className={styles.item}>Total Todos :{totalTodos}</span>

        </div>
    )
}