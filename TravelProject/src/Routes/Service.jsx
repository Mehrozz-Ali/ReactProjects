import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Trip from "../Components/Trip"

function Service() {
    return (
        <>
            <Navbar />
            <Hero cName="heroMid"
                heroImg="https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                title="Services"
                btnText="Travel Plan"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service