import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../../context/authContext'
import './Map.css'

import Button from '../../components/Button/Button'

const Map = () => {
    const { user } = useContext(AuthContext);
    console.log("something", user);

    return (
        
        <>
            <div className="topnav">
                <Button text="Leave note" />
                <h3>Explore</h3>
                <Button text="Profile"/>
            </div>
            <div className="map">
            </div>
        </>
    )
}

export default Map
