import React from "react";

import Styles from "./Contact.module.css"

function ContactForm() {
    return (
        <div className={Styles.formContainer}>
            <h1>Send a message to us!</h1>
            <form action="">
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Subject" type="text" />
                <textarea placeholder="Message" rows={4}></textarea>
                <button type="Submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm