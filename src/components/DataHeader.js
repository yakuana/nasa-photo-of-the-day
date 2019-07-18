import React from "react";

const DataHeader = (props) => {
    
    return (
      <div className = "date-title-container">
        
        {/* add data to header tags */}
        <h3 className = "date">{props.currentDate}</h3>
        <h2 className = "title">{props.dataTitle}</h2>
        
      </div>
    );
};
  
export default DataHeader; 