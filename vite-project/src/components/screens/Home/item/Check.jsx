import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({isComplited}) => {

    const divStyles = {
    border: '2px solid pink',
    width: '24px',
    height: '24px',
    borderRadius: '10px',
    marginRight: '10px',
    backgroundColor: '',
    userSelect: "none",
   }


    return (

        <div style={divStyles}>

            {isComplited &&
            <BsCheck size={24} style={{color: 'gray', backgroundColor: 'pink', borderRadius: '7px'}}/>
            }
        </div> 
    )
}

export default Check