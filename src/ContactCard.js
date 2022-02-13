import React from "react";

const ContactCard = (props) => {
  return <div style={Styles.contactContainer}> {props.children} </div>;
};

const Styles = {
  contactContainer: {
    border: "1px solid #ededed",
    width: "330px",
    borderRadius: "20px",
    color: "red",
    backgroundColor: "#fdfdfd",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "8px 8px 24px #bebebe, -8px -8px 24px #ffffff",
  },
};

export default ContactCard;
