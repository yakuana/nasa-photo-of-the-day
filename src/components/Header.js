import React from "react"; 
import nasaLogo from "./img/nasaLogo.jpg"; 
import { NavContainer, NasaLogo, Navigation } from "./StyledComponents";

const Header = (props) => {

    // navItems stores the object passed in as a prop
    const navItems = props.navItems; 
    // console.log(navItems); 

    return (
        <NavContainer className = "header">
            <NasaLogo src={nasaLogo} alt="Nasa's logo" className = "nasa-logo"/>
            <Navigation className = "navigation">

                {/* loop over navItems object and return a tags for navigation bar */}
                {Object.entries(navItems).map((link) => {
                    console.log("link array of length 2:", link);
                    
                    // link[0] is the word "link 1/2/3", link[1][0] is a website link, link[1][1] is a string 
                    return <a href = {link[1][0]} className = "tab" key={link[0]}>{link[1][1]}</a>})}
                    
            </Navigation>
        </NavContainer>
    ); 

}

export default Header 