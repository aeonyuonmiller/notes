import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import IlluNote from '../icon/illuNote';
import './Menu.css';

const Menu = ({ closeModal, logoutBtn }) => {

    return (
            <motion.div className="backdrop"
                key="whut"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <motion.div className="wrapperMenu"
                    key="whii"
                    initial={{ scale: 0.95, opacity: 1, x: 300, rotate: 8 }}
                    animate={{ scale: 1, opacity: 1, x: 0, rotate: 0 }}
                    exit={{ x: 500, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 700, damping: 70 }}>
                    <div className="close" onClick={closeModal} tabIndex="1">&times;</div>
                    <motion.div className="logout" whileHover={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={logoutBtn} tabIndex="2">Logout</motion.div>
                    <div className="no-notes">
                        <IlluNote />
                        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 700, damping: 70 }}>Keep looking for notes...</motion.p>
                    </div>
                </motion.div>
            </motion.div>
    )
}

export default Menu
