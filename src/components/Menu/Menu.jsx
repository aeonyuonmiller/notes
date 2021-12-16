import React from 'react';
// import { motion, AnimatePresence } from "framer-motion";
import IlluNote from '../icon/illuNote';
import './Menu.css';

const Menu = ({ closeModal, logoutBtn }) => {

    return (
        <div initial={{ opacity: 0 }} animate={{ opacity: 0 }} className="backdrop">
            <div initial={{ x: 100, rotate: "6deg" }} animate={{ x: 0, rotate: "0deg" }} className="wrapperMenu">
                <div className="close" onClick={closeModal} tabIndex="1">&times;</div>
                <div className="logout" onClick={logoutBtn} tabIndex="2">Logout</div>
                <div className="no-notes">
                    <IlluNote />
                    <p>Keep looking for notes...</p>
                </div>
            </div>
        </div>
    )
}

export default Menu
