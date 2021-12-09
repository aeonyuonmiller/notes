import React from 'react';
import Button from '../Button/Button';
import './Menu.css';

const Menu = ({ closeModal }) => {

    return (
        <div className="backdrop">
            <div className="wrapperMenu">
                <div className="close" onClick={() => closeModal(true)}>&times;</div>
                <p>Keep looking for notes...</p>
            </div>
        </div>
    )
}

export default Menu
