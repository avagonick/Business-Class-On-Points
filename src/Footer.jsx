import './Footer.css'

export function Footer(){
return (
<footer id="Footer">
    <div id = "FooterContainer">
        <div><a href = "" target= "_blank" id = "CreditForm">Inquiry Form</a></div>
        <div className = "Sep">|</div>
        <div id = "PhoneNumber"> Phone Number</div>
        <div className = "Sep">|</div>
        <div id = "MadeBy">Developed by Ava, Lillian, and Max Gonick</div>
    </div>
    <div id = "CopyWrite">&#169;2024 Business Class On Points</div>
</footer>
    )
}