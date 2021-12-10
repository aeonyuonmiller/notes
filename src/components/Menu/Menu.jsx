import React from 'react';
import IlluNote from '../icon/illuNote';
import './Menu.css';

const Menu = ({ closeModal }) => {

    return (
        <div className="backdrop">
            <div className="wrapperMenu">
                <div className="close" onClick={closeModal} tabIndex="1">&times;</div>
                <div className="logout" onClick={closeModal} tabIndex="2">Logout</div>
                <div className="no-notes">
                    <IlluNote />
                    <p>Keep looking for notes...</p>
                </div>
            </div>
        </div>
    )
}

export default Menu
