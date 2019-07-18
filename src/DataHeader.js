import React from "react";

const DataHeader = (props) => {
    
    // add the imported data to state
    
    return (
      <div className = "date-title-container">
        
        {/* add data in header tags */}
        <h3 className = "date">{props.currentDate}</h3>
        <h2 className = "title">{props.dataTitle}</h2>
        
      </div>
    );
};
  
export default DataHeader; 