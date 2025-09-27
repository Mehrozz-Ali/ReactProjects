import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm"

function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="heroMid"
                heroImg="https://trippyplan.netlify.app/Assetsimg/2.jpg"
                title="Contact"
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact