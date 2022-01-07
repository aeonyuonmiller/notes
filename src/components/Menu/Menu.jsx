import React from 'react';
import { motion } from "framer-motion";
import IlluNote from '../icon/illuNote';
import './Menu.css';

const Menu = ({ closeModal, logoutBtn }) => {

    const menuV = {
        initial: { scale: 0.95, opacity: 1, x: 300, rotate: 8, transition: { type: "spring", stiffness: 700, damping: 70 } },
        enter: { scale: 1, opacity: [0, 1, 1], x: 0, rotate: 0, transition: { type: "spring", stiffness: 700, damping: 70 }},
        exit: { x: 50, opacity: 0 },
    }

    return (
            <motion.div className="backdrop"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition:{ type: "tween", delay: .2}}}>
                <motion.div className="wrapperMenu" variants={menuV}
                    initial="initial" animate="enter" exit="exit" transition="transition">
                    <div className="close" onClick={closeModal} tabIndex="1">&times;</div>
                    <motion.div className="logout" whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} onClick={logoutBtn} tabIndex="2">Logout</motion.div>
                    <div className="no-notes">
                        <IlluNote />
                        <motion.p initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 700, damping: 70}}>Keep looking for notes...</motion.p>
                    </div>
                </motion.div>
            </motion.div>
    )
}

export default Menu
