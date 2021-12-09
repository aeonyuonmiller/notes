import React from 'react';
import './Menu.css';

const Menu = ({ closeModal }) => {

    return (
        <div className="backdrop">
            <div className="wrapperMenu">
                <div className="close" onClick={closeModal}>&times;</div>
                <p>Keep looking for notes...</p>
            </div>
        </div>
    )
}

export default Menu
