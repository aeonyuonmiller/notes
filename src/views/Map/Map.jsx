import React from 'react'
import './Map.css'

import Button from '../../components/Button/Button'

const Map = () => {
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
