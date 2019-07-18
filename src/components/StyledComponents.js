import styled from "styled-components"; 

// App.js "Nasa's photo/video of the Day"
export const Title = styled.h1`
    text-align: center; 
`;

// App.js "Description of photo"
export const Description = styled.p`
    text-align: center; 
    padding: 10px 0; 
`;

// Header.js styles 
export const NavContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
`;

export const Navigation = styled.nav`
    width: 35%; 
    display: flex; 
    flxe-direction: row; 
    justify-content: space-between; 
    margin: 20px 0; 
`; 

export const NasaLogo = styled.img`
    height: 50px; 
    padding-top: 10px; 
`; 

// DataHeader.js styles 
export const DataDiv = styled.div`
    text-align: center; 
`;

// CreateImage.js styles 
export const NasaImg = styled.img` 
    width: 100%; 
`; 

export const NasaImgDiv = styled.div`
    width: 100%; 
`;