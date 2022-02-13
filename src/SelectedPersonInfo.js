import React from "react";

const SelectedPersonInfo = ({ selectedPerson, closeModal }) => {
  return (
    <div>
      <div>
        <img
          alt="Avatar"
          src={selectedPerson.picture.large}
          style={Styles.contactImage}
        />
      </div>
      <div style={Styles.contactName}>
        <h1>{`${selectedPerson.name.first} ${selectedPerson.name.last}`}</h1>
      </div>
      <div style={Styles.personInfoContainer}>
        <h2 style={Styles.heading2}>Age</h2>
        <h3 style={Styles.heading3a}>{selectedPerson.dob.age}</h3>
        <h2 style={Styles.heading2}>Email</h2>
        <h3 style={Styles.heading3}>{selectedPerson.email}</h3>
        <h2 style={Styles.heading2}>Mobile</h2>
        <h3 style={Styles.heading3}>{selectedPerson.cell}</h3>
        <h2 style={Styles.heading2}>Phone</h2>
        <h3 style={Styles.heading3}>{selectedPerson.phone}</h3>
        <h2 style={Styles.heading2}>Address</h2>
        <h3
          style={Styles.heading3}
        >{`${selectedPerson.location.street.number} ${selectedPerson.location.street.name}, 
                        ${selectedPerson.location.city}, 
                        ${selectedPerson.location.state}, 
                        ${selectedPerson.location.postcode}
                        `}</h3>
      </div>
    </div>
  );
};

const Styles = {
  contactName: {
    transform: "translateY(-50px) translateX(-50px)",
    color: "white",
    marginLeft: "15px",
  },

  heading2: {
    color: "#e26087",
    fontSize: "14px",
  },

  heading3: {
    color: "#0d0d0d",
    fontSize: "12px",
  },

  heading3a: {
    transform: "translateY(-24px)",
    color: "#0d0d0d",
    fontSize: "12px",
  },

  contactImage: {
    minWidth: "100%",
    borderRadius: "10px 10px 0px 0px",
  },

  personInfoContainer: {
    transform: "translateY(-15px)",
    display: "grid",
    grid: "15px / 1fr 3fr",
  },
};

export default SelectedPersonInfo;
