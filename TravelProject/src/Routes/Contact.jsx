import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm"

function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="heroMid"
                heroImg="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=kiQ0Oc52rpY5wnYKPf-tLEfQ3BlwG7p0DH2-bealCn4="
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