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
                        <div className="HuyPham">
                            <h2 className="Intro">David Huy Pham</h2>
                            <p className="text"> <strong>contact</strong>: hatecoachseats@gmail.com </p>
                            <hr></hr>
                            <p className="text">As an avid traveler, I’ve always been passionate about exploring the world with <strong>comfort and style</strong>. </p>
                            <br></br>
                            <p className="text"> <strong>My mission:</strong> <br></br>
                                To help others discover how to fly first class for a fraction of the cost using 
                                credit card rewards and smart travel strategies. I believe everyone deserves to experience the 
                                luxury of premium travel without breaking the bank, 
                                and I’m here to guide you on this journey. Let’s make your dream trip a reality together! </p>
                        </div>
                                
                 </div>
            </div>
        </div>
    );
}
