import "./Home.css"

export function Home(){
    console.log("Home component rendered");
    return(
        <div id = "For-Pad">
            <div id = "Home">
                <h2 id = "Statement">Are you ready to turn your everyday <br/> spending into free flights?</h2>
                <section id = "BigDraw">
                    <par id = "FlyerMiles">Unlock the full potential of your frequent flyer miles. From leveraging airline loyalty programs and credit card rewards to optimizing point transfers, ensure every mile works to your advantage</par>
                    <par id = "CreditCards">Learn how to navigate the credit card jungle to unlock exclusive airport lounges, priority boarding, and turn your everyday spending into business class tickets</par>
                    <par id = "Guarentee">Fly in a flatbed business or first class seat for the same price as a coach ticket in just six months</par>
                </section>
            </div>
        </div>
    );
}