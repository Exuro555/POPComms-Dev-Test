import React from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";

const coverVariants = {
  exit: {
    y: "-100vh",
    transition: { duration: 0.8 },
    ease: "easeOut",
  },
};

const SplashScreen = () => {
  return (
    <motion.div style={Styles.cover} variants={coverVariants} exit="exit">
      <Loader />
    </motion.div>
  );
};

const Styles = {
  cover: {
    height: "110vh",
    width: "400px",
    backgroundColor: "#262626",
  },
};

export default SplashScreen;
