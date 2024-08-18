import "./NavBar.css"
import {useState} from 'react'

export function NavBar(){
    const [Toggled, setToggled] = useState(false);
    return(
    <nav>
        <div id = "Menu" onClick = {() => {console.log('hi'); setToggled(!Toggled)}}> MENU</div>
        <div id = {Toggled ? "MenuOn" : "MenuOff"}>
            <ul id = "navBar"> 
                <li><a href = "#For-Pad">Home</a></li>
                <li><a href = "#GetStarted">Get Started</a></li>
                <li><a href = "">About Me</a></li>
                <li id = "Gallery"><a href = "">Gallery</a></li>
            </ul> 
        </div>
    </nav>
    )
}