import React from "react";
import Styles from "./Destination.module.css"
import DestinationData from "./DestinationData";

function Destination(props) {
    return (
        <>
            <div className={Styles.destination}>
                <h1>Popular Destination</h1>
                <p>Tour gives you the opportunity to see a lot, within a time frame</p>

                <DestinationData className="firstDes"
                    heading="Total volcanos"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consequuntur! Accusamus nesciunt error laudantium, optio dolore unde explicabo temporibus nihil nisi quis sit, provident dolorem obcaecati ipsam consequuntur, est corrupti.
                        Voluptas, ullam hic dicta nesciunt suscipit sequi quaerat facilis voluptates quo eveniet optio quas recusandae blanditiis quia fugit dolorum sed excepturi facere pariatur consequatur? Voluptatem deleniti sit omnis voluptate quae!"
                    img1="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"
                    img2="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                />
                <DestinationData className="firstDesReverse"
                    heading="Total volcanos"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consequuntur! Accusamus nesciunt error laudantium, optio dolore unde explicabo temporibus nihil nisi quis sit, provident dolorem obcaecati ipsam consequuntur, est corrupti.
                        Voluptas, ullam hic dicta nesciunt suscipit sequi quaerat facilis voluptates quo eveniet optio quas recusandae blanditiis quia fugit dolorum sed excepturi facere pariatur consequatur? Voluptatem deleniti sit omnis voluptate quae!"
                    img1="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"
                    img2="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                />
            </div>
        </>
    )
}

export default Destination