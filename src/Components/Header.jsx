import React from "react";
import styles from './Header.module.css'
function Header() {
    return (
        <div>
            <p className={styles.header}>My todo list </p>
        </div>
    )
}

export default Header