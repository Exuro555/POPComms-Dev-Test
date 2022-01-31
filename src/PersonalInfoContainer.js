import React from "react";
import ContactCard from "./ContactCard";
import UserPreview from "./UserPreview";

//Callback Function to loop through and create user info containers
const userContainerLoop = (results, handleSelectingPerson) => {
  return (
    <div>
      {results.map((person, i) => {
        
        return (
          <ContactCard key={i}>
            <UserPreview
              avatar={person.picture.thumbnail}
              firstName={person.name.first}
              lastName={person.name.last}
              age={person.dob.age}
              location={person.location}
              person={person}
              handleSelectingPerson={handleSelectingPerson}
            />
          </ContactCard>
        );
      })}
    </div>
  );
};

//Creates contact info containers and passes state
const PersonalInfoContainer = ({ dataArray, handleSelectingPerson }) => {
  return <div>{userContainerLoop(dataArray, handleSelectingPerson)}</div>;
};

export default PersonalInfoContainer;
