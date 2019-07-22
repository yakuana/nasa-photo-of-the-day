import React from "react";
import { DataDiv } from "./StyledComponents";

const DataHeader = (props) => {
    
    return (
      <DataDiv className = "date-title-container">
        
        {/* add data to header tags */}
        <h3 className = "date">{props.currentDate}</h3>
        <h2 className = "title">{props.dataTitle}</h2>
        
      </DataDiv>
    );
};
  
export default DataHeader; 