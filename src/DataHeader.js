import React from "react";

const DataHeader = ({dataTitle, currentDate}) => {
    
    // add the imported data to state
    
    return (
      <div className = "date-title-container">
        
        {/* add data in header tags */}
        <h3 className = "date">{currentDate}</h3>
        <h2 className = "title">{dataTitle}</h2>
        
      </div>
    );
};
  
export default DataHeader; 