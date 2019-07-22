import React from "react";
import { NasaImgDiv, NasaImg } from "./StyledComponents";

const CreateImage = (props) => {
    console.log(props.type)
    console.log(props.dataUrl)

    return (
      <NasaImgDiv className = "photo">

        {/* if media_type is a video, display iframe tag. otherwise, display the image tag */}
        {props.type === "video" ? <iframe src = {props.dataUrl} type = {props.type} title = {props.type}></iframe> : <NasaImg src = {props.dataUrl} alt = "Nasa's art of the day."/>}
        
      </NasaImgDiv>
    );

};
  
export default CreateImage; 