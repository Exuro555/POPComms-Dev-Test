import React, { useState } from "react";


const Search = ({ searchInput , handleChange }) => {

    

    return (
        <div >
            <input style={Styles.inputBox} value={searchInput} onChange={handleChange} />
        </div>
    )
};

const Styles = {
    inputBox: {
        height: "40px",
        width: "300px",
        borderRadius: "12px",
        border: "0px",
        marginLeft: "20px",

    }
}

export default Search;