import React from "react";

const ScrollDiv = props => {
    return (
        <div style={Styles.scrollBox}> {props.children} </div>
    );
};

const Styles ={
    scrollBox: { 
        justifyContent: "start",
        overflowY: "scroll",
        scrollbarWidth: "none", 
        maxHeight: "65vh",
        minWidth: "300px", 
        maxWidth: "400px", 
        padding: "10px",
        
    }
};

export default ScrollDiv;