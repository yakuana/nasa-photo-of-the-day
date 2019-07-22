import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { FooterDiv } from "./StyledComponents";

const Footer = () => {
    return (
        <FooterDiv className = "footer">
            <a href="https://www.instagram.com/nasa/?hl=en" className = "footer-logo"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/NASA/" className = "footer-logo"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className = "footer-logo"><FontAwesomeIcon icon={faTwitter} /></a>
        </FooterDiv>
    );
};

export default Footer; 