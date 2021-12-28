import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Message.css';
import { getFirestore, collection, addDoc } from '@firebase/firestore';

const Message = ({ close, longitude, latitude }) => {

    const db = getFirestore();
    const [safeText, setText] = useState("");
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const sendNote = async () => {
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                createdAt: new Date(),
                geoInfo: [longitude, latitude],
                textMessage: safeText
            });
            close();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const variants = {
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.61, 1, 0.88, 1] }},
        exit: { opacity: 0, y: 50 }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="wrapperMessage" initial="initial" animate="enter" exit="exit" variants={variants} >
                <div className="sendBtn" onClick={sendNote} tabIndex="2">Drop</div>
                    <form>
                        <input type="text" placeholder="Drop a note..." value={safeText} onChange={handleTextChange} />
                    </form>
            </motion.div>
            <div className="backdropMessage" onClick={close}></div>
        </AnimatePresence>
    )
}

export default Message
