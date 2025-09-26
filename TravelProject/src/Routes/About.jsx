import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from "../Components/Footer"
import AboutUs from "../Components/AboutUs"

function About() {
    return (
        <>
            <Navbar />
            <Hero cName="heroMid"
                heroImg="https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                title="About"
                btnText="Travel Plan"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About