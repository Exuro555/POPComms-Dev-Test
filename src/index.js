import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import ScrollDiv from "./ScrollDiv";
import PersonalInfoContainer from "./PersonalInfoContainer";
import axios from "axios";
import Modal from "react-modal";
import SelectedPersonInfo from "./SelectedPersonInfo";
import SplashScreen from "./SplashScreen";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import ModifierContainer from "./ModifierContainer";


const App = () => {
  //Gets data from API
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50&nat=gb")
      .then((response) => {
        setPopAPI(response.data.results);
      });
  }, []);


  //Animates loading screen
  const [ loadingScreen, setLoadingScreen ] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(true)
    }, 3000)
  })

  //State

  //API data storage
  const [popAPI, setPopAPI] = useState(null);

  //Handles state for search input
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  //Opens modal depending on
  const [selectedPerson, setSelectedPerson] = useState(null);
  const handleSelectingPerson = (person) => {
    setSelectedPerson(person);
    openModal(true);
  };

  //Filters persons based on search input
  const filteredData =
    popAPI &&
    popAPI.filter((person) => {
      const fullName = `${person.name.first} ${person.name.last}`;

      if (searchInput === "") {
        return person;
      }
      //toLowerCase on both to ignore user capitalisation
      if (
        fullName.toLowerCase().includes(searchInput.toLowerCase()) ||
        person.location.city.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return person;
      }
    });

  //Sort state

  const [valueDropDown, setValueDropDown] = useState(null);

  const items = [
    { label: "Default", value: null },
    { label: "First Name", value: "first" },
    { label: "Last Name", value: "last" },
  ];


  //Sorts by either first or last name
  const sortByName = () => {
    console.log(valueDropDown);
    const sorted = [...popAPI];
    sorted.sort(firstOrLastCompare);
    setPopAPI(sorted);
  };

  const firstOrLastCompare = (a, b) => {
    console.log(valueDropDown);
    if (a.name[valueDropDown] < b.name[valueDropDown]) {
      return -1;
    }
    if (a.name[valueDropDown] > b.name[valueDropDown]) {
      return 1;
    }
    return 0;
  };

  // Modal popout

  Modal.setAppElement("#root");


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

//Animation Variants

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visable: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1
    }
  }
}

const [scrollLoadDelay, setScrollLoadDelay] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setScrollLoadDelay(true)
  }, 5000)
})


  return (<AnimatePresence >
    {popAPI && loadingScreen ? (
      
    <div 
    style={Styles.pageStyling}
      >
        <Header/>

        <motion.div
          key="1" 
          variants={containerVariants}
          initial="hidden"
          animate="visable"
        >
          <ModifierContainer
            searchInput={searchInput}
            handleChange={handleChange}
            items={items}
            setValueDropDown={setValueDropDown}
            sortByName={sortByName}
          />

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={{
              content: {
                color: "lightsteelblue",
                borderRadius: "30px",
                maxWidth: "320px",
                overflowX: "hidden",
              },
            }}
            contentLabel="Contact Modal"
          > {/*Error here so forced to only load <SelectedPerson when sele  */}
            {selectedPerson && <SelectedPersonInfo selectedPerson={selectedPerson} />}
          </Modal>

          {scrollLoadDelay ? (<ScrollDiv style={Styles.flexPosition2}>
            <div style={Styles.contactPane}></div>
            {/* Modal End */}
            <div className="ui container comments" style={Styles.pageStyling}>
              <PersonalInfoContainer
                dataArray={filteredData}
                handleSelectingPerson={handleSelectingPerson}
              />
            </div>
          </ScrollDiv>) : (
            <div></div>
          )}
        </motion.div>
    </div>
  ) : (
      <SplashScreen key="2"/>
  )}
  </AnimatePresence>
  );
};

//Custom Styles
const Styles = {
  pageStyling: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    borderRadius: "20px",
    color: "black",
  },
 
  flexPosition2: {
    order: "2",
  },
  contactPane: {
    order: "2",
    maxWidth: "400px",
    backgroundColor: "red",
  },

  
};

ReactDom.render(<App />, document.querySelector("#root"));
