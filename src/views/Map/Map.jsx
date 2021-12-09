import React, { useContext, useRef, useEffect, useState } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AuthContext } from '../../context/authContext';
import './Map.css';

import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import Menu from '../../components/Menu/Menu';

const Karte = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWVvbnl1b25taWxsZXIiLCJhIjoiY2phMTIybmNsMjFjeTMzbGdpcGdiM3J6ayJ9.FmtdgLWmMf4vgsagMsk-JQ',
    zoom: 20,
    maxZoom: 20,
    interactive: false,
    attributionControl: false,
    logoPosition: 'bottom-left',
    center: [ 30.2416815, 51.5285582 ]
});

const Map = () => {
    const { user, handleLogout } = useContext(AuthContext);
    
    console.log("something", user);

    const [modal, setModal] = useState(false);
    const handleModal = () => { setModal(!modal) };


    return ( 
        <>
            <div className="topnav">
                <Button text="Drop note" />
                <h3>Explore</h3>
                {/* <Button onClick={handleLogout} text="Logout" /> */}
                <Avatar onClick={handleModal} />
                {modal && (<Menu closeModal={handleModal} />)}
            </div>
            <div id="map">
                <Karte style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[31.00, 51.3233379650232]} />
                    </Layer>
                </Karte>
            </div>
        </>
    )
}

export default Map
