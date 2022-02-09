import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SelectedPersonInfo from "./SelectedPersonInfo";

const backdropVariants = {
  visable: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visable: {
    scale: 1,
    y: "5vh",
    opacity: 1,
    transition: { delay: 0.5, duration: 0.7 },
  },
};

const ContactModal = ({ modalIsOpen, selectedPerson, closeModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {modalIsOpen && (
        <motion.div
          style={Styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visable"
          exit="hidden"
        >
          <motion.div style={Styles.modalContainer} variants={modal}>
            {selectedPerson && (
              <SelectedPersonInfo
                closeModal={closeModal}
                selectedPerson={selectedPerson}
              ></SelectedPersonInfo>
            )}
            <svg 
                style={{
                    height: "50px", 
                   
                    fill: "#e7e7e7"
                }}
                onClick={closeModal}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
              <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 3,
  },
  modalContainer: {
    top: 0,
    maxWidth: "350px",
    height: "85vh",
    marginLeft: "20px",
    marginRight: "20px",
    background: "white",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default ContactModal;
