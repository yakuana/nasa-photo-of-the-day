import React from "react"; 

const Header = (props) => {

    // navItems stores the object passed in as a prop
    const navItems = props.navItems; 
    // console.log(navItems); 

    return (
        <div className = "header">
            <h1 className = "nasa-logo">Nasa</h1>
            <nav className = "navigation">

                {/* link[0][0] is a website link and link[0][1] is a string */}
                {Object.entries(props.navItems).map((link) => {
                    console.log("link array of length 2:", link);
                    return <a href = {link[1][0]} className = "tab">{link[1][1]}</a>})}
            </nav>
        </div>
    ); 

}

export default Header 