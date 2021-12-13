import React, { useContext, useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";

import ReactMapboxGl, { Layer, MapContext, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AuthContext } from '../../context/authContext';
import './Map.css';

import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import Menu from '../../components/Menu/Menu';

const Karte = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWVvbnl1b25taWxsZXIiLCJhIjoiY2phMTIybmNsMjFjeTMzbGdpcGdiM3J6ayJ9.FmtdgLWmMf4vgsagMsk-JQ',
    interactive: true,
    attributionControl: false,
    logoPosition: 'bottom-left',
});

const Map = () => {
    const { user, handleLogout } = useContext(AuthContext);
    const db = getFirestore();

    console.log("something", user);

    const [modal, setModal] = useState(false);
    const handleModal = () => { setModal(!modal) };
    const [messages, setMessages] = useState([]);

    const getTextMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messages = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            messages.push(doc.data());
        });
        setMessages(messages);
    }

    useEffect(() => {
        getTextMessages();
    }, []);

    return ( 
        <>
            <div className="topnav">
                <Button text="Drop note" />
                <h3>Explore</h3>
                <Avatar onClick={handleModal} />
                {modal && (<Menu closeModal={handleModal} logoutBtn={handleLogout} />)}
            </div>
            <div id="map">
                <Karte style="mapbox://styles/mapbox/streets-v9" center={[13.4496, 52.4784]} zoom={[18]}
                    containerStyle={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    {messages.length !== 0 && messages.map(message =>
                        <Marker coordinates={[13.4496, 52.4784]} anchor="bottom" />
                    )}
                    </Layer>
                </Karte>
            </div>
        </>
    )
}

export default Map
