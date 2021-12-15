import React, { useState } from 'react';
import './Message.css';
import { getFirestore } from '@firebase/firestore';

const Message = ({ close, sendNote }) => {

    const db = getFirestore();
    const [safeText, setText] = useState("");
    const handleTextChange = (e) => {
        setText(e.target.value)
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
