import React from "react";
import Styles from "./Destination.module.css"


function DestinationData(props) {
    return (
        <>
            <div className={Styles[props.className]}>
                <div className={Styles.desText}>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className={Styles.image}>
                    <img src={props.img1} alt="Image" />
                    <img src={props.img2} alt="Image" />
                </div>
            </div>
        </>
    )
}

export default DestinationData