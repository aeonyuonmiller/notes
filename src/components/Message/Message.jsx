import React from 'react';
import './Message.css';

const Message = ({ close, drop }) => {

    return (
        <>
            <div className="wrapperMessage">
                <div className="sendBtn" onClick={drop} tabIndex="2">Drop</div>
                    <form>
                        <input type="text" placeholder="Drop a note..." />
                    </form>
            </div>
            <div className="backdropMessage" onClick={close}></div>
        </>
    )
}

export default Message
