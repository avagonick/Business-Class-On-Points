import "./Home.css"

export function Home(){
    console.log("Home component rendered");
    return(
        <div id = "For-Pad">
            <div id = "Home">
                <h2 id = "Statement">Are you ready to turn your everyday <br/> spending into free flights?</h2>
                <section class = "BigDraw">
                    <div id = "Learn">
                        <h2>Learn</h2>
                        <hr></hr>
                        <p>Discover the secrets of maximizing your frequent flyer miles and credit card rewards. Understand how to navigate complex credit card programs, identify lucrative point-earning opportunities, and turn your everday spending into business class tickets.</p>
                    </div>
                    <div id = "Earn">
                        <h2>Earn</h2>
                        <hr></hr>
                        <p>Leverage credit card sign-up bonuses, category spending multipliers, and airline partnerships to rapidly accumulate miles and points. Unlock access to exclusive airport lounges and priority boarding.</p>
                    </div>
                    <div id = "Enjoy">
                        <h2>Enjoy</h2>
                        <hr></hr>
                        <p>Fly in a flatbed business or first class seat for the same price as a coach ticket in just six months. Relax in luxury airplane lounges before your fight, enjoying complimentary food, drinks, and amenities before your flight.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}