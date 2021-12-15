import React, { useState } from 'react';
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

    return (
        <>
            <div className="wrapperMessage">
                <div className="sendBtn" onClick={sendNote} tabIndex="2">Drop</div>
                    <form>
                        <input type="text" placeholder="Drop a note..." value={safeText} onChange={handleTextChange} />
                    </form>
            </div>
            <div className="backdropMessage" onClick={close}></div>
        </>
    )
}

export default Message
