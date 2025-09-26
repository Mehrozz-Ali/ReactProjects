import React from "react";
import Styles from "./Trip.module.css"
import TripData from "./TripData";

function Trip() {
    return (
        <div className={Styles.trip}>
            <h1>Recent Trip</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className={Styles.tripcard}>
                <TripData
                    image="https://plus.unsplash.com/premium_photo-1687710306899-10a3bfcacf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
                    heading="Trip in China "
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam labore libero odit dolorum quod ducimus pariatur beatae! Iste, officiis nesciunt, assumenda debitis, fuga neque voluptatibus sapiente reiciendis repudiandae asperiores nulla!"
                /><TripData
                    image="https://plus.unsplash.com/premium_photo-1687710306899-10a3bfcacf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
                    heading="Trip in China "
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam labore libero odit dolorum quod ducimus pariatur beatae! Iste, officiis nesciunt, assumenda debitis, fuga neque voluptatibus sapiente reiciendis repudiandae asperiores nulla!"
                />
                <TripData
                    image="https://plus.unsplash.com/premium_photo-1687710306899-10a3bfcacf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
                    heading="Trip in China "
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam labore libero odit dolorum quod ducimus pariatur beatae! Iste, officiis nesciunt, assumenda debitis, fuga neque voluptatibus sapiente reiciendis repudiandae asperiores nulla!"
                />
            </div>
        </div>
    )
}

export default Trip