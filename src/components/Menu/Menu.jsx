import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import IlluNote from '../icon/illuNote';
import './Menu.css';

const Menu = ({ closeModal, logoutBtn }) => {

    return (
        <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="wrapperMenu" initial={{ opacity: 0, x: 150, rotate: 20 }} animate={{ opacity: 1, x: 0, rotate: 0 }}>
                <div className="close" onClick={closeModal} tabIndex="1">&times;</div>
                <div className="logout" onClick={logoutBtn} tabIndex="2">Logout</div>
                <div className="no-notes">
                    <IlluNote />
                    <p>Keep looking for notes...</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Menu
