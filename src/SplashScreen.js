import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const coverVariants = {
    exit: {
        y: "-89vh",
        transition: { duration: 0.8 },
        ease: "easeOut"
    }
}


const SplashScreen = () => {



    return (
            <motion.div
                style={Styles.cover}
                variants={coverVariants}
                exit="exit"
            >
            </motion.div>
    )
}

const Styles = {
    cover: {
        height: "100vh",
        width: "400px",
        backgroundColor: "#262626"
    }
}

export default SplashScreen;