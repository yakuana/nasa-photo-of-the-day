import React from "react";

const CreateImage = (props) => {
    
    if (props.type == "image") {
      // PoD is an image 
      return (
        <div className = "photo">
    
          {/* add data in header tags */}
          <img src = {props.dataUrl} type = {props.type} alt = "Nasa's image of the day."/>
          
        </div>
      );

    } else if (props.type == "video") {
      // PoD is a video 
        return (
          <div className = "photo">
            {/* add data in header tags */}
            <iframe src = {props.dataUrl} type = {props.type}></iframe>
            
          </div>
        );
    }
    
};
  
export default CreateImage; 