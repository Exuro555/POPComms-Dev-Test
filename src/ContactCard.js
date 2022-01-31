import React from "react";

const ContactCard = (props) => {
  return <div style={Styles.contactContainer}> {props.children} </div>;
};

const Styles = {
  contactContainer: {
    border: "1px solid #ededed",
    width: "300px",
    borderRadius: "20px",
    color: "red",
    backgroundColor: "#efefef",
    padding: "10px",
    marginTop: "20px",
  },
};

export default ContactCard;
