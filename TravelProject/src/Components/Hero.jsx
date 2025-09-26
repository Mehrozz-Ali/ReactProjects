import React from "react";
import Styles from "./Hero.module.css"

function Hero(props){
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="HeroImg" />

                <div className={Styles.heroText}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                </div>
            </div>
        </>
    )
}

export default Hero