import Styles from "./Trip.module.css"

function TripData(props) {
    return (
        <div className={Styles.Tcard}>
            <div className={Styles.Timage}>
                <img src={props.image} alt="Image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>

        </div>
    )
}

export default TripData