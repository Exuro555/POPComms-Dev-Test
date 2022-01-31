import React from "react";

const DropDown = ({items , onChange}) => {
  
        return (
            <select style={Styles.dropDownContainer} onChange={onChange}>
            {items.map(({ label, value }) => ( 
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        );
      };

      const Styles = {
        dropDownContainer: {
            
            height: "40px",
            width: "300px",
            borderRadius: "12px",
            border: "0px",
            marginLeft: "20px",

        }
      }


export default DropDown;