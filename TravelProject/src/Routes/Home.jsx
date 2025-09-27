import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Destination from "../Components/Destination"
import Trip from "../Components/Trip"
// import Footer from "../Components/Footer";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero cName="hero"
                heroImg="https://trippyplan.netlify.app/Assetsimg/12.jpg"
                title="Your Journey Your Story"
                text="Choose Your favourite Destination"
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home