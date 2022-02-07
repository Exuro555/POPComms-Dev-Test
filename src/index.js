import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import ScrollDiv from "./ScrollDiv";
import PersonalInfoContainer from "./PersonalInfoContainer";
import Search from "./Search";
import axios from "axios";
import Modal from "react-modal";
import DropDown from "./DropDown";
import SelectedPersonInfo from "./SelectedPersonInfo";
import SplashScreen from "./SplashScreen";
import { motion, AnimatePresence } from "framer-motion";


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

  let subtitle;
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
        <div style={Styles.headerContainer}>
          <svg
          style={{ height: 40, color: "#ededed", marginTop: "21px" }}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="address-book"
          className="svg-inline--fa fa-address-book"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z"
          ></path>
          </svg>
        <h1
          style={{
            color: "#e7e7e7",
            marginLeft: "20px",
            
          }}
        >
          Contacts
        </h1>
      </div>
        <motion.div
          key="1" 
          variants={containerVariants}
          initial="hidden"
          animate="visable"
        >
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
  headerContainer: {
    display: "flex",
    justifyContent: "start",
    height: "100px",
    width: "100%",
    backgroundColor: "#262626",
    paddingTop: "10px",
    paddingLeft: "20px",
  },

  headerTitles: {
    marginTop: "20px",
    marginLeft: "20px",
    color: "#0d0d0d",
    fontSize: "15px",
  },

  flexPosition2: {
    order: "2",
  },

  contactPane: {
    order: "2",
    maxWidth: "400px",
    backgroundColor: "red",
  },

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
};

ReactDom.render(<App />, document.querySelector("#root"));
