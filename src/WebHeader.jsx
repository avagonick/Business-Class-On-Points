import {NavBar} from "./NavBar"
import "./WebHeader.css"

export function WebHeader(){
    return(
    <header>
        <div id ="CompanyHeader">
            <h1 id = "CompanyName">
                Business Class On Points
            </h1>
        </div>
        <NavBar/>
    </header>
    )
}