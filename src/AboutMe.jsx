import './AboutMe.css';
import headshot from './Images/Headshot.png';

export function AboutMe() {
    return (
        <div id="AboutMe">                         
            <div class="split-container">
                  <div class="left-box">
                    <img src={headshot} id="headshot"/>
                 </div>
                 <div class="right-box">
                        <section> 
                        <div className="HuyPham">
                            <h2 className="Intro">David Huy Pham</h2>
                            <p className="text"> <strong>contact</strong>: hatecoachseats@gmail.com </p>
                            <hr></hr>
                            <p className="text"> After two decades of traveling, I realized that my body can no longer endure long-haul flights in coach. Over the past five years, I’ve explored countless strategies to secure flatbed seats for a fraction of the cost—or even for free. I've perfected the art of farming and harvesting miles and points from normal spending.<br></br> <br></br>

                                I specialize in finding you the flatbed seat you need to survive the 20 hour flight, for the same price as a coach flight.

                                <br></br> <br></br> <strong>Not all credit cards are created equal</strong>. Some unlock exclusive benefits like airport lounges, priority boarding, and even business class seats. Let me guide you through this complex landscape. </p>
                        </div>
                        </section>
                                
                 </div>
            </div>
        </div>
    );
}
