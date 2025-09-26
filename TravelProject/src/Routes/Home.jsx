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
                heroImg="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=kiQ0Oc52rpY5wnYKPf-tLEfQ3BlwG7p0DH2-bealCn4="
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