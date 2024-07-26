import "./NavBar.css"
import {useState} from 'react'

export function NavBar(){
    const [Toggled, setToggled] = useState(false);


    return(
    <nav>
        <div id = "Menu" onClick = {() => {console.log('hi'); setToggled(!Toggled)}}> MENU</div>
        <div id = {Toggled ? "MenuOn" : "MenuOff"}>
            <ul id = "navBar"> 
                <li><a href = "">HOME</a></li>
                <li><a href = "">CONTACT ME</a></li>
                <li><a href = "">GALLERY</a></li>
            </ul> 
        </div>
    </nav>
    )
}