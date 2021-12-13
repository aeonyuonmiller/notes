import React, { useContext, useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import { AuthContext } from '../../context/authContext';
import 'mapbox-gl/dist/mapbox-gl.css';
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
    const [currentPosition, setCurrentPosition] = useState(null);

    const getTextMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messages = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            messages.push(doc.data());
        });
        setMessages(messages);
        console.log(messages)
    }

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setCurrentPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    });
    } 

    useEffect(() => {
        getTextMessages();

        if ("geolocation" in navigator) {
            console.log("Available");
            getCurrentPosition();
        } else {
            console.log("Not Available");
        }
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
                <Karte style="mapbox://styles/mapbox/streets-v9" center={[currentPosition.longitude, currentPosition.latitude]} zoom={[18]}
                    containerStyle={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                    {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}> */}
                    {messages.length !== 0 && messages.map((message, index) =>
                        <Marker key={index} coordinates={message.geoInfo} anchor="bottom">
                            <div className="notes">{message.textMessage}</div>
                        </Marker>
                    )}
                    {/* </Layer> */}
                </Karte>
            </div>
        </>
    )
}

export default Map
