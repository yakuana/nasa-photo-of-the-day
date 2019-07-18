import React from "react";

const CreateImage = (props) => {
    console.log(props.type)
    console.log(props.dataUrl)

    return (
      <div className = "photo">

        {/* if media_type is a video, display iframe tag. otherwise, display the image tag */}
        {props.type === "video" ? <iframe src = {props.dataUrl} type = {props.type}></iframe> : <img src = {props.dataUrl} alt = "Nasa's art of the day."/>}
        
      </div>
    );

};
  
export default CreateImage; 