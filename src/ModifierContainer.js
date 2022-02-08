import React from "react";
import Search from "./Search";
import DropDown from "./DropDown";


const ModifierContainer = ({ searchInput, handleChange, items, setValueDropDown, sortByName }) => {
    return (
        <div style={Styles.modifierContainer}>
            <h3 style={Styles.headerTitles}>Search name/location</h3>

            <Search searchInput={searchInput} handleChange={handleChange} />

            <h3 style={Styles.headerTitles}>Sort by</h3>

            <DropDown
              items={items}
              onChange={(e) => {
                console.log(e);
                setValueDropDown(e.currentTarget.value);
              }}
            />
            <button
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                marginBottom: "20px",
                color: "#0d0d0d",
                fontSize: "15px",
              }}
              onClick={sortByName}
            >
              Sort
            </button>
          </div>
    )
}


const Styles = {
    searchPosition: {
        marignTop: "100px",
      },
    
      modifierContainer: {
        backgroundColor: "#ededed",
        height: "230px",
        width: "100%",
        paddingTop: "8px",
        boxShadow: "0px 10px 5px rgb(220 220 220)",
      },
      headerTitles: {
        marginTop: "20px",
        marginLeft: "20px",
        color: "#0d0d0d",
        fontSize: "15px",
      },
}

export default ModifierContainer;