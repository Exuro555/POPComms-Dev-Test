import React from "react";
import ContactCard from "./ContactCard";
import UserPreview from "./UserPreview";
import { motion } from "framer-motion";


//Animation variants


//Callback Function to loop through and create user info containers
const userContainerLoop = (results, handleSelectingPerson) => {


  const itemVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  

  
  return (
    <motion.div 
      
    >
      <ul style={Styles.ul} >
        {results.map((person, i) => {
          
          return (
            <motion.li 
            key={i}
            style={Styles.li}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.37, delay: i * 0.11 }}
            >
              <ContactCard key={i}            >
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
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};


const Styles = {
  ul: {
    listStyle: 'none'
  },
  li: {
    marginLeft: -35
    
  }
}


//Creates contact info containers and passes state
const PersonalInfoContainer = ({ dataArray, handleSelectingPerson }) => {
  return <div>{userContainerLoop(dataArray, handleSelectingPerson)}</div>;
};

export default PersonalInfoContainer;
