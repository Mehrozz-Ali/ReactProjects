import React, { useState } from "react"
import Styles from "./Navbar.module.css"
import { Component } from "react"
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

function Navbar() {
    // this is the lod version code of react 
    //  state={clicked:false}
    //  handleClick =()=>{
    //     this.setState({clicked: !this.state.clicked})
    //  }

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className={Styles.navbarItems}>
            <h1 className={Styles.navbarLogo}>Trippy</h1>
            <div className={Styles.menuIcon} onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={`${Styles.navMenu} ${clicked ? Styles.active: ""}`}>
                {MenuItem.map((item, index) => {
                    return (
                            <li key={index}>
                                <Link className={Styles[item.cName]} to={item.url}> <i className={item.icon}></i>{item.title}</Link>
                            </li>
                    )
                })}
                    <button>sign up</button>
            </ul>
        </nav>
    )
}
export default Navbar;